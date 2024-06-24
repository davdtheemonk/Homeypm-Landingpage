import React from "react";
import { TiTick } from "react-icons/ti";
import Button from "../Button";
import Badge from "@mui/material/Badge";
export default function Pricing(props) {
  return (
    <div id="features" className="justify-center items-center flex w-full">
      <div className="card rounded-md p-10 m-auto flex flex-col justify-center items-center shadow-md w-full md:w-[350px] gap-2">
        <p className="text-grey">Starting at a min of </p>
        <div className="flex justify-center items-center ">
          <p className="font-bold text-2xl">$32</p>/mo
        </div>
        <p className="text-grey">*billed annually</p>
        <div className="flex justify-start items-center gap-2 w-full m-2 ">
          <TiTick className="text-primary" />
          Upto 2000 units
        </div>
        <div className="flex justify-start items-center gap-2 w-full m-2 ">
          <TiTick className="text-primary" /> 3rd party Intergrations
        </div>
        <div className="flex justify-start items-center gap-2 w-full m-2 ">
          <TiTick className="text-primary" />
          Open API
        </div>
        <div className="flex justify-start items-center gap-2 w-full m-2 ">
          <TiTick className="text-primary" />
          24/7 Customer Support
        </div>
        <div className="flex justify-start items-center gap-2 w-full m-2 ">
          <TiTick className="text-primary" />
          Self Hosting
        </div>
        <div className="flex justify-start items-center gap-2 w-full m-2 ">
          <TiTick className="text-primary" />
          Campwell AI
        </div>
        <div className="flex justify-start items-center gap-2 w-full m-2 ">
          <TiTick className="text-primary" />
          M-pesa and Card payment collection
        </div>
        <div className="flex justify-start items-center gap-2 w-full m-2 ">
          <TiTick className="text-primary" />
          Accounting
        </div>
        <div className="flex justify-start items-center gap-2 w-full m-2 ">
          <TiTick className="text-primary" />
          Invoicing
        </div>

        <Button
          title="Get Started"
          action={props.scheduleDemo}
          style={
            " block h-[50px]  p-6 bg-white text-dark border-1 border-gradient border-solid cursor-pointer font-[500]  rounded-md flex justify-center items-center "
          }
        />
      </div>
    </div>
  );
}
