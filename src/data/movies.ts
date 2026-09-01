export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  poster: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://via.placeholder.com/200x280?text=Inception",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    poster: "https://via.placeholder.com/200x280?text=Dark+Knight",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    poster: "https://via.placeholder.com/200x280?text=Interstellar",
  },
  {
    id: 4,
    title: "Spirited Away",
    genre: "Animation",
    rating: 8.6,
    poster: "https://via.placeholder.com/200x280?text=Spirited+Away",
  },
  {
    id: 5,
    title: "Avengers Endgame",
    genre: "Action",
    rating: 8.4,
    poster: "https://via.placeholder.com/200x280?text=Avengers",
  },
  {
    id: 6,
    title: "Your Name",
    genre: "Animation",
    rating: 8.5,
    poster: "https://via.placeholder.com/200x280?text=Your+Name",
  },
];