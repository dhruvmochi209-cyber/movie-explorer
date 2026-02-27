import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_MOVIE_EXPLORER;

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ searchTerm, page }) => {
    const response = await axios.get(
      "https://www.omdbapi.com/",
      {
        params: {
          apikey: API_KEY,
          s: searchTerm,
          page: page,
        },
      }
    );

    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    watchlist: [],
    searchTerm: "",
    page: 1,
    hasMore: true,
    loading: false,
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.page = 1;
      state.movies = [];
      state.hasMore = true;
      state.error = null;
    },

    addToWatchlist: (state, action) => {
      const exists = state.watchlist.find(
        (m) => m.imdbID === action.payload.imdbID
      );
      if (!exists) {
        state.watchlist.push({ ...action.payload, watched: false });
      }
    },

    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (m) => m.imdbID !== action.payload
      );
    },

    toggleWatched: (state, action) => {
      const movie = state.watchlist.find(
        (m) => m.imdbID === action.payload
      );
      if (movie) {
        movie.watched = !movie.watched;
      }
    },

    logoutReset: (state) => {
      state.movies = [];
      state.watchlist = [];
      state.searchTerm = "";
      state.page = 1;
      state.hasMore = true;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;

        state.movies = [...state.movies, ...action.payload.Search];

        const totalResults = Number(action.payload.totalResults);
        state.hasMore = state.movies.length < totalResults;
        state.page += 1;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.hasMore = false;
      });
  },
});

export const {
  setSearchTerm,
  addToWatchlist,
  removeFromWatchlist,
  toggleWatched,
  logoutReset,
} = moviesSlice.actions;

export default moviesSlice.reducer;