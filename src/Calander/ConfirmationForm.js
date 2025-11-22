import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  console.log(data);
  const handleBooking = () => {
    const dataToSave = {
      "Hospital Name": data["Hospital Name"],
      City: data.City,
      State: data.State,
      "Hospital Type": data["Hospital Type"],
      "Hospital overall rating": data["Hospital overall rating"],
      bookingDate: selectedDate.date,
      bookingTime: time,
    };
    // const dataToSave = {
    //   hospital: data,
    //   time: time,
    //   date: selectedDate.date,
    // };
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
            {/* {selectedDate.length < 1 */}
            {Object.keys(selectedDate).length < 1
              ? "Please Select a Date to proceed"
              : `Confirm your booking in ${data["Hospital Name"]} at ${selectedDate.date} ${time}`}
          </Typography>
          <Button
            style={{
              display: Object.keys(selectedDate).length < 1 ? "none" : "",
            }}
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
