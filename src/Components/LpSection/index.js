import React from "react";
import Button from "../Button";
import MovingText from "react-moving-text";
export default function LpSection(props) {
  return (
    <div className="  w-full flex   lg:px-56 md:px-auto md:h-screen h-[60%] p-10  mt-20 items-center gap-7 flex-col ">
      <div className="mt-10 md:w-[50%] flex flex-col gap-5 ">
        <MovingText
          type="flipFromTop"
          duration="1200ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <p className=" text-white md:text-[40px] text-center text-[24px] font-bold">
            AI Powered Cloud Solutions For Property Management
          </p>
        </MovingText>

        <p className="text-white text-center md:text-[22px] w-[70%] m-auto">
          An end-to-end platform providing tools that help property managers
          automate and streamline their workflow.
        </p>
      </div>
      <div className="w-full flex justify-center  items-center flex-col gap-4">
        <Button
          title="Request Demo"
          action={props.scheduleDemo}
          style={
            "md:hidden block h-[50px]  p-6 bg-white text-dark border-1 border-gradient border-solid cursor-pointer font-[500]  rounded-md flex justify-center items-center "
          }
        />
        <Button
          title="Join Waitlist"
          action={props.handleOpenModal}
          style=" md:hidden block h-[50px]  p-6 bg-darkblue  text-white cursor-pointer font-[500]  rounded-md flex justify-center items-center "
        />
      </div>

      <img
        src="/demodashboard.png"
        alt="dashboard"
        className=" md:w-[60vw]  w-full "
      />
    </div>
  );
}
