import { Heart, Star } from "lucide-react";
import { GENRE_THEME, type Movie } from "../data/movies";

interface CardProps {
  movie: Movie;
  saved: boolean;
  onToggle: (id: number) => void;
}

export default function Card({ movie, saved, onToggle }: CardProps) {
  const theme = GENRE_THEME[movie.genre] || GENRE_THEME["Drama"];

  return (
    <div className="card">
      <div
        className="card-poster"
        style={{ background: `linear-gradient(165deg, ${theme.from}, ${theme.to})` }}
      >
        <span className="card-letter">{movie.title.charAt(0)}</span>

        <button
          className={"card-heart" + (saved ? " is-saved" : "")}
          onClick={() => onToggle(movie.id)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${movie.title} from My List` : `Add ${movie.title} to My List`}
        >
          <Heart size={14} strokeWidth={2} fill={saved ? "#e50914" : "none"} />
        </button>

        <div className="card-scrim">
          <p className="card-title">{movie.title}</p>
          <div className="card-meta">
            <Star size={11} strokeWidth={0} fill="#e8a33d" />
            <span>{movie.rating.toFixed(1)}</span>
            <span className="card-dot">•</span>
            <span>{movie.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}