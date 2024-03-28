import React, { useState } from "react";
import LpSection from "../../Components/LpSection";
import WaitlistModal from "../../Components/WaitlistModail";
import BeforeandNow from "../../Components/BeforeandNow";
import Stakeholders from "../../Components/Stakeholders";
import FeatureDescription from "../../Components/PropertyFeatureDescription";
import PropertyFeatureDescription from "../../Components/PropertyFeatureDescription";
import TenantManagement from "../../Components/TenantManagement";

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
        <p className=" text-2xl font-[500] font-bold">Features</p>
        <PropertyFeatureDescription />
        <TenantManagement />
      </div>
      <Stakeholders />
      <BeforeandNow />
    </div>
  );
}
