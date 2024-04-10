import React from "react";

export default function PropertyFeatureDescription() {
  return (
    <div className="grid md:grid-cols-2 gap-10 w-full ">
      <div className="gap-4 flex flex-col md:text-start text-center w-full">
        <h2 className="text-primary">Property Management</h2>
        <p className=" leading-8 text-xl">
          By offering an all-in-one solution that simplifies property management
          tasks, we empower property managers to focus on what matters most:
          delivering exceptional service to tenants. As simple as plug and play.
          Add you property listing and start monitoring.
        </p>
      </div>
      <img src="./mngmt.jpg" className="rounded-md w-full " />
    </div>
  );
}
