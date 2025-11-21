import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
export default function Confirm({
  data,
  time,
  open,
  handleClose,
  booking,
  setBooking,
  selectedDate,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleBooking = () => {
    const dataToSave = {
      hospital: data,
      time: time,
      date: selectedDate.date,
    };
    // setBooking((prevData) => ({
    //   ...prevData,
    //   dataToSave,
    // }));
    setBooking((prev) => [...prev, dataToSave]);
  };
  console.log("booking", booking);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm your booking in {data["Hospital Name"]} at {time}
          </Typography>
          <Button
            onClick={() => {
              handleBooking();
              handleClose();
            }}
          >
            Yes
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
