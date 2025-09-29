import TweetItem from "./TweetItem";
import { FaTwitter } from "react-icons/fa";

const TweetList = ({ tweets, onEditTweet, onDeleteTweet }) => {
  return (
    <div className="bg-white">
      {tweets.map((tweet) => (
        <TweetItem
          key={tweet.id}
          tweet={tweet}
          onEditTweet={onEditTweet}
          onDeleteTweet={onDeleteTweet}
        />
      ))}

      {tweets.length === 0 && (
        <div className="p-12 text-center text-gray-500">
          <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
            <FaTwitter className="h-12 w-12" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Welcome to Twitter!
          </h3>
          <p className="text-gray-500">
            This is the best place to see what's happening in your world. Find
            some people and topics to follow now.
          </p>
        </div>
      )}
    </div>
  );
};

export default TweetList;
