import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineBookmark,
  HiOutlineClipboardList,
  HiOutlineUser,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
// import { FaTwitter } from "react-icons/fa";

const LeftSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="hidden lg:block w-64 bg-white min-h-screen sticky top-16">
      <div className="p-4">
        <div className="space-y-1">
          {/* <div className="flex items-center ml-4">
            <FaTwitter className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
          </div> */}
          <button
            onClick={() => setActiveTab("home")}
            className={`w-full flex items-center cursor-pointer px-4 py-3 text-xl font-normal rounded-full transition-colors ${
              activeTab === "home"
                ? "text-blue-500 font-bold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <HiOutlineHome
              className={`mr-4 h-7 w-7 ${
                activeTab === "home" ? "fill-current" : ""
              }`}
            />
            Home
          </button>

          <button className="w-full flex cursor-pointer items-center px-4 py-3 text-xl font-normal text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <HiOutlineSearch className="mr-4 h-7 w-7" />
            Explore
          </button>

          <button className="w-full flex cursor-pointer items-center px-4 py-3 text-xl font-normal text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <HiOutlineBell className="mr-4 h-7 w-7" />
            Notifications
          </button>

          <button className="w-full flex cursor-pointer items-center px-4 py-3 text-xl font-normal text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <HiOutlineMail className="mr-4 h-7 w-7" />
            Messages
          </button>

          <button className="w-full flex cursor-pointer items-center px-4 py-3 text-xl font-normal text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <HiOutlineBookmark className="mr-4 h-7 w-7" />
            Bookmarks
          </button>

          <button className="w-full flex cursor-pointer items-center px-4 py-3 text-xl font-normal text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <HiOutlineClipboardList className="mr-4 h-7 w-7" />
            Lists
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center cursor-pointer px-4 py-3 text-xl font-normal rounded-full transition-colors ${
              activeTab === "profile"
                ? "text-blue-500 font-bold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <HiOutlineUser
              className={`mr-4 h-7 w-7 ${
                activeTab === "profile" ? "fill-current" : ""
              }`}
            />
            Profile
          </button>

          <button className="w-full flex cursor-pointer items-center px-4 py-3 text-xl font-normal text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <HiOutlineDotsHorizontal className="mr-4 h-7 w-7" />
            More
          </button>
        </div>

        <div className="mt-6">
          <button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full transition-colors text-lg">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
