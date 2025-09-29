import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";

const RightSidebar = ({ searchQuery, setSearchQuery }) => {
  const [trendingTopics, setTrendingTopics] = useState([]);

  useEffect(() => {
    setTrendingTopics([
      {
        id: 1,
        category: "Trending worldwide",
        title: "#BreakingNews",
        tweets: "125K Tweets",
      },
      {
        id: 2,
        category: "Space",
        title: "Lunar photography improves the discovery of the moon",
        tweets: "10,094 people are Tweeting about this",
        image: "https://storage.noirlab.edu/media/archives/images/screen/noao0107a.jpg",
      },
      {
        id: 3,
        category: "Trending worldwide",
        title: "#WorldNews",
        tweets: "125K Tweets",
        additional: "5,094 people are Tweeting about this",
      },
      {
        id: 4,
        category: "Animals",
        title: "These cats are ready for #InternationalCatDay",
        tweets: "2,757 people are Tweeting about this",
        image: "https://www.shutterstock.com/image-photo/cute-cat-tilting-head-baby-600nw-2492403467.jpg",
      },
      {
        id: 5,
        category: "Trending worldwide",
        title: "#GreatestOfAllTime",
        tweets: "100K Tweets",
        additional: "4,123 people are Tweeting about this",
      },
    ]);
  }, []);

  return (
    <div className="hidden xl:block w-[26rem] bg-white min-h-screen sticky top-16">
      <div className="p-4">
        <div className="space-y-6">
          <div className="sticky top-4 z-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Twitter"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 bg-gray-100 border-0 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">
                Trends for you
                <CiSettings className="ml-[10.5rem] text-2xl text-blue-500 inline"/>
              </h2>
            </div>
            <div className="space-y-0">
              {trendingTopics.map((trend) => (
                <div
                  key={trend.id}
                  className="p-4 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className={` ${trend.image && "border rounded-r-none rounded-xl p-2 mb-2"} `}>
                        <p className="text-sm text-gray-500">
                          {trend.category}
                        </p>
                        <p className="font-bold text-gray-900 text-lg">
                          {trend.title}
                        </p>
                      </div>

                      {trend.tweets && (
                        <p className="text-sm text-gray-500">{trend.tweets}</p>
                      )}
                      {trend.additional && (
                        <p className="text-sm text-gray-500">
                          {trend.additional}
                        </p>
                      )}
                    </div>
                    {trend.image && (
                      <div className="mt-0 w-[5rem] h-[5.85rem] border border-l-0 rounded-l-none rounded-xl">
                        <div className="h-full w-full bg-gray-300 flex overflow-hidden rounded-l-none rounded-xl items-center justify-center">
                          <img src={trend.image} className="h-full w-full object-cover object-center"/>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                Show more
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">
                Who to follow
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
