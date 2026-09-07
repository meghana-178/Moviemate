import Card from "./Card";
import type { Movie } from "../data/movies";

interface RowProps {
  title: string;
  movies: Movie[];
  watchlist: Set<number>;
  onToggle: (id: number) => void;
  onSelect: (movie: Movie) => void;
}

export default function Row({ title, movies, watchlist, onToggle, onSelect }: RowProps) {
  if (movies.length === 0) return null;

  return (
    <section className="row-section">
      <h2 className="row-heading">{title}</h2>
      <div className="row-scroll">
        {movies.map((m) => (
          <Card key={m.id} 
          movie={m} 
          saved={watchlist.has(m.id)} 
          onToggle={onToggle}
          onSelect={onSelect} 
          />
        ))}
      </div>
    </section>
  );
}