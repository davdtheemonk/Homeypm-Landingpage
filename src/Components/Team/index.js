import React from "react";
import { Modal, Box } from "@mui/material";
export default function Team(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={props.isOpen}
      onClose={props.closeModal}
      aria-labelledby="modal-modal-title"
      disableAutoFocus={true}
      aria-describedby="modal-modal-description"
      sx={{
        p: 2,
        bgcolor: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(4px)",
        transition: "0.5s ease-out",
      }}
    >
      <Box
        className="md:w-[450px] md:h-[240px] h-[400px] w-[90%] flex flex-col justify-center items-center"
        sx={{
          ...style,
          transition: "0.4s ease-in",
        }}
      >
        <p className="font-bold text-2xl text-white">Team</p>
        <div className="w-full   flex md:flex-row flex-col justify-evenly items-center">
          <div className="flex flex-col justify-center items-center p-2  ">
            <img
              src="/david.jpeg"
              alt="founder - David"
              className="w-[100px] h-[100px] rounded-full mb-2"
            />
            <p className="font-bold text-white mb-1">David Mugalla</p>
            <p className="text-gray">Founder/Lead Developer</p>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <img
              src="/max.jpeg"
              alt="co-founder - Max"
              className="w-[100px] h-[100px] rounded-full mb-2"
            />
            <p className="font-bold text-white mb-1">O. Maxwell Gad</p>
            <p className="text-gray">Co-Founder/Product Lead</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
