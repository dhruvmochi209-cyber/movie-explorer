import { useSelector } from "react-redux";
import WatchlistItem from "./WatchlistItem";

const Watchlist = () => {
  const { watchlist } = useSelector((state) => state.movies);

  if (watchlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-24 text-center px-4">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] bg-clip-text text-transparent">
          Your Watchlist is Empty 🎬
        </h2>
        <p className="text-gray-400 max-w-md">
          Start exploring movies and add your favorites to build your personal watch collection.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 md:px-12 py-12">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-[#ff2e63] via-[#ff8c42] to-[#08d9d6] bg-clip-text text-transparent">
        My Watchlist
      </h1>

      {/* Movies Grid */}
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {watchlist.map((movie) => (
          <WatchlistItem key={movie.imdbID} movie={movie} />
        ))}
      </div>

    </section>
  );
};

export default Watchlist;