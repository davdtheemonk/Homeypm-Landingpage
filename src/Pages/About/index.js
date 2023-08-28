import React from "react";
import Roles from "../../Components/Roles";
import {
  RiFacebookBoxFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

export default function About() {
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
  return (
    <div className="flex flex-col h-screen w-full gap-10 ">
      <div className=" md:px-56 p-4  relative  gradient md:mt-28 mt-24  flex justify-center items-center ">
        <div className=" bg-secondary flex flex-col h-auto top-12 p-20 rounded-md justify-center items-center gap-2">
          <p className="font-bold text-darkblue md:text-5xl text-2xl text-center">
            Homey is building software solutions for the real estate management.
          </p>
          <div className="flex flex-col w-full justify-center items-center gap-1">
            <p className="font-[500] text-darkblue text-md">
              Follow us on this journey
            </p>
            <div className="flex  flex-row  justify-evenly items-center">
              <RiTwitterFill
                onClick={() => {
                  handleTwitter();
                }}
                className="text-darkblue text-2xl cursor-pointer hover:text-primary"
              />
              <RiFacebookBoxFill
                onClick={() => {
                  handleFacebook();
                }}
                className="text-darkblue text-2xl cursor-pointer hover:text-primary"
              />
              <RiLinkedinFill
                onClick={() => {
                  handleLinkedIn();
                }}
                className="text-darkblue text-2xl cursor-pointer hover:text-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:px-56 p-4  flex flex-col h-screen w-full md:gap-20 gap-10 ">
        <div className="flex md:flex-row flex-col w-full justify-center md:justify-between gap-10 ">
          <img
            src="/houses.gif"
            alt="house-animation"
            className=" cursor-pointer rounded-2lg h-100 "
          />
          <div className="flex flex-col p-5 gap-10">
            <p className="font-bold text-4xl text-dark text-start">
              About Homey
            </p>
            <p className="text-dark font-[500] text-xl ">
              Homey is a Saas platform offering property management for real
              estate portfolios such as rental units. Our main goal is to
              maximize profits by providing automation of the daily tasks in
              management of portfolios such as communication or marketing
              campaigns, assist in providing insights for sales, marketing and
              budgeting by leveraging real time data and analytics and also
              providing accountability measures by managing transactions between
              different stakeholders using the platform.
            </p>
          </div>
        </div>

        <Roles />
      </div>
    </div>
  );
}
