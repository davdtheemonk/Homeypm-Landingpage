import React from "react";
import FooterCard from "../FooterCard";
import { useNavigate } from "react-router-dom";
import {
  RiFacebookBoxFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
export default function Footer() {
  const handleTwitter = () => {
    window.open(
      "https://twitter.com/homey_pm?t=JCeVDWZzLhOwvV8f8P3UQQ&s=09",
      "_blank"
    );
  };
  const handleFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61550504325075",
      "_blank"
    );
  };
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/company/homey-pm/", "_blank");
  };

  const navigate = useNavigate();
  const cards = [
    {
      id: 0,
      title: "Company",
      links: [
        { title: "About", url: "/about" },
        { title: "Blog", url: "/blog" },
      ],
    },
    {
      id: 1,
      title: "Products",
      links: [
        { title: "Property Management", url: "/" },
        { title: "Self Hosting", url: "/" },
        { title: "3rd party integrations", url: "/" },
        { title: "Invoicing", url: "/" },
      ],
    },
    {
      id: 2,
      title: "Legal",
      links: [
        { title: "Terms of service", url: "/" },
        { title: "Privacy Policy", url: "/" },
      ],
    },
  ];
  return (
    <div className=" min-h-[100px] lg:px-56 md:px-auto p-4 flex  bg-darkblue md:flex-row flex-col md:justify-between ite-center  ">
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
      <div className="flex flex-col justify-start  items-start w-40 p-4 gap-5 ">
        <p className="text-white text-[500]">Socials</p>
        <div className="flex w-full flex-row justify-between mb-auto items-center">
          <RiTwitterFill
            onClick={() => {
              handleTwitter();
            }}
            className="text-grey hover:text-white  text-2xl cursor-pointer"
          />
          <RiFacebookBoxFill
            onClick={() => {
              handleFacebook();
            }}
            className="text-grey hover:text-white  text-2xl cursor-pointer"
          />
          <RiLinkedinFill
            onClick={() => {
              handleLinkedIn();
            }}
            className="text-grey hover:text-white text-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
