import { Stack, SwipeableDrawer, Tooltip } from "@mui/material";
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
export default function SideMenu(props) {
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
            <p className="cursor-pointer hover:text-blue text-dark text-[20px] font-[500] font-[22px]">
              Products
            </p>
          </Tooltip>
        </li>
        <li>
          <p
            onClick={() => {
              props.handleOpenTeamModal();
            }}
            className=" cursor-pointer text-dark text-[20px]  font-[500] hover:text-blue"
          >
            Team
          </p>
        </li>
      </ul>
    </SwipeableDrawer>
  );
}
