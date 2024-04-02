import React from "react";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu  rounded-md grid grid-cols-2 w-[50%] p-6">
      <div className="flex flex-col justify-start leading-2 mt-4">
        <p className="text-white font-bold text-xl">Property Management OS</p>
        <p className="text-gray text-md leading-8 mr-14">
          Homey allows property management to streamline their workflow by
          giving them the right tools on a single workspace. Property managers
          enjoy tools such as cashflow analysis, Tenant management, 3rd party
          intergrations, Inbuilt Accounting feature, Invoicing and so much more.
        </p>
      </div>
      <ul>
        <li className="flex flex-row justify-start items-center gap-4">
          <img src="./management.png" className="w-6 h-6"></img>
          <p className="text-xl">Property Management</p>
        </li>
        <li className="flex flex-row justify-start items-center gap-4">
          <img src="./server.png" className="w-6 h-6"></img>
          <p className="text-xl"> Self Hosting</p>
        </li>
        <li className="flex flex-row justify-start items-center gap-4">
          <img src="./ai.png" className="w-6 h-6"></img>
          <p className="text-xl">Campwell AI Assistant</p>
        </li>
        <li className="flex flex-row justify-start items-center gap-4">
          <img src="./integrated-system.png" className="w-6 h-6"></img>
          <p className="text-xl">Third party intergrations</p>
        </li>
        <li className="flex flex-row justify-start items-center gap-4">
          <img src="./budget.png" className="w-6 h-6"></img>
          <p className="text-xl">Accounting</p>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
