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
      description: `Landlords have the ability to manage their tenants in the comfort of their respective positions. The platform gives information on empty rooms available as well as improvement recommendations by tenants. Similarly it gives details to the landlord on the 
      occupied rooms through giving details on the individuals occupying the rooms`,
    },
    {
      id: 1,
      logo: "/marketing.gif",
      title: "Marketing and Advertising Services",
      description:
        "We focus on automatng the marketng and advertsement processes. At a designated fee, the platorm will market houses and fats through creating advertsement spaces for houses as planned by the landlords. The spaces will give and sell the respectve house features thus ease in acquiring more tenants onboard. Those who pay for the advertsement fees will be featured on the ad spaces as well as on our social media spaces to help sell their houses for more tenants. The platorms will also indicate vacant spaces in the houses in case available.",
    },
    {
      id: 2,
      logo: "./budget.gif",
      title: "Budgeting",
      description: `Through the display of the monthly bills on the platform, we believe that this will help tenants in their individual budgeting. Similarly, the landlords will have ease in calculating 
      their totals with regards to the total monthly payments received through the platform. This will help them allocate bills for savings, renovation etc.`,
    },
    {
      id: 3,
      logo: "./analytics.gif",
      title: "Analytics and Reports",
      description:
        "Through the feedback loops created, sales analysis can be easily made by landlords from the feedbacks made by the tenants thus improving services hence increased drive in sales. This analysis will be automated by allowing an ML algorithm to observe cash inflow and outflow (optimization) thus reducing cost.",
    },
    {
      id: 4,
      logo: "./rating.gif",
      title: "Tenant Feedback Loop",
      description:
        "immediate feedback spaces will be available for both the landlord and tenant pages where feedbacks and responses will be channeled thus improved communication. There will be almost an immediate access to the landlords in case of any challenge.",
    },
    {
      id: 5,
      logo: "./transaction.gif",
      title: "Accounting",
      description:
        "Individual tenants profile pages will have monthly rental, water and electricity bills updated on the tenant's pages as well as the due dates for the payments and penalty fees for late payments all updated on the page. The pages will give or rather enable tenants to make direct payments for these bills at the comfort of their homes and similarly save all the transaction details that is the dates when the payments were made and the amount paid. We believe that this will improve clarity on payments done by the tenants.",
    },
    {
      id: 6,
      logo: "./transaction.gif",
      title: "Intergrations",
      description:
        "Individual tenants profile pages will have monthly rental, water and electricity bills updated on the tenant's pages as well as the due dates for the payments and penalty fees for late payments all updated on the page. The pages will give or rather enable tenants to make direct payments for these bills at the comfort of their homes and similarly save all the transaction details that is the dates when the payments were made and the amount paid. We believe that this will improve clarity on payments done by the tenants.",
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
