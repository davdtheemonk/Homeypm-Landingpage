import { Divider } from "@mui/material";
import React from "react";
import BlogCard from "../../Components/BlogCard";

export default function Blog() {
  const blogs = [
    {
      id: 0,
      title:
        "How to start a rental property job and get your first client and eat your first property property ",
      image: "/play.jpg",
      description:
        "The best way to start a rental property job is to create a new property in the database and use that property to create a new property in the database and use that property to create a new property in the database",
      date: "13-04-2024",
      writer: "David Mugalla",
      link: "How-to-start-a-rental-property-job",
    },
    {
      id: 1,
      title: "How to start a rental property job",
      image: "/play.jpg",
      description:
        "The best way to start a rental property job is to create a new property in the database and use that property to create a new property in the database and use that property to create a new property in the database",
      date: "13-04-2024",
      writer: "David Mugalla",
      link: "How-to-start-a-rental-property-job",
    },
    {
      id: 2,
      title: "How to start a rental property job",
      image: "/play.jpg",
      description:
        "The best way to start a rental property job is to create a new property in the database and use that property to create a new property in the database and use that property to create a new property in the database",
      date: "13-04-2024",
      writer: "Daniel Kalutu",
      link: "How-to-start-a-rental-property-job",
    },
    {
      id: 3,
      title: "How to start a rental property job",
      image: "/play.jpg",
      description:
        "The best way to start a rental property job is to create a new property in the database and use that property to create a new property in the database and use that property to create a new property in the database",
      date: "13-04-2024",
      writer: "Maxwell Gad",
      link: "How-to-start-a-rental-property-job",
    },
  ];
  return (
    <div className="flex flex-col h-full md:h-screen w-full">
      <div className="flex flex-col justify-center gap-4 items-center mt-36 w-full h-40">
        <p className="font-bold text-xl">Latest Blogs</p>
        <Divider className="w-[60%]" />
      </div>
      <div className="mx-auto md:grid grid-cols-4 gap-10   flex flex-col md:justify-start md:items-start justify-center items-center mt-5 mb-10 ">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} item={blog} />
        ))}
      </div>
    </div>
  );
}
