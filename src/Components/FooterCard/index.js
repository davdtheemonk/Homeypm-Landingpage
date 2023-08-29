import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FooterCard(props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-evenly items-start p-4 gap-5">
      <p className="text-white text-[500]">{props.item.title}</p>
      {props.item.links.map((link) => (
        <Link
          to={link.url}
          className="text-grey cursor-pointer hover:text-white"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
