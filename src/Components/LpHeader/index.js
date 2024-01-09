import React from "react";
import Button from "../Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Tooltip } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
export default function LpHeader(props) {
  const navigate = useNavigate();
  const location = window.location.pathname;
  return (
    <div className="fixed gradient top-0 left-0 z-10 flex w-full lg:px-56 md:px-auto p-4 justify-start items-center flex-row">
      <img
        onClick={() => {
          navigate("/");
        }}
        src="/logo.png"
        alt="logo"
        className="cursor-pointer md:w-[170px] md:h-[90px] w-[120px] h-[70px]"
      />
      <div className="hidden md:flex  ml-20 mr-10 justify-evenly align-center ">
        <Tooltip title="Coming Soon">
          <Link className="cursor-pointer hover:text-blue text-white text-[20px] font-[500] font-[22px]">
            Products
          </Link>
        </Tooltip>
        <Link
          to="/about"
          className={`cursor-pointer  ${
            location.includes("about") ? "text-secondary" : "text-white"
          } text-[20px]  ml-10 font-[500] hover:text-blue`}
        >
          About
        </Link>
        <Tooltip title="Coming Soon">
          <Link className=" cursor-pointer text-white text-[20px]  ml-10 font-[500] hover:text-blue">
            Pricing
          </Link>
        </Tooltip>
        <Link
          onClick={() => {
            props.handleOpenTeamModal();
          }}
          className=" cursor-pointer text-white text-[20px]  ml-10 font-[500] hover:text-blue"
        >
          Team
        </Link>
        <Link
          to="/blog"
          className=" cursor-pointer text-white text-[20px]  ml-10 font-[500] hover:text-blue"
        >
          Blog
        </Link>
      </div>
      <Button
        title="Join Waitlist"
        action={props.handleOpenModal}
        style={
          "hidden md:flex md:ml-auto  h-[50px]  p-6 bg-darkblue  text-white cursor-pointer font-[500]  rounded-md flex justify-center items-center "
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
