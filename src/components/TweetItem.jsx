import { useState } from "react";
import {
  HiOutlineChatAlt2,
  HiOutlineRefresh,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlinePencil,
  HiOutlineTrash
} from "react-icons/hi";

const TweetItem = ({ tweet, onEditTweet, onDeleteTweet }) => {
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");

  const handleEdit = (tweet) => {
    setEditingId(tweet.id);
    setEditContent(tweet.content);
  };

  const handleSaveEdit = (id) => {
    if (editContent.trim()) {
      onEditTweet(id, editContent.trim());
      setEditingId(null);
      setEditContent("");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditContent("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tweet?")) {
      onDeleteTweet(id);
    }
  };

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 1) return "now";
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d`;
  };

  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
            <img className="rounded-full" src={tweet.avatar} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1">
            <p className="text-base font-bold text-gray-900 truncate">
              {tweet.author || "Unknown User"}
            </p>
            <p className="text-base text-gray-500 truncate">
              {tweet.username || "@unknown"}
            </p>
            <p className="text-base text-gray-500">·</p>
            <p className="text-base text-gray-500">
              {formatDate(tweet.createdAt || "")}
            </p>
          </div>

          {editingId === tweet.id ? (
            <div className="mt-2">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                rows={3}
              />
              <div className="flex space-x-2 mt-3">
                <button
                  onClick={() => handleSaveEdit(tweet.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-lg text-gray-900 mt-1 leading-relaxed">
                {tweet.content}
              </p>

              {tweet.image && (
                <div className="mt-3 rounded-2xl overflow-hidden border border-gray-200">
                  <div className="flex items-center justify-center">
                    <div className="h-full w-full text-white text-center">
                      <img className="object-cover h-full w-full" src={tweet.image}/>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-8">
                  <button className="text-gray-500 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-full transition-colors flex items-center space-x-1">
                    <HiOutlineChatAlt2 className="h-5 w-5" />
                    {tweet.replies > 0 && (
                      <span className="text-sm text-gray-500">
                        {tweet.replies}
                      </span>
                    )}
                  </button>

                  <button
                    className={`p-2 rounded-full hover:text-green-500 hover:bg-green-50 transition-colors flex items-center space-x-1`}
                  >
                    <HiOutlineRefresh className="h-5 w-5" />
                    {tweet.retweets > 0 && (
                      <span className="text-sm text-gray-500">
                        {tweet.retweets}
                      </span>
                    )}
                  </button>

                  <button
                    className={`p-2 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors flex items-center space-x-1 `}
                  >
                    <HiOutlineHeart
                      className={`h-5 w-5`}
                    />
                    {tweet.likes > 0 && (
                      <span className="text-sm text-gray-500">
                        {tweet.likes}
                      </span>
                    )}
                  </button>

                  <button className="text-gray-500 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-full transition-colors">
                    <HiOutlineShare className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(tweet)}
                    className="text-gray-500 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-full transition-colors"
                  >
                    <HiOutlinePencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(tweet.id)}
                    className="text-gray-500 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                  >
                    <HiOutlineTrash className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TweetItem;
