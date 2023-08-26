import React, { useState } from "react";
import LpHeader from "../../Components/LpHeader";
import LpSection from "../../Components/LpSection";
import WaitlistModal from "../../Components/WaitlistModail";
import Team from "../../Components/Team";
import SideMenu from "../../Components/SideMenu";

export default function LandingPage() {
  const [isOpen, openModal] = useState(false);
  const [drawerState, toggleDrawer] = useState(false);
  const handleOpenDrawer = () => {
    toggleDrawer(true);
  };

  const closeModal = () => {
    openModal(false);
  };
  const handleOpenModal = () => {
    openModal(true);
  };
  const [isTeamModalOpen, openTeamModal] = useState(false);
  const closeTeamModal = () => {
    openTeamModal(false);
  };
  const handleOpenTeamModal = () => {
    openTeamModal(true);
  };
  return (
    <div className=" flex flex-col h-screen w-full  overflow-hidden gradient ">
      <LpHeader
        handleOpenModal={handleOpenModal}
        handleOpenTeamModal={handleOpenTeamModal}
        handleOpenDrawer={handleOpenDrawer}
      />
      <LpSection handleOpenModal={handleOpenModal} />
      <WaitlistModal isOpen={isOpen} closeModal={closeModal} />
      <Team isOpen={isTeamModalOpen} closeModal={closeTeamModal} />
      <SideMenu
        handleOpenTeamModal={handleOpenTeamModal}
        toggleDrawer={toggleDrawer}
        drawerState={drawerState}
      />
    </div>
  );
}
