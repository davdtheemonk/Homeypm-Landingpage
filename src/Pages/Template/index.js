import {
  Facebook,
  Flag,
  LinkedIn,
  LockClock,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

export default function Template(props) {
  const blog = {
    id: 0,
    title:
      "How to start a rental property business and develop a continous stream of income",
    image: "/play.jpg",
    description:
      "The best way to start a rental property job is to create a new property in the database and use that property to create a new property in the database and use that property to create a new property in the database",
    date: "13-04-2024",
    writer: "David Mugalla",
    link: "How-to-start-a-rental-property-job",
  };
  return (
    <div className="flex md:flex-row flex-col items-start justify-start md:h-screen h-full md:px-10  mt-32 p-5">
      <div>
        <p className="mt-4 font-bold text-xl">{blog.title}</p>

        <div className="flex justify-start items-center align-center gap-2 flex-row mt-4">
          <img
            src={
              blog.writer === "David Mugalla"
                ? "/david.jpeg"
                : blog.writer === "Daniel Kalutu"
                ? "/kalutu.jpg"
                : blog.writer === "James Mweni"
                ? "/jmweni.jpg"
                : blog.writer === "Maxwell Gad"
                ? "max.jpeg"
                : ""
            }
            alt="avatar"
            className="w-10 h-10 rounded-full "
          />
          <div className="flex flex-col">
            <p className="text-grey text-sm">
              Posted by <u>{blog.writer}</u> on 13-04-2024
            </p>
            <div className="flex justify-start items-center align-center gap-2 flex-row">
              <LockClock />
              <p className="text-grey text-sm">3 min read</p>
            </div>
          </div>
        </div>
        <img
          className="md:w-[60%] w-[100%] shadow-md md:mx-0 mx-auto flex mt-4 "
          src={blog.image}
        />
        <div className="md:w-[60%] w-[100%]  md:mx-0 mx-auto flex  mb-20 ">
          <p className="mt-10">{blog.description}</p>
        </div>
      </div>
      <div className="md:w-[400px] bg-darkblue card p-8 min-h-[60%] md:fixed right-40 flex  flex-col mt-10 md:mt-0 text-white">
        <p className="text-center mb-4 font-bold">About author</p>
        <img
          src={
            blog.writer === "David Mugalla"
              ? "/david.jpeg"
              : blog.writer === "Daniel Kalutu"
              ? "/kalutu.jpg"
              : blog.writer === "James Mweni"
              ? "/jmweni.jpg"
              : blog.writer === "Maxwell Gad"
              ? "max.jpeg"
              : ""
          }
          alt="avatar"
          className="w-32  rounded-full mx-auto "
        />
        <p className="mt-4 text-center text-sm ">
          <b>{blog.writer}</b> is a passionate software engineer heading growth
          and development at Homey. He has a well of 15 years of experience in
          software design and architecture. Connect with him below.
        </p>
        <div className="flex flex-row justify-center items-center  mt-14">
          <Facebook></Facebook>
          <Twitter />
          <LinkedIn />
        </div>

        <div className=" mt-14 ">
          <p className="text-sm font-bold">Other blogs by {blog.writer}</p>
          <li>
            <ul className="text-sm text-[#2481fc] mt-2">
              <Link>How to get started with Tenant screening</Link>
            </ul>
          </li>
          <li>
            <ul className="text-sm text-[#2481fc] mt-2">
              <Link>How to get started with Tenant screening</Link>
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}
