import { useDispatch } from "react-redux";
import {
  removeFromWatchlist,
  toggleWatched,
} from "../features/movies/moviesSlice";

const WatchlistItem = ({ movie }) => {
  const dispatch = useDispatch();

  if (!movie) return null;

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450/111111/ffffff?text=No+Image";

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-[#141414] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">

      {/* Poster */}
      <img
        src={poster}
        alt={movie.Title}
        className="w-full h-[280px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-4 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">

       

        <p className="text-gray-300 text-sm mb-3">
          {movie.Year}
        </p>

        {/* Status Badge */}
        <span
          className={`inline-block px-3 py-1 text-xs rounded-full mb-3 font-semibold ${
            movie.watched
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
          }`}
        >
          {movie.watched ? "Watched ✓" : "Not Watched"}
        </span>

        <div className="flex gap-2">

          <button
            onClick={() => dispatch(toggleWatched(movie.imdbID))}
            className="px-4 py-2 text-xs rounded-full font-semibold text-white bg-gradient-to-r from-[#08d9d6] to-[#00b894] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            {movie.watched ? "Unmark" : "Mark Watched"}
          </button>

          <button
            onClick={() => dispatch(removeFromWatchlist(movie.imdbID))}
            className="px-4 py-2 text-xs rounded-full font-semibold text-white bg-gradient-to-r from-[#ff2e63] to-[#ff0844] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default WatchlistItem;