import React from "react";

export default function TenantManagement() {
  return (
    <div className="flex md:flex-row flex-col justify-start items-start gap-4 ">
      <img src="./mgmt.gif" className="rounded-md    md:w-[60vw]  w-full " />
      <div className="gap-4 flex flex-col md:text-end text-center md:ml-auto">
        <h2 className="text-primary">Tenant Management</h2>
        <p className="md:w-[80%] ml-auto">
          By offering an all-in-one solution that simplifies property management
          tasks, we empower property managers to focus on what matters most:
          delivering exceptional service to tenants. As simple as plug and play.
          Add you property listing and start monitoring.
        </p>
      </div>
    </div>
  );
}
