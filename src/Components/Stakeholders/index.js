import React from "react";
import Stakeholdercard from "../Stakeholdercard";

export default function Stakeholders() {
  const services = [
    {
      id: 0,
      logo: "/management.png",
      title: "Property Managers",
      description: `By offering an all-in-one solution that simplifies property management tasks, we empower property managers to focus on what matters most: delivering exceptional service to tenants.`,
    },
    {
      id: 1,
      logo: "/landlord.png",
      title: "Tenants",
      description:
        "Tenants can effortlessly keep in touch with their landlords. By offering tools to ensure efficient communication between the stakeholders, property owners are able to provide the right services to their tenants. ",
    },
    {
      id: 2,
      logo: "./protection.png",
      title: "Vendors",
      description: `Provide services with ease to a wider customer base of property managers and tenants by use of effective technology to find ,track and manage those services.`,
    },
  ];
  return (
    <div className="  w-full flex  justify-center lg:px-56 md:px-auto p-10 mt-42 items-center h-full  flex-col bg-white ">
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service) => (
          <Stakeholdercard key={service.id} item={service} />
        ))}
      </div>
    </div>
  );
}
