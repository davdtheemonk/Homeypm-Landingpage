import React from "react";
import { Link } from "react-router-dom";

export default function Stakeholdercard(props) {
  return (
    <div className="flex flex-col md:w-13 w-[95%] gap-2 bg-darkblue rounded-xl p-4">
      <img
        src={props.item.logo}
        alt="property-management"
        className="cursor-pointer w-[50px] h-[45px] "
      />
      <p className="font-[500] text-white text-2xl">{props.item.title}</p>
      <p className="text-grey  ">{props.item.description}</p>
      <Link to="/about" className="text-xl text-white font-[500]">
        Learn More
      </Link>
    </div>
  );
}
