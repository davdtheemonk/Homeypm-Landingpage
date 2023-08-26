import React from "react";
import Button from "../Button";
export default function LpSection(props) {
  return (
    <div className=" relative w-full flex  justify-center p-[15px]  items-center gap-7 flex-col">
      <div className="mt-10 md:w-[50%] flex flex-col gap-5 ">
        <p className=" text-white md:text-[40px] text-center text-[24px] font-bold">
          AI Powered Cloud Solutions For Property Management
        </p>
        <p className="text-white text-center md:text-[22px] ">
          Monitor realtime cashflow, streamline accounting and perform sales on
          the go.
        </p>
      </div>
      <div className="w-full flex justify-center  items-center">
        <Button
          title="Join Waitlist"
          action={props.handleOpenModal}
          style="h-[50px] md:w-[10%] w-[40%] bg-darkblue text-white cursor-pointer font-[500] hover:card rounded-md flex justify-center items-center "
        />
      </div>

      <img
        src="/demodashboard.png"
        alt="dashboard"
        className=" md:w-[60vw]  w-full h-full"
      />
    </div>
  );
}
