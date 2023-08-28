import React from "react";

export default function Card(props) {
  return (
    <div className="flex flex-col md:w-15 w-[95%] gap-2">
      <img
        src={props.item.logo}
        alt="property-management"
        className="cursor-pointer w-[40px] h-[35px] "
      />
      <p className="font-[500]">{props.item.title}</p>
      <p className="text-grey ">{props.item.description}</p>
    </div>
  );
}
