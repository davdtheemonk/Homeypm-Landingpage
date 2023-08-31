import React from "react";
import Button from "../Button";
import MovingText from "react-moving-text";
export default function LpSection(props) {
  return (
    <div className="  w-full flex   lg:px-56 md:px-auto md:h-screen min-h-[60%] p-10  mt-20 items-center gap-7 flex-col ">
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

        <p className="text-white text-center md:text-[22px] ">
          Monitor realtime cashflow, streamline accounting and perform sales on
          the go.
        </p>
      </div>
      <div className="w-full flex justify-center  items-center">
        <Button
          title="Join Waitlist"
          action={props.handleOpenModal}
          style=" h-[50px]  p-6 bg-darkblue  text-white cursor-pointer font-[500]  rounded-md flex justify-center items-center "
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
