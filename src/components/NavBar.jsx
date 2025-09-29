import { useNavigate } from "react-router-dom";
import { HiOutlineHome, HiOutlineUser, HiOutlineLogout } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";

const NavBar = ({ onLogout, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[85rem] ml-[4.5rem]">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center">
              <FaTwitter className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 hidden sm:block">
              Twitter
            </h1>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-3">
            <button
              onClick={() => setActiveTab("home")}
              className={`cursor-pointer hover:text-blue-600 hover:bg-blue-50 px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors 
              ${
                activeTab === "home"
                  ? "text-blue-500 font-bold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="sm:inline">
                <HiOutlineHome className={`h-5 w-5 mr-1 inline mb-1 ${
                  activeTab === "home" ? "fill-current" : ""
                }`} /> 
                Home
              </span>
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`cursor-pointer hover:text-blue-600 hover:bg-blue-50 px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors 
              ${
                activeTab === "profile"
                  ? "text-blue-500 font-bold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="sm:inline">
                <HiOutlineUser className={`h-5 w-5 mr-1 inline mb-1 ${
                  activeTab === "profile" ? "fill-current" : ""
                }`} /> 
                Profile
              </span>
            </button>
            <div className="h-4 sm:h-6 w-px bg-gray-300 mx-1 sm:mx-2"></div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors"
            >
              <span className="sm:inline">
                <HiOutlineLogout className="h-5 w-5 inline" /> Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
