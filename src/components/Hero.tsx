import { Play, Info, Heart } from "lucide-react";
import { GENRE_THEME, type Movie } from "../data/movies";

interface HeroProps {
  movie: Movie;
  saved: boolean;
  onToggle: (id: number) => void;
}

export default function Hero({ movie, saved, onToggle }: HeroProps) {
  const theme = GENRE_THEME[movie.genre] || GENRE_THEME["Drama"];

  return (
    <div
      className="hero"
      style={{ background: `linear-gradient(120deg, ${theme.from}, #0a0a0a 75%)` }}
    >
      <div className="hero-fade" />
      <div className="hero-content">
        <span className="hero-tag">Featured</span>
        <h1 className="hero-title">{movie.title}</h1>
        <div className="hero-meta">
          <span className="hero-star">★</span>
          <span>{movie.rating.toFixed(1)} rating</span>
          <span className="dot">•</span>
          <span>{movie.genre}</span>
          <span className="dot">•</span>
          <span>{movie.year}</span>
        </div>

        <div className="hero-actions">
          <button className="hero-btn primary">
            <Play size={16} fill="#111" /> Play
          </button>
          <button className="hero-btn secondary" onClick={() => onToggle(movie.id)}>
            <Heart size={16} fill={saved ? "#e50914" : "none"} />
            {saved ? "In My List" : "My List"}
          </button>
          <button className="hero-btn secondary">
            <Info size={16} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
}