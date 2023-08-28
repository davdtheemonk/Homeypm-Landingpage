import React from "react";
import Card from "../Card";

export default function Roles() {
  const values = [
    {
      id: 0,
      logo: "/teamwork.png",
      title: "Team Work",
      description: ``,
    },
    {
      id: 1,
      logo: "/brain.png",
      title: "Innovation",
      description: "",
    },
    {
      id: 2,
      logo: "./worker.png",
      title: "Dedication",
      description: ``,
    },
    {
      id: 3,
      logo: "./idea.png",
      title: "Creativity",
      description: "",
    },
  ];
  const services = [
    {
      id: 0,
      logo: "/property.gif",
      title: "Property Management",
      description: `Homey's property management features are designed to enhance operational efficiency and elevate tenant experiences. By offering an all-in-one solution that simplifies property management tasks, we empower property managers to focus on what matters most: delivering exceptional service to tenants and maximizing property performance.`,
    },
    {
      id: 1,
      logo: "/marketing.gif",
      title: "Marketing and Advertising Services",
      description:
        "Homey's marketing and advertising services seamlessly integrate into our platform. Property managers can effortlessly create, update, and syndicate property listings across various platforms. With intuitive tools, you can design visually compelling showcases and launch tailored advertising campaigns to increase property visibility.",
    },
    {
      id: 2,
      logo: "./budget.gif",
      title: "Real-time cashflow monitoring",
      description: `No longer will you need to wait for manual updates or make decisions based on outdated information. With real-time insights, you're empowered to make informed choices that optimize revenue and drive financial success.`,
    },
    {
      id: 3,
      logo: "./analytics.gif",
      title: "Analytics and Reports",
      description:
        "Simply select the data points you want to analyze, and our intuitive dashboards present information in a visually engaging manner. Whether you're tracking performance over time or delving into specific property details, Homey's analytics empower you to make well-informed decisions.",
    },
    {
      id: 4,
      logo: "./rating.gif",
      title: "Communication and feedback",
      description:
        "By actively engaging with users and leveraging their insights, we continuously enhance our platform to better serve the needs of property managers, tenants, and vendors. Our commitment to user-driven innovation ensures that Homey evolves in sync with user expectations and industry trends.",
    },
    {
      id: 5,
      logo: "./transaction.gif",
      title: "Accounting",
      description:
        "Homey Property Manager understands that financial management is a cornerstone of successful property management. Our comprehensive accounting feature is designed to simplify and streamline the financial aspects of property management, empowering property managers to maintain accurate records, optimize cash flow, and make informed financial decisions.",
    },
    {
      id: 6,
      logo: "./transaction.gif",
      title: "Intergrations",
      description:
        "Integrations are the key to unlocking an enhanced property management experience. Homey's integration capabilities empower property managers to work smarter, not harder. Whether you're enhancing communication, optimizing marketing efforts, or ensuring financial accuracy, Homey ensures that your property management operations are cohesive and efficient.",
    },
  ];
  return (
    <div className="flex flex-col justify-start  h-full w-full items-start rounded-md gap-5  ">
      <div className="flex m-auto w-full gap-5 flex-col">
        <p className="font-[500] text-4xl">Services we offer</p>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <Card key={service.id} item={service} />
          ))}
        </div>
      </div>
      <div className="flex m-auto w-full gap-10 flex-col">
        <p className="font-[500] text-4xl">Our Core Values</p>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-10">
          {values.map((value) => (
            <Card key={value.id} item={value} />
          ))}
        </div>
      </div>
    </div>
  );
}
