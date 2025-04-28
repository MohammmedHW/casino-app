import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { createBlog } from "../api/blogs.js";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    content: "",
    publishDate: new Date().toLocaleDateString("en-CA"),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog(blog);
      navigate("/blogs-admin");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter blog title"
                value={blog.title}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold">Author</label>
              <input
                type="text"
                name="author"
                placeholder="Enter author name"
                value={blog.author}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold">Content</label>
              <textarea
                name="content"
                placeholder="Enter blog content"
                value={blog.content}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1 h-32"
                required
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold">Publish Date</label>
              <input
                type="date"
                name="publishDate"
                value={blog.publishDate}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>

            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Blog
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => navigate("/blogs-admin")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
