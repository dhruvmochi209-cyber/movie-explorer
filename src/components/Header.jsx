import { Link, useLocation , useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap gap-4 justify-between items-center">

        {/* LEFT SIDE LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-wide"
        >
          <span className="text-3xl">🎬</span>
          <span className="bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] bg-clip-text text-transparent">
            Movie Explorer
          </span>
        </Link>

        {/* RIGHT SIDE NAV */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className={`relative px-4 py-2 text-sm font-medium transition ${
              isActive("/")
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Discover
            {isActive("/") && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] rounded-full"></span>
            )}
          </Link>

          <Link
            to="/watchlist"
            className={`relative px-4 py-2 text-sm font-medium transition ${
              isActive("/watchlist")
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Watchlist
            {isActive("/watchlist") && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] rounded-full"></span>
            )}
          </Link>
           <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Logout
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;