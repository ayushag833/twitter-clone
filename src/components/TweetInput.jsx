import { useState, useRef } from "react";
import {
  HiOutlinePhotograph,
  HiOutlineEmojiHappy,
  HiOutlineChartBar,
} from "react-icons/hi";

const TweetInput = ({ onAddTweet, profile }) => {
  const [tweetContent, setTweetContent] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetContent.trim() || imagePreview) {
      const newTweet = {
        id: Date.now(),
        content: tweetContent.trim() || "",
        author: profile ? profile.name : "Current User",
        username: profile ? profile.username : "@currentuser",
        createdAt: new Date().toISOString(),
        likes: 0,
        retweets: 0,
        replies: 0,
        image: imagePreview,
        avatar: profile ? profile.avatar : "https://i.pravatar.cc/150?img=3",
      };
      onAddTweet(newTweet);
      setTweetContent("");
      setImagePreview(null);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="border-b border-gray-200 p-4 bg-white">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full"
                src={profile ? profile.avatar : ""}
              />
            </div>
          </div>
          <div className="flex-1">
            <textarea
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
              placeholder="What's happening?"
              className="p-2 pl-3 w-full border-0 resize-none text-lg placeholder-gray-500 bg-transparent min-h-[60px] 
              focus:outline-none focus:ring-1 focus:ring-gray-400 rounded-md"
              rows={3}
            />

            {imagePreview && (
              <div className="mt-3 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-64 object-cover rounded-2xl"
                />
                <button
                  type="button"
                  onClick={() => setImagePreview(null)}
                  className="absolute w-[2rem] h-[2rem] cursor-pointer text-center top-2 right-2 bg-slate-900 bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                >
                  {" "}
                  X
                </button>
              </div>
            )}

            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors"
                >
                  <HiOutlinePhotograph className="h-5 w-5" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors"
                >
                  <HiOutlineEmojiHappy className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors"
                >
                  <HiOutlineChartBar className="h-5 w-5" />
                </button>
              </div>
              <button
                type="submit"
                disabled={!tweetContent.trim() && !imagePreview}
                className="bg-blue-500 cursor-pointer hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-full font-bold text-base transition-colors"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetInput;
