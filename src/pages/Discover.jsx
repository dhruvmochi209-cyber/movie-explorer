import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMovies } from "../features/movies/moviesSlice";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Discover = () => {
  const dispatch = useDispatch();
  const { movies, searchTerm, page, hasMore, loading, error } =
    useSelector((state) => state.movies);

  const loadMore = () => {
    if (searchTerm) {
      dispatch(fetchMovies({ searchTerm, page }));
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* ✅ SEARCH BAR */}
      <SearchBar />

      {error && (
        <p className="text-center text-red-400">{error}</p>
      )}

      <InfiniteScroll
        dataLength={movies.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p className="text-center text-gray-400">
            No more movies
          </p>
        }
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <MovieCard
              key={`${movie.imdbID}-${index}`}
              movie={movie}
            />
          ))}
        </div>
      </InfiniteScroll>

      {!loading && movies.length === 0 && searchTerm && (
        <p className="text-center mt-6 text-gray-400">
          No results found
        </p>
      )}
    </div>
  );
};

export default Discover;