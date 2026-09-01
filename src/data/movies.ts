export interface Movie {
  poster: string | undefined;
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
}

interface GenreTheme {
  from: string; 
  to: string;   
  tag: string;  
}


export const GENRE_THEME: Record<string, GenreTheme> = {
  "Sci-Fi":     { from: "#12335c", to: "#060f1f", tag: "#5b9bd9" },
  "Action":     { from: "#5c1414", to: "#1a0505", tag: "#e0616a" },
  "Animation":  { from: "#5c4a12", to: "#1f1806", tag: "#e0b84f" },
  "Drama":      { from: "#331258", to: "#0f051d", tag: "#b083e0" },
  "Comedy":     { from: "#0f5c46", to: "#04201a", tag: "#5fd9ae" },
  "Thriller":   { from: "#242424", to: "#080808", tag: "#c9c9c9" },
  "Biography":  { from: "#5c3a12", to: "#1f1305", tag: "#e0a05f" },
  "Horror":     { from: "#3a0808", to: "#120202", tag: "#e05f5f" },
  "Romance":    { from: "#5c1238", to: "#1f0513", tag: "#e05f97" },
};


export const movies: Movie[] = [
  {
      id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8,
      poster: undefined
  },
  {
      id: 2, title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6,
      poster: undefined
  },
  {
      id: 3, title: "Arrival", genre: "Sci-Fi", year: 2016, rating: 7.9,
      poster: undefined
  },
  {
      id: 4, title: "Blade Runner 2049", genre: "Sci-Fi", year: 2017, rating: 8.0,
      poster: undefined
  },
  {
      id: 5, title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0,
      poster: undefined
  },
  {
      id: 6, title: "Mad Max: Fury Road", genre: "Action", year: 2015, rating: 8.1,
      poster: undefined
  },
  {
      id: 7, title: "John Wick", genre: "Action", year: 2014, rating: 7.4,
      poster: undefined
  },
  {
      id: 8, title: "Spirited Away", genre: "Animation", year: 2001, rating: 8.6,
      poster: undefined
  },
  {
      id: 9, title: "Into the Spider-Verse", genre: "Animation", year: 2018, rating: 8.4,
      poster: undefined
  },
  {
      id: 10, title: "Grave of the Fireflies", genre: "Animation", year: 1988, rating: 8.5,
      poster: undefined
  },
  {
      id: 11, title: "Parasite", genre: "Drama", year: 2019, rating: 8.5,
      poster: undefined
  },
  {
      id: 12, title: "The Shawshank Redemption", genre: "Drama", year: 1994, rating: 9.3,
      poster: undefined
  },
  {
      id: 13, title: "Forrest Gump", genre: "Drama", year: 1994, rating: 8.8,
      poster: undefined
  },
  {
      id: 14, title: "The Grand Budapest Hotel", genre: "Comedy", year: 2014, rating: 8.1,
      poster: undefined
  },
  {
      id: 15, title: "Superbad", genre: "Comedy", year: 2007, rating: 7.6,
      poster: undefined
  },
  {
      id: 16, title: "Knives Out", genre: "Comedy", year: 2019, rating: 7.9,
      poster: undefined
  },
  {
      id: 17, title: "Darkest Hour", genre: "Biography", year: 2017, rating: 7.4,
      poster: undefined
  },
  {
      id: 18, title: "The Social Network", genre: "Biography", year: 2010, rating: 7.7,
      poster: undefined
  },
  {
      id: 19, title: "Se7en", genre: "Thriller", year: 1995, rating: 8.6,
      poster: undefined
  },
  {
      id: 20, title: "Gone Girl", genre: "Thriller", year: 2014, rating: 8.1,
      poster: undefined
  },
  {
      id: 21, title: "Prisoners", genre: "Thriller", year: 2013, rating: 8.1,
      poster: undefined
  },
  {
      id: 22, title: "Hereditary", genre: "Horror", year: 2018, rating: 7.3,
      poster: undefined
  },
  {
      id: 23, title: "The Shining", genre: "Horror", year: 1980, rating: 8.4,
      poster: undefined
  },
  {
      id: 24, title: "La La Land", genre: "Romance", year: 2016, rating: 8.0,
      poster: undefined
  },
  {
      id: 25, title: "Pride & Prejudice", genre: "Romance", year: 2005, rating: 7.8,
      poster: undefined
  },
];


export const GENRES = ["All", ...new Set(movies.map((m) => m.genre))];