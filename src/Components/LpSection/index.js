import React from "react";
import Button from "../Button";
import MovingText from "react-moving-text";
export default function LpSection(props) {
  const login = () => {
    window.open("https://app.homeypm.com", "_self");
  };
  return (
    <div className="  w-full flex   lg:px-56 md:px-auto h-screen    mt-20 items-center gap-10 flex-col ">
      <div className="mt-10 md:w-[50%] p-10 flex flex-col gap-10 ">
        <MovingText
          type="flipFromTop"
          duration="1200ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <p className=" text-white md:text-[40px] text-center text-[40px] font-bold">
            AI Powered Cloud Solutions For Property Management
          </p>
        </MovingText>

        <p className="text-white text-center md:text-[22px] m-auto">
          An end-to-end platform providing tools that help property managers
          automate and streamline their workflow.
        </p>
      </div>
      <div className="flex flex-row justfiy-center items-center gap-6">
        <Button
          action={props.login}
          title="Login"
          style={
            "md:hidden md:flex md:ml-auto  h-[50px]  p-6 bg-dark text-white  cursor-pointer font-[500]  rounded-md flex justify-center items-center "
          }
        />
        <Button
          title="Get Started"
          action={props.scheduleDemo}
          style={
            " block h-[50px]  p-6 bg-white text-dark border-1 border-gradient border-solid cursor-pointer font-[500]  rounded-md flex justify-center items-center "
          }
        />
      </div>

      <img src="./pic.png" alt="dashboard" className=" md:w-[60vw]  w-full " />
    </div>
  );
}
