import { Stack, SwipeableDrawer, Tooltip } from "@mui/material";
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export default function SideMenu(props) {
  const navigate = useNavigate();
  const location = window.location.pathname;

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={props.drawerState}
      onClose={() => props.toggleDrawer(false)}
      onOpen={() => props.toggleDrawer(true)}
      sx={{
        "& .MuiDrawer-paper": {
          p: 4,
          width: "100%",
          maxWidth: 312,
        },
      }}
    >
      <Stack
        sx={{ cursor: "pointer" }}
        direction="row"
        alignItems="center"
        gap={1}
        mb={4}
        onClick={() => props.toggleDrawer(!props.drawerState)}
      >
        <RiCloseCircleFill />
      </Stack>

      <ul className="flex flex-col gap-8 justify-around w-[100%]">
        <li>
          <Tooltip title="Coming Soon">
            <p className="cursor-pointer hover:text-secondary text-dark text-[20px] font-[500] font-[22px]">
              Products
            </p>
          </Tooltip>
        </li>
        <li>
          <p
            onClick={() => {
              navigate("/about");
              props.toggleDrawer(false);
            }}
            className={`cursor-pointer  ${
              location.includes("about") ? "text-secondary" : "text-dark"
            } text-[20px] font-[500] hover:text-blue`}
          >
            About
          </p>
        </li>
        <li>
          <Tooltip title="Coming Soon">
            <p className="cursor-pointer hover:text-secondary text-dark text-[20px] font-[500] font-[22px]">
              Pricing
            </p>
          </Tooltip>
        </li>
        <li>
          <p
            onClick={() => {
              props.handleOpenTeamModal();
              props.toggleDrawer(false);
            }}
            className=" cursor-pointer text-dark text-[20px]  font-[500] hover:text-secondary"
          >
            Team
          </p>
        </li>
        <li>
          <Tooltip title="Coming Soon">
            <p className="cursor-pointer hover:text-secondary text-dark text-[20px] font-[500] font-[22px]">
              Pricing
            </p>
          </Tooltip>
        </li>
        <li>
          <p
            onClick={() => {
              navigate("/blog");
              props.toggleDrawer(false);
            }}
            className=" cursor-pointer text-dark text-[20px]  font-[500] hover:text-secondary"
          >
            Blog
          </p>
        </li>
      </ul>
    </SwipeableDrawer>
  );
}
