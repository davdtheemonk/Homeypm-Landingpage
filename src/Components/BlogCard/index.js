import React from "react";

export default function BlogCard(props) {
  return (
    <div
      onClick={() => {
        window.open("blog/" + props.item.link, "_self");
      }}
      className="w-[300px] flex flex-col justify-start items-start cursor-pointer "
    >
      <img
        src={props.item.image}
        className="w-full h-[200px] hover:shadow-xl"
        alt="blog-cover"
      />
      <div className="flex flex-row items-start justify-center mt-4 gap-2">
        <img
          src={
            props.item.writer === "David Mugalla"
              ? "/david.jpeg"
              : props.item.writer === "Daniel Kalutu"
              ? "/kalutu.jpg"
              : props.item.writer === "James Mweni"
              ? "/jmweni.jpg"
              : props.item.writer === "Maxwell Gad"
              ? "max.jpeg"
              : ""
          }
          alt="avatar"
          className="w-10 h-10 rounded-full "
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <p className="font-bold">{props.item.title}</p>
          <p className="text-sm">13-05-2024</p>
          <p className="text-sm text-grey">
            {props.item.description.slice(0, 100)}...
          </p>
        </div>
      </div>
    </div>
  );
}
