import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_MOVIE_EXPLORER;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMoviesApi = async (searchTerm, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: searchTerm,
      page: page,
    },
  });

  return response.data;
};