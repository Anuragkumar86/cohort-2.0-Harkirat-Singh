// import React from "react";
import { BlogParams} from "../hooks";

const BlogDetail =  ({ blog }  : {blog: BlogParams}) => {

  const formattedDateTime = new Date(blog.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Ensures AM/PM format
});

  return (
    <div className="max-w-7xl mx-auto pl-30 p-6">
    
      {/* Blog Content */}
      <div className="flex flex-col md:flex-row md:space-x-20">
        {/* Left Side: Blog Details */}
        <div className="md:w-3/4">
          <h1 className="text-4xl font-bold text-gray-900">
            {blog.title}
          </h1>
          <p className="text-gray-500 mt-2">{formattedDateTime}</p>

          <p className="mt-6 text-gray-800 leading-relaxed">
            {blog.content}
          </p>
        </div>

        {/* Right Side: Author Info */}
        <div className="w-110 h-50 bg-slate-50 p-6 rounded-lg shadow-sxl mt-8">
          <h3 className="text-gray-700 font-medium pl-12">Author</h3>
          <div className="flex items-center space-x-3 mt-3 ">
            <div className="w-9 h-9 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div>
              <p className="text-gray-900 font-bold text-xl">{blog.author.name || "Anonymous"}</p>
              <p className="text-gray-500 text-sm">
                {blog.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
