import React from "react";
import Roles from "../../Components/Roles";
import {
  RiFacebookBoxFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
import MovingText from "react-moving-text";
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
    <div className="flex flex-col h-full w-full gap-10 ">
      <div
        id="top"
        className=" md:px-56 p-4  relative  gradient md:mt-28 mt-24  flex justify-center items-center "
      >
        <div className=" bg-secondary flex flex-col h-auto top-12 p-20 rounded-md justify-center items-center gap-2">
          <MovingText
            type="flipFromTop"
            duration="1200ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <p className="font-bold text-darkblue md:text-5xl text-2xl text-center">
              Homey is building software solutions for real estate management.
            </p>
          </MovingText>

          <div className="flex flex-col w-full justify-center items-center gap-1">
            <p className="font-[500] text-darkblue text-md italic">
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
      <div className=" md:px-56 p-10  flex flex-col w-full md:gap-20 gap-10 ">
        <div className="flex md:flex-row flex-col md:h-120  w-full justify-center md:justify-between gap-5 ">
          <img
            src="/houses.gif"
            alt="house-animation"
            className=" cursor-pointer rounded-2lg h-96 rounded-lg "
          />
          <div className="flex flex-col gap-10 md:m-auto">
            <p className="font-bold text-4xl text-dark text-start">
              Empower Your Property Management Journey with Homey: Streamline,
              Optimize, Succeed
            </p>
            <p className="text-dark font-[500] text-xl ">
              Homey Property Manager is a comprehensive platform that
              revolutionizes property management. With features ranging from
              centralized property databases and automated rent collection to
              real-time cash flow monitoring and targeted advertising campaigns,
              Homey empowers property managers to streamline operations,
              optimize financial performance, and enhance tenant experiences.
              Our user-friendly interface, coupled with robust analytics and
              reporting, ensures data-driven decision-making. With Homey,
              property managers can effortlessly manage their entire portfolio,
              from lease agreements to maintenance requests, while fostering
              transparent communication with tenants, owners, and vendors.
              Experience the future of property management with Homey and
              elevate your success in the real estate industry.
            </p>
          </div>
        </div>

        <Roles />
      </div>
    </div>
  );
}
