import React from "react";

export default function Invoicing() {
  return (
    <div className="grid md:grid-cols-2 gap-10 w-full">
      <div className="gap-4 flex flex-col md:text-start text-center">
        <h2 className="text-primary">Payments</h2>
        <p className="leading-8 text-xl">
          Our tenant management system not only streamlines property tasks but
          also simplifies payment collection processes. Through secure and
          intuitive interfaces, property owners can effortlessly manage rent
          collection, ensuring timely payments and financial transparency. With
          automated reminders and flexible payment options, Homey enhances cash
          flow management and reduces administrative burdens, ultimately
          improving overall operational efficiency and tenant satisfaction.
        </p>
      </div>
      <img src="./payment.png" className="rounded-md      w-full" />
    </div>
  );
}
