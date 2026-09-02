import { GENRE_THEME, type Movie } from "../data/movies";

function HeartIcon({ size = 14, filled = false }: { size?: number; filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4c1.74 0 3.41.81 4.5 2.09A6.09 6.09 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8.55 11.5L12 21.35Z"
        fill={filled ? "#e50914" : "none"}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.75 14.83 8.5l6.42.93-4.64 4.52 1.1 6.4L12 2.75 5.29 9.75 6.39 3.35 2.75 9.43l6.42-.93L12 2.75Z"
        fill="#e8a33d"
        stroke="#e8a33d"
        strokeWidth={0.5}
      />
    </svg>
  );
}

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
          <HeartIcon size={14} filled={saved} />
        </button>

        <div className="card-scrim">
          <p className="card-title">{movie.title}</p>
          <div className="card-meta">
            <StarIcon size={11} />
            <span>{movie.rating.toFixed(1)}</span>
            <span className="card-dot">•</span>
            <span>{movie.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}