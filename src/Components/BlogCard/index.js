import dayjs from "dayjs";
import "dayjs/locale/en";
import React, { useState } from "react";
import { api } from "../../unsplash";
export default function BlogCard(props) {
  const [img, setPhotosResponse] = useState(null);
  api.photos
    .get({ photoId: `${props.item.image.replaceAll('"', "")}` })
    .then((result) => {
      setPhotosResponse(result.response.urls.raw);
    })
    .catch((err) => {
      console.log("something went wrong!");
    });

  return (
    <div
      onClick={() => {
        const url = `/blog/${props.item.title
          .replace(/"/g, "")
          .replace(/\s+/g, "-")}`;
        window.location = url;
      }}
      className="w-[300px] flex flex-col justify-start items-start cursor-pointer "
    >
      <img
        src={img}
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
              : props.item.writer === "James Thaura"
              ? "/jmweni.jpeg"
              : props.item.writer === "Maxwell Gad"
              ? "/max.jpeg"
              : ""
          }
          alt="avatar"
          className="w-10 h-10 rounded-full "
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <p className="font-bold">{props.item.title}</p>
          <p className="text-sm">
            {dayjs(props.item.date).format("ddd MMM DD, YYYY")}
          </p>
          <p className="text-sm text-grey">
            {props.item.post
              .replaceAll('"', "")
              .replace(/<\/?[^>]+(>|$)/g, "")
              .slice(0, 100)}
            ...
          </p>
        </div>
      </div>
    </div>
  );
}
