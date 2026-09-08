import { useEffect, useMemo, useState } from "react";
import { Search, Heart } from "lucide-react";
import { type Movie } from "./data/movies";
import { getMovies,
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist
 } from "./api/movieapi";
import Navbar, { type Tab } from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import EmptyState from "./components/EmptyState";

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [watchlist, setWatchlist] = useState<Set<number>>(() => new Set());
  const [movies, setMovies] = useState<Movie[]>([]);
  const [featured, setFeatured] = useState<Movie | null>(null);

 useEffect(() => {
  getMovies()
    .then((response) => {
      const data: Movie[] = response.data;

      setMovies(data);

      if (data.length > 0) {
        const highestRated = data.reduce(
          (best, movie) =>
            movie.rating > best.rating ? movie : best,
          data[0]
        );

        setFeatured(highestRated);
      }
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
    });

getWatchlist()
  .then((response) => {
    const ids = response.data.map(
      (item: { movieId: number }) => item.movieId
    );

    setWatchlist(new Set(ids));
  })
  .catch((error) => {
    console.error("Error fetching watchlist:", error);
  });
}, []);

  // Add or remove movie from watchlist
  const toggleSave = async (id: number) => {
  try {
    if (watchlist.has(id)) {
      const response = await getWatchlist();

      const item = response.data.find(
        (item: { movieId: number }) => item.movieId === id
      );

      if (item) {
        await removeFromWatchlist(item.id);
      }

      setWatchlist((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    } else {
      await addToWatchlist(id);

      setWatchlist((prev) => {
        const next = new Set(prev);
        next.add(id);
        return next;
      });
    }
  } catch (error) {
    console.error("Error updating watchlist:", error);
  }
};
  // Change Featured movie when a card is clicked
  const selectMovie = (movie: Movie) => {
    setFeatured(movie);
  };

  // Create genre list from fetched movies
  const GENRES = useMemo(
    () => ["All", ...new Set(movies.map((movie) => movie.genre))],
    [movies]
  );

  // Trending = top 8 highest-rated movies
  const trending: Movie[] = useMemo(
    () =>
      [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8),
    [movies]
  );

  // Group movies by genre
  const rowsByGenre: Record<string, Movie[]> = useMemo(() => {
    const groups: Record<string, Movie[]> = {};

    GENRES.filter((genre) => genre !== "All").forEach((genre) => {
      groups[genre] = movies.filter(
        (movie) => movie.genre === genre
      );
    });

    return groups;
  }, [movies, GENRES]);

  // Filter movies by selected genre
  const filteredMovies = useMemo(() => {
    if (selectedGenre === "All") {
      return movies;
    }

    return movies.filter(
      (movie) => movie.genre === selectedGenre
    );
  }, [selectedGenre, movies]);

  // Search inside the selected genre
  const searchResults: Movie[] = useMemo(() => {
    const q = query.trim().toLowerCase();

    return filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(q)
    );
  }, [query, filteredMovies]);

  // Movies saved in watchlist
  const savedMovies: Movie[] = useMemo(
    () => movies.filter((movie) => watchlist.has(movie.id)),
    [movies, watchlist]
  );

  const isSearching = query.trim().length > 0;

  // Wait until movies are loaded
  if (!featured) {
    return <div className="loading">Loading movies...</div>;
  }

  return (
    <div className="app">
      <Navbar
        tab={tab}
        setTab={setTab}
        query={query}
        setQuery={setQuery}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={GENRES}
      />

      <main className="main">
        {tab === "home" && (
          <>
            {isSearching ? (
              searchResults.length > 0 ? (
                <div className="search-view">
                  <Row
                    title={`Results for "${query}"`}
                    movies={searchResults}
                    watchlist={watchlist}
                    onToggle={toggleSave}
                    onSelect={selectMovie}
                  />
                </div>
              ) : (
                <EmptyState
                  icon={<Search size={22} />}
                  title="No matches found"
                  body={`Nothing matches "${query}". Try a different title.`}
                  actionLabel="Clear search"
                  onAction={() => setQuery("")}
                />
              )
            ) : (
              <>
                <Hero
                  movie={featured}
                  saved={watchlist.has(featured.id)}
                  onToggle={toggleSave}
                />

                <div className="rows">
                  {selectedGenre === "All" ? (
                    <>
                      <Row
                        title="Trending Now"
                        movies={trending}
                        watchlist={watchlist}
                        onToggle={toggleSave}
                        onSelect={selectMovie}
                      />

                      {Object.entries(rowsByGenre).map(
                        ([genre, genreMovies]) => (
                          <Row
                            key={genre}
                            title={genre}
                            movies={genreMovies}
                            watchlist={watchlist}
                            onToggle={toggleSave}
                            onSelect={selectMovie}
                          />
                        )
                      )}
                    </>
                  ) : (
                    <Row
                      title={selectedGenre}
                      movies={filteredMovies}
                      watchlist={watchlist}
                      onToggle={toggleSave}
                      onSelect={selectMovie}
                    />
                  )}
                </div>
              </>
            )}
          </>
        )}

        {tab === "watchlist" && (
          <div className="rows watchlist-page">
            {savedMovies.length > 0 ? (
              <Row
                title="My List"
                movies={savedMovies}
                watchlist={watchlist}
                onToggle={toggleSave}
                onSelect={selectMovie}
              />
            ) : (
              <EmptyState
                icon={<Heart size={22} />}
                title="Your list is empty"
                body="Tap the heart on any title to add it here."
                actionLabel="Browse movies"
                onAction={() => setTab("home")}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}