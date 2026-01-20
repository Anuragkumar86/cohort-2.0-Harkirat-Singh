import axios from "axios";
import React, {useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const BlogEditor: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const navigate = useNavigate();
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };



  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Create a Blog</h1>

      {/* Title Input */}
      <input
        type="text"
        className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400  hover:border-red-500"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Author Input */}
      <input
        type="text"
        className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-red-500"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      {/* Stylish Image Upload Section */}
      <label className="w-full cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 hover:border-blue-500 mb-4">
        <input type="file" className="hidden" onChange={handleImageUpload} />
        {preview ? (
          <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded-lg" />
        ) : (
          <div className="text-center">
            <span className="text-gray-500">Click to Upload Image</span>
          </div>
        )}
      </label>

      {/* Blog Content */}
      <textarea
        className="w-full p-3 border rounded-lg mb-4 h-40 focus:outline-none focus:ring-2 focus:ring-blue-400  hover:border-red-500"
        placeholder="Start writing your blog..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Show Preview
        </button>
        <button onClick={async()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content,
                author:{
                  name: true,
                }
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`)
        }} className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
          Publish Blog
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;
