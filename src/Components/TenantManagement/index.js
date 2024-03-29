import React from "react";

export default function TenantManagement() {
  return (
    <div className="flex md:flex-row flex-col justify-center items-start gap-4   w-[80%] mt-8 md:gap-12 ">
      <div className="gap-4 flex flex-col md:text-start text-center w-full">
        <h2 className="text-primary">Tenant Management</h2>
        <img src="./tenant.png" className="rounded-md      w-full " />
      </div>
      <p className="md:w-[70%] ml-auto md:text-start  text-center mt-10 leading-8 ">
        Homey's tenant management system simplifies property tasks, from
        onboarding to maintenance, enhancing communication and accountability.
        With user-friendly interfaces and robust functionalities, Homey
        optimizes tenant satisfaction and property performance. It streamlines
        operations, ensuring efficiency and a seamless tenant experience.
      </p>
    </div>
  );
}
