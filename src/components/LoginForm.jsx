import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;

    dispatch(login(username));
    setUsername("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] via-[#111827] to-[#1f2937] relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-[#ff2e63] rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-[#08d9d6] rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      {/* Glass Card */}
      <div className="relative z-10 w-[380px] p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] bg-clip-text text-transparent">
          Welcome Back 🎬
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e63] transition"
          />

          <button
            type="submit"
            className="py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Log In
          </button>

        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Explore unlimited movies 🍿
        </p>
      </div>
    </div>
  );
};

export default LoginForm;