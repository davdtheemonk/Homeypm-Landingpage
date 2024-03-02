import React, { useState } from "react";
import LpSection from "../../Components/LpSection";
import WaitlistModal from "../../Components/WaitlistModail";
import BeforeandNow from "../../Components/BeforeandNow";
import Stakeholders from "../../Components/Stakeholders";

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
      <Stakeholders />
      <BeforeandNow />
    </div>
  );
}
