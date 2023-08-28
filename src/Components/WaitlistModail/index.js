import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import Button from "../Button";
import {
  RiFacebookBoxFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
export default function WaitlistModal(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    boxShadow: 24,
    p: 4,
  };
  const [errors, setErrors] = useState("");
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  const handleInvite = () => {};
  const [email, setEmail] = useState("");

  const validate = async () => {
    let isValid = true;
    if (!email) {
      handleError("Please input your email", "email");
      isValid = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (isValid) {
      handleInvite();
    }
  };

  const handleTwitter = () => {
    window.open(
      "https://twitter.com/homey_pm?t=JCeVDWZzLhOwvV8f8P3UQQ&s=09",
      "_blank"
    );
  };
  const handleFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61550504325075",
      "_blank"
    );
  };
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/company/homey-pm/", "_blank");
  };
  return (
    <Modal
      open={props.isOpen}
      onClose={props.closeModal}
      disableAutoFocus={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        p: 2,
        bgcolor: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(4px)",
        transition: "0.5s ease-out",
      }}
    >
      <Box
        className="md:w-[450px] h-[200px] w-[90%] flex flex-col justify-center items-center"
        sx={{
          ...style,
          transition: "0.4s ease-in",
        }}
      >
        <div className="w-full   card flex flex-row justify-start items-center">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full  ml-2 focus:outline-none border-none h-[40px]"
            placeholder=" Enter Your Email"
            required
          />
          <Button
            title="Get Notified"
            action={validate}
            style={
              "w-[50%] h-[40px]  bg-primary cursor-pointer hover:card  flex justify-center items-center text-white"
            }
          />
        </div>
        {errors.email && (
          <p className="text-danger text-sm mt-1">{errors.email}</p>
        )}
        <div className="flex w-[60%] flex-row mt-5 justify-between items-center">
          <RiTwitterFill
            onClick={() => {
              handleTwitter();
            }}
            className="text-secondary text-2xl cursor-pointer"
          />
          <RiFacebookBoxFill
            onClick={() => {
              handleFacebook();
            }}
            className="text-secondary text-2xl cursor-pointer"
          />
          <RiLinkedinFill
            onClick={() => {
              handleLinkedIn();
            }}
            className="text-secondary text-2xl cursor-pointer"
          />
        </div>
      </Box>
    </Modal>
  );
}
