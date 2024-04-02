import React from "react";

export default function PropertyFeatureDescription() {
  return (
    <div className="flex md:flex-row flex-col justify-start items-start gap-4  m-auto md:mt-8">
      <div className="gap-4 flex flex-col md:text-start text-center">
        <h2 className="text-primary">Property Management</h2>
        <p className="md:w-[80%] leading-8">
          By offering an all-in-one solution that simplifies property management
          tasks, we empower property managers to focus on what matters most:
          delivering exceptional service to tenants. As simple as plug and play.
          Add you property listing and start monitoring.
        </p>
      </div>
      <img src="./mgmt.gif" className="rounded-md    md:w-[60vw]  w-full " />
    </div>
  );
}
