import React from "react";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  console.log(news);
  return (
    <div>
      <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Thumbnail */}
        <img
          className="w-full h-48 object-cover"
          src={news.thumbnail_url}
          alt="News thumbnail"
        />

        <div className="p-4">
          {/* Author Info */}
          <div className="flex items-center mb-4">
            <img
              src={news.author.img}
              alt={news.author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-semibold">{news.author.name}</p>
              <p className="text-xs text-gray-500">
                {new Date(news.author.published_date).toDateString()}
              </p>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold mb-2">{news.title}</h2>

          {/* Details */}
          <p className="text-sm text-gray-600 mb-4">
            {news.details.slice(0, 150)}...
            <span className="text-blue-500">Read More</span>
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {Array.from(
                  { length: Math.floor(news.rating.number) },
                  (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.366 2.447a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.538 1.118l-3.366-2.447a1 1 0 00-1.175 0l-3.366 2.447c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.05 9.377c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.95z" />
                    </svg>
                  )
                )}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                {news.rating.number}
              </span>
            </div>
            <span className="text-sm text-gray-600">
              {news.total_view} views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
