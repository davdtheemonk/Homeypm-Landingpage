import React from "react";

export default function CampwellFeatue() {
  return (
    <div className="grid md:grid-cols-2 gap-10 w-full ">
      <div className="gap-4 flex flex-col md:text-start text-center w-full">
        <h2 className="text-primary">Campwell AI co-pilot</h2>
        <img src="./campwell.png" className="rounded-md      w-full " />
      </div>
      <p className="md:w-[80%] ml-auto md:text-start  text-center mt-10 leading-8">
        Campwell, our AI Copilot for property management harnesses advanced
        algorithms to analyze property data, identify trends, and offer
        predictive insights, enabling proactive decision-making. With its
        user-friendly interface and customizable features, property managers can
        efficiently track rental payments, schedule maintenance tasks, and
        optimize property performance, ultimately enhancing tenant satisfaction
        and maximizing rental yields.
      </p>
    </div>
  );
}
