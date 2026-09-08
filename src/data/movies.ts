export interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster ?: string;
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
