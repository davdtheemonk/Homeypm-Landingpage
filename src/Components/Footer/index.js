import React from "react";
import FooterCard from "../FooterCard";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const cards = [
    {
      id: 0,
      title: "Company",
      links: [
        { title: "About", url: "/about" },
        { title: "Blog", url: "/" },
        { title: "Status", url: "/" },
        { title: "Team", url: "/" },
      ],
    },
    {
      id: 1,
      title: "Products",
      links: [
        { title: "Property Management", url: "/" },
        { title: "CRM", url: "/" },
        { title: "Rent Collector Link", url: "/" },
      ],
    },
    {
      id: 2,
      title: "Legal",
      links: [
        { title: "Terms of service", url: "/" },
        { title: "Privacy Policy", url: "/" },
        { title: "End User Agreement", url: "/" },
      ],
    },
  ];
  return (
    <div className=" min-h-[100px] md:px-56 p-4 flex  bg-darkblue md:flex-row flex-col md:justify-between ">
      <img
        src="/logo1.png"
        onClick={() => {
          navigate("/");
        }}
        alt="logo"
        className="cursor-pointer md:w-[170px] md:h-[90px] w-[120px] h-[70px]"
      />
      {cards.map((card) => (
        <FooterCard key={card.id} item={card} />
      ))}
    </div>
  );
}
