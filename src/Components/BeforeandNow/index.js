import React from "react";

export default function BeforeandNow() {
  return (
    <div className="  w-full flex  justify-center lg:px-56 md:px-auto p-10 mt-42 items-center h-full  flex-col bg-white ">
      <p className=" py-10 text-3xl">Before</p>
      <div className="grid md:grid-cols-6 grid-cols-3 w-full gap-5">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full flex justify-center  md:w-[90px] md:h-[90px] w-[70px] h-[70px] items-center shadow-md">
            <img
              src="/mpesa.png"
              alt="payments"
              className="cursor-pointer  md:w-[60px] w-40px md:h-[60px] w-[40px]"
            />
          </div>
          <p className="text-grey md:text-xl text-md">Payments</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full flex justify-center  md:w-[90px] md:h-[90px] w-[70px] h-[70px] items-center shadow-md">
            <img
              src="/zoom.svg"
              alt="zoom"
              className="cursor-pointer  md:w-[50px] md:h-[50px] w-[30px] h-[30px] "
            />
          </div>
          <p className="text-grey md:md:text-xl text-md ">Sales calls</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full flex justify-center  md:w-[90px] md:h-[90px] w-[70px] h-[70px] items-center shadow-md">
            <img
              src="/slack.svg"
              alt="slack"
              className="cursor-pointer  md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
            />
          </div>
          <p className="text-grey md:text-xl text-md">Collaboration</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full flex justify-center  md:w-[90px] md:h-[90px] w-[70px] h-[70px] items-center shadow-md">
            <img
              src="/calendly.png"
              alt="calendly"
              className="cursor-pointer  md:w-[60px] w-40px md:h-[60px] w-[40px]"
            />
          </div>
          <p className="text-grey md:text-xl text-md">Scheduling</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full flex justify-center  md:w-[90px] md:h-[90px] w-[70px] h-[70px] items-center shadow-md">
            <img
              src="/quickbooks.jpg"
              alt="quickbooks"
              className="cursor-pointer  md:w-[60px] w-40px md:h-[60px] w-[40px]"
            />
          </div>
          <p className="text-grey md:text-xl text-md">Accounting</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full flex justify-center  md:w-[90px] md:h-[90px] w-[70px] h-[70px] items-center shadow-md">
            <img
              src="/gmail.png"
              alt="gmail"
              className="cursor-pointer rounded-full md:w-[60px] w-50px md:h-[60px] w-[50px]"
            />
          </div>
          <p className="text-grey md:text-xl text-md">Communication</p>
        </div>
      </div>
      <p className=" py-10 text-3xl">Now</p>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="rounded-md card flex justify-center  w-[160px] h-[160px] items-center ">
          <img
            src="/logo1.png"
            alt="gmail"
            className="cursor-pointer rounded-full w-[170px] h-[100px]"
          />
        </div>
        <p className="text-grey md:text-xl text-md">All you need is Homey</p>
      </div>
    </div>
  );
}
