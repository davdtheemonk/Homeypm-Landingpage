import React, { useState } from "react";
import LpSection from "../../Components/LpSection";
import WaitlistModal from "../../Components/WaitlistModail";
import BeforeandNow from "../../Components/BeforeandNow";
import PropertyFeatureDescription from "../../Components/PropertyFeatureDescription";
import TenantManagement from "../../Components/TenantManagement";
import Invoicing from "../../Components/Invoicing";
import Button from "../../Components/Button";
import CampwellFeatue from "../../Components/CampwellFeature";

export default function LandingPage() {
  const [isOpen, openModal] = useState(false);
  const closeModal = () => {
    openModal(false);
  };
  const handleOpenModal = () => {
    openModal(true);
  };
  const scheduleDemo = () => {
    window.open("https://calendly.com/mugalladave/homey-demo", "_self");
  };
  return (
    <div className=" flex flex-col h-full w-full  z-4 gradient ">
      <LpSection
        handleOpenModal={handleOpenModal}
        scheduleDemo={scheduleDemo}
      />
      <WaitlistModal
        isOpen={isOpen}
        closeModal={closeModal}
        scheduleDemo={scheduleDemo}
      />
      <div className="  w-full flex  justify-center lg:px-56 md:px-auto p-10 mt-42 items-center h-full  flex-col bg-white gap-8 ">
        <p className=" text-3xl font-[500] text-center md:w-[50%] ">
          All in one property manager. Collect payments, manage units and
          communicate with tenants in one platform.
        </p>
        <p className=" text-2xl font-bold">Features</p>
        <PropertyFeatureDescription />
        <TenantManagement />
      </div>

      <BeforeandNow />
      <div className="  w-full flex  justify-center lg:px-56 md:px-auto p-10 mt-42 items-center h-full  flex-col bg-white gap-8 ">
        <Invoicing />
        <div className="w-full flex justify-center  items-center flex-col">
          <Button
            title="Request Demo"
            action={scheduleDemo}
            style={
              "h-[50px]  p-6 bg-white text-dark border-1 border-gradient border-solid cursor-pointer font-[500]  rounded-md flex justify-center items-center "
            }
          />
        </div>
        <CampwellFeatue />
      </div>
    </div>
  );
}
