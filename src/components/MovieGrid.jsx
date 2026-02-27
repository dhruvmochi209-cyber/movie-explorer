import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const dispatch = useDispatch();
  const { movies, searchTerm, page, hasMore, error } =
    useSelector((state) => state.movies);

  const loadMore = () => {
    dispatch(fetchMovies({ searchTerm, page }));
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
       {movies.map((movie, index) => (
  <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
))}
      </InfiniteScroll>
    </div>
  );
};

export default MovieGrid;