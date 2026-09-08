import { Search, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

export type Tab = "home" | "watchlist";

interface NavbarProps {
  tab: Tab;
  setTab: Dispatch<SetStateAction<Tab>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  selectedGenre: string;
  setSelectedGenre: Dispatch<SetStateAction<string>>;
  genres: string[];
}

 export default function Navbar({
  tab,
  setTab,
  query,
  setQuery,
  selectedGenre,
  setSelectedGenre,
  genres
}: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo">MOVIEMATE</span>
        <nav className="nav-links">
          <button
            className={"nav-link" + (tab === "home" ? " active" : "")}
            onClick={() => setTab("home")}
          >
            Home
          </button>
          <button
            className={"nav-link" + (tab === "watchlist" ? " active" : "")}
            onClick={() => setTab("watchlist")}
          >
            My List
          </button>
        </nav>
      </div>

      <div className="navbar-search">
        <Search size={15} />
        <input
          type="text"
          placeholder="Search titles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="navbar-search-clear" onClick={() => setQuery("")}>
            <X size={14} />
          </button>
        )}
      </div>
      <select
  value={selectedGenre}
  onChange={(e) => setSelectedGenre(e.target.value)}
  className="genre-select"
>
  {genres.map((genre) => (
    <option key={genre} value={genre}>
      {genre}
    </option>
  ))}
</select>
    </header>
  );
}