import React from "react";
import Button from "../Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Tooltip } from "@mui/material";
export default function LpHeader(props) {
  return (
    <div className="flex w-full  md:px-20 p-4 justify-start items-center flex-row">
      <img
        src="/logo-svg.png"
        alt="logo"
        className=" md:w-[130px] md:h-[40px] w-[90px] h-[30px]"
      />
      <div className="hidden md:flex  ml-20 justify-evenly align-center ">
        <Tooltip title="Coming Soon">
          <p className="cursor-pointer hover:text-blue text-white text-[20px] font-[500] font-[22px]">
            Products
          </p>
        </Tooltip>
        <p
          onClick={() => {
            props.handleOpenTeamModal();
          }}
          className=" cursor-pointer text-white text-[20px]  ml-10 font-[500] hover:text-blue"
        >
          Team
        </p>
      </div>
      <Button
        title="Join Waitlist"
        action={props.handleOpenModal}
        style={
          "hidden md:flex ml-auto h-[50px] md:w-[10%] w-[24%]  bg-darkblue  text-white cursor-pointer font-[500] hover:card rounded-md flex justify-center items-center "
        }
      />
      <div className="md:hidden text-white ml-auto flex justify-center items-center">
        <MenuIcon
          onClick={() => {
            props.handleOpenDrawer();
          }}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
