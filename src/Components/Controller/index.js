import React, { useState } from "react";
import LpHeader from "../LpHeader";
import WaitlistModal from "../WaitlistModail";
import Team from "../Team";
import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu";
import Footer from "../Footer";
export default function Controller() {
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
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <div className="relative">
      <LpHeader
        handleMouseEnter={handleMouseEnter}
        isDropdownVisible={isDropdownVisible}
        handleOpenModal={handleOpenModal}
        handleOpenTeamModal={handleOpenTeamModal}
        handleOpenDrawer={handleOpenDrawer}
      />

      <WaitlistModal isOpen={isOpen} closeModal={closeModal} />
      <Team isOpen={isTeamModalOpen} closeModal={closeTeamModal} />
      <SideMenu
        handleOpenTeamModal={handleOpenTeamModal}
        toggleDrawer={toggleDrawer}
        drawerState={drawerState}
      />
      <Outlet
        handleMouseLeave={handleMouseLeave}
        handleOpenModal={handleOpenModal}
      />
      <Footer />
    </div>
  );
}
