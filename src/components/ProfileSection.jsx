import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";

const ProfileSection = ({ profile }) => {
  if (!profile) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-2 text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="h-48 bg-blue-500 relative">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-end space-x-4">
            <div className="h-24 w-24 rounded-full bg-white border-white flex items-center justify-center">
                <img className="rounded-full" src={profile.avatar}/>
            </div>
            <div className="flex-1 mb-5">
              <h1 className="text-2xl font-bold text-white">
                {profile.name || "Unknown User"}
              </h1>
              <p className="text-white/80">{profile.username || "@unknown"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mt-4">
          <p className="text-gray-900 text-lg">
            {profile.bio || ""}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-gray-500 text-sm">
            <span className="mr-3"> <CiLocationOn className="inline mb-0.5"/> {profile.location || ""}</span> 
            <span> <FaRegCalendarAlt className="inline mb-0.5"/> Joined {profile.joined || ""}</span> 
          </p>
        </div>

        <div className="mt-6 flex space-x-8">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-gray-900">
              {profile.following || 0}
            </div>
            <div className="text-gray-600">Following</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-gray-900">
              {profile.followers || 0}
            </div>
            <div className="text-gray-600">Followers</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-gray-900">
              {profile.tweets || 0}
            </div>
            <div className="text-gray-600">Tweets</div>
          </div>
        </div>

        <div className="mt-8 border-b border-gray-200"></div>
      </div>
    </div>
  );
};

export default ProfileSection;
