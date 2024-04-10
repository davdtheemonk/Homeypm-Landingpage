import React from "react";

export default function Selfhosting() {
  return (
    <div className="grid md:grid-cols-2 gap-10 w-full">
      <div className="gap-4 flex flex-col md:text-start text-center">
        <h2 className="text-primary">Self Hosting</h2>
        <p className="leading-8  text-xl">
          Homey's self-hosting feature allows property managers to host the
          software on their own servers, providing greater control over data
          security and customization options. With this flexibility, property
          managers can tailor Homey to their specific needs and potentially
          reduce operating costs by leveraging existing infrastructure.
        </p>
      </div>
      <img src="./hosting.jpg" className="rounded-md      w-full" />
    </div>
  );
}
