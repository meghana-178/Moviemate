import axios from "axios";

const MOVIE_URL = "http://localhost:3000/movies";
const WATCHLIST_URL = "http://localhost:3000/watchlist";

export const getMovies = () => {
  return axios.get(MOVIE_URL);
};

export const getWatchlist = () => {
  return axios.get(WATCHLIST_URL);
};

export const addToWatchlist = (movieId: number) => {
  return axios.post(WATCHLIST_URL, { movieId });
};

export const removeFromWatchlist = (watchlistId: string) => {
  return axios.delete(`${WATCHLIST_URL}/${watchlistId}`);
};