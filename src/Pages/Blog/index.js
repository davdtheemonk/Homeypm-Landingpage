import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const init = async () => {
    await axios
      .get("https://probablyx.pythonanywhere.com/posts/")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    init();
  }, []);
  console.log(blogs);
  return (
    <div className="flex flex-col h-full md:min-h-screen w-full">
      <div className="flex flex-col justify-center gap-4 items-center mt-36 w-full h-40">
        <p className="font-bold text-xl">Latest Blogs</p>
        <Divider className="w-[60%]" />
      </div>
      {loading ? (
        <div className="flex w-full justify-center items-center   ">
          <img src="/loader.gif" width="200px" alt="loader" />
        </div>
      ) : (
        <div className="mx-auto md:grid grid-cols-4 gap-10   flex flex-col md:justify-start md:items-start justify-center items-center mt-5 mb-10 ">
          {blogs.map((blog) => (
            <BlogCard key={blog.pk} item={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
