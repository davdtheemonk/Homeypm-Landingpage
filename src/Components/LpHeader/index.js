import React, { useState } from "react";
import Button from "../Button";
import MenuIcon from "@mui/icons-material/Menu";
import ScrollIntoView from "react-scroll-into-view";
import DropdownMenu from "../DropdownMenu";
import { useNavigate, Link } from "react-router-dom";
export default function LpHeader(props) {
  const navigate = useNavigate();
  const location = window.location.pathname;
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const scheduleDemo = () => {
    window.open("https://calendly.com/mugalladave/homey-demo", "_self");
  };
  const login = () => {
    window.open("https://app.homeypm.com", "_self");
  };
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
        <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="cursor-pointer hover:text-blue text-white text-[20px] font-[500] font-[22px]">
            Products
          </Link>

          {isDropdownVisible && <DropdownMenu />}
        </div>

        <Link
          to="/about"
          className={`cursor-pointer  ${
            location.includes("about") ? "text-secondary" : "text-white"
          } text-[20px]  ml-10 font-[500] hover:text-blue`}
        >
          About
        </Link>
        <ScrollIntoView selector="features">
          <Link className=" cursor-pointer text-white text-[20px]  ml-10 font-[500] hover:text-blue">
            Pricing
          </Link>
        </ScrollIntoView>

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
      <div className="flex flex-row justfiy-center items-center gap-6 md:ml-auto">
        <Button
          title="Login"
          action={login}
          style={
            "hidden md:flex md:ml-auto  h-[50px]  p-6 bg-dark text-white  cursor-pointer font-[500]  rounded-md flex justify-center items-center "
          }
        />
        <Button
          title="Get Started"
          action={scheduleDemo}
          style={
            "hidden md:flex md:ml-auto  h-[50px]  p-6 bg-white text-dark border-1 border-gradient border-solid cursor-pointer font-[500]  rounded-md flex justify-center items-center "
          }
        />
      </div>
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
