import React, { useState } from "react";
import LpSection from "../../Components/LpSection";
import WaitlistModal from "../../Components/WaitlistModail";

export default function LandingPage() {
  const [isOpen, openModal] = useState(false);
  const closeModal = () => {
    openModal(false);
  };
  const handleOpenModal = () => {
    openModal(true);
  };
  return (
    <div className=" flex flex-col h-full w-full  z-4 gradient ">
      <LpSection handleOpenModal={handleOpenModal} />
      <WaitlistModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
