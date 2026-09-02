import { Search, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

export type Tab = "home" | "watchlist";

interface NavbarProps {
  tab: Tab;
  setTab: Dispatch<SetStateAction<Tab>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ tab, setTab, query, setQuery }: NavbarProps) {
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
    </header>
  );
}