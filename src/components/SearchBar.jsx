import { useDispatch } from "react-redux";
import { setSearchTerm, fetchMovies } from "../features/movies/moviesSlice";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!input.trim()) return;

    dispatch(setSearchTerm(input));
    dispatch(fetchMovies({ searchTerm: input, page: 1 }));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 mb-10 px-4">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] bg-clip-text text-transparent">
        Discover Movies 🎬
      </h1>

      {/* Search Container */}
      <div className="w-full max-w-2xl flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-4 py-3 shadow-xl">

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for movies..."
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-3 min-w-0"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button
          onClick={handleSearch}
          className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] hover:opacity-90 transition-all duration-300 shadow-lg"
        >
          Search
        </button>

      </div>

    </div>
  );
};

export default SearchBar;