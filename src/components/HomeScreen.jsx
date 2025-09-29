import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import TweetInput from "./TweetInput";
import TweetList from "./TweetList";
import ProfileSection from "./ProfileSection";

const HomeScreen = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [tweets, setTweets] = useState([]);
  const [profile, setProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch(
          "https://mock-api.net/api/mock-twitter/tweets"
        );
        const data = await response.json();
        setTweets(data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "https://mock-api.net/api/mock-twitter/profile"
        );
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchTweets();
    fetchProfile();
  }, []);

  const handleAddTweet = (newTweet) => {
    setTweets((prev) => [newTweet, ...prev]);
  };

  const handleEditTweet = (id, newContent) => {
    setTweets((prev) =>
      prev.map((tweet) =>
        tweet.id === id ? { ...tweet, content: newContent } : tweet
      )
    );
  };

  const handleDeleteTweet = (id) => {
    setTweets((prev) => prev.filter((tweet) => tweet.id !== id));
  };

  const filteredTweets = tweets.filter((tweet) =>
    tweet.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <NavBar
        onLogout={onLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="flex max-w-[90rem] mx-auto">
        <LeftSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 max-w-4xl w-full border-x border-gray-200">
          <div className="bg-white min-h-screen">
            {activeTab === "home" ? (
              <div>
                <div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200 z-10">
                  <div className="px-4 py-3">
                    <h1 className="text-xl font-bold text-gray-900">Home</h1>
                  </div>
                </div>
                <TweetInput onAddTweet={handleAddTweet} profile={profile} />
                <TweetList
                  tweets={filteredTweets}
                  onEditTweet={handleEditTweet}
                  onDeleteTweet={handleDeleteTweet}
                />
              </div>
            ) : (
              <ProfileSection profile={profile} />
            )}
          </div>
        </div>
        <RightSidebar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
