import { useMemo, useState } from "react";
import { Search, Heart } from "lucide-react";
import { movies as MOVIES, GENRES, type Movie } from "./data/movies";
import Navbar, { type Tab } from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import EmptyState from "./components/EmptyState";

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [query, setQuery] = useState("");
  const [watchlist, setWatchlist] = useState<Set<number>>(() => new Set([1, 5, 12]));

  const toggleSave = (id: number) => {
    setWatchlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const featured: Movie = useMemo(
    () => MOVIES.reduce((best, m) => (m.rating > best.rating ? m : best), MOVIES[0]),
    [query,watchlist]
  );

  const trending: Movie[] = useMemo(
    () => [...MOVIES].sort((a, b) => b.rating - a.rating).slice(0, 8),
    []
  );

  const rowsByGenre: Record<string, Movie[]> = useMemo(() => {
    const groups: Record<string, Movie[]> = {};
    GENRES.filter((g) => g !== "All").forEach((g) => {
      groups[g] = MOVIES.filter((m) => m.genre === g);
    });
    return groups;
  }, []);

  const searchResults: Movie[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return MOVIES.filter((m) => m.title.toLowerCase().includes(q));
  }, [query]);

  const savedMovies: Movie[] = useMemo(
    () => MOVIES.filter((m) => watchlist.has(m.id)),
    [watchlist]
  );

  const isSearching = query.trim().length > 0;

  return (
    <div className="app">
      <Navbar tab={tab} setTab={setTab} query={query} setQuery={setQuery} />

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
                <Hero movie={featured} saved={watchlist.has(featured.id)} onToggle={toggleSave} />
                <div className="rows">
                  <Row title="Trending Now" movies={trending} watchlist={watchlist} onToggle={toggleSave} />
                  {Object.entries(rowsByGenre).map(([genre, movies]) => (
                    <Row key={genre} title={genre} movies={movies} watchlist={watchlist} onToggle={toggleSave} />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {tab === "watchlist" && (
          <div className="rows watchlist-page">
            {savedMovies.length > 0 ? (
              <Row title="My List" movies={savedMovies} watchlist={watchlist} onToggle={toggleSave} />
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