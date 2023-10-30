import { ArrowRight } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

export default function Stakeholdercard(props) {
  return (
    <div className="flex flex-col md:w-13 w-full gap-2 bg-darkblue rounded-xl p-4">
      <img
        src={props.item.logo}
        alt="property-management"
        className="cursor-pointer w-[50px] h-[45px] "
      />
      <p className="font-[500] text-white text-xl">{props.item.title}</p>
      <p className="text-grey md:line-clamp-3 hover:line-clamp-5  ">
        {props.item.description}
      </p>
      <Link
        to="/about"
        className="text-md text-white font-[500] flex justify-start items-center"
      >
        Learn More
        <ArrowRight className="text-white" />
      </Link>
    </div>
  );
}
