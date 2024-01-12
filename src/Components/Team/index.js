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
        className="md:w-[650px] md:h-[240px] h-[600px] w-[90%] flex flex-col justify-center items-center"
        sx={{
          ...style,
          transition: "0.5s ease-in",
        }}
      >
        <p className="font-bold text-2xl text-white">Meet the team</p>
        <div className="w-full   flex md:flex-row flex-col justify-evenly items-center">
          <div className="flex flex-col justify-center items-center p-2  ">
            <img
              src="/david.jpeg"
              alt="founder - David"
              className="w-[100px] h-[100px] rounded-full mb-2"
            />
            <p className="font-bold text-white mb-1">David Mugalla</p>
            <p className="text-gray">Co-Founder/CEO</p>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <img
              src="/max.jpeg"
              alt="co-founder - Max"
              className="w-[100px] h-[100px] rounded-full mb-2"
            />
            <p className="font-bold text-white mb-1">O. Maxwell Gad</p>
            <p className="text-gray">Co-Founder/COO</p>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <img
              src="/kalutu.jpg"
              alt="Founding Engineer - Dan"
              className="w-[100px] h-[100px] rounded-full mb-2"
            />
            <p className="font-bold text-white mb-1">Daniel Kalutu</p>
            <p className="text-gray">Founding Engineer</p>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <img
              src="/jmweni.jpeg"
              alt="Founding Engineer - Dan"
              className="w-[100px] h-[100px] rounded-full mb-2"
            />
            <p className="font-bold text-white mb-1">James Thaura</p>
            <p className="text-gray">Founding Engineer</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
