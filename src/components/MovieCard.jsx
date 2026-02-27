import { useDispatch } from "react-redux";
import { addToWatchlist } from "../features/movies/moviesSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450/111111/ffffff?text=No+Image";

  return (
    //group relative w-[200px] md:w-[230px]
    <div className="group relative w-[270px] rounded-2xl overflow-hidden bg-[#141414] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">

      {/* Poster */}
      <img
        src={poster}
        alt={movie.Title}
        className="w-full h-[300px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 p-4 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">

        <h3 className="text-white font-bold text-lg leading-tight">
          {movie.Title}
        </h3>

        <p className="text-gray-300 text-sm mb-3">
          {movie.Year}
        </p>

        <button
          onClick={() => dispatch(addToWatchlist(movie))}
          className="px-4 py-2 text-sm rounded-full font-semibold text-white bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
        >
          + Watchlist
        </button>

      </div>

    </div>
  );
};

export default MovieCard;