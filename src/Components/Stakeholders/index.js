import React from "react";
import Stakeholdercard from "../Stakeholdercard";

export default function Stakeholders() {
  const services = [
    {
      id: 0,
      logo: "/management.png",
      title: "Property Managers",
      description: `Homey's property management features are designed to enhance operational efficiency and elevate tenant experiences. By offering an all-in-one solution that simplifies property management tasks, we empower property managers to focus on what matters most: delivering exceptional service to tenants and maximizing property performance.`,
    },
    {
      id: 1,
      logo: "/landlord.png",
      title: "Tenants",
      description:
        "Homey's marketing and advertising services seamlessly integrate into our platform. Property managers can effortlessly create, update, and syndicate property listings across various platforms. With intuitive tools, you can design visually compelling showcases and launch tailored advertising campaigns to increase property visibility.",
    },
    {
      id: 2,
      logo: "./protection.png",
      title: "Vendors",
      description: `No longer will you need to wait for manual updates or make decisions based on outdated information. With real-time insights, you're empowered to make informed choices that optimize revenue and drive financial success.`,
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
