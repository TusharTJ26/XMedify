import Confirm from "../ConfirmationForm";
import "./Timings.css";
import { useState } from "react";
export default function Timings({ data, booking, setBooking }) {
  const morning = ["11:30 AM"];
  const afternoon = ["12:00 PM", "12:30 PM", "1:30 PM", "2:00 PM", "2:30 PM"];
  const evening = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"];
  const [selectedTime, setSelectedTime] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  //   const handleBooking = (time) => {
  //     // console.log({ data }, { time });
  //     <Confirm data={data} time={time} open={true} />;
  //   };
  const handleBookingForm = (time) => {
    setSelectedTime(time);
    setModalOpen(true);
  };

  return (
    <div className="time-container">
      <div className="time-row">
        <p className="day-period">Morning</p>
        {morning.map((time) => (
          <span
            key={time}
            className="time"
            onClick={() => {
              handleBookingForm(time);
            }}
          >
            {time}
          </span>
        ))}
      </div>
      <div className="time-row">
        <p className="day-period">Afternoon</p>
        {afternoon.map((time) => (
          <span
            key={time}
            className="time"
            onClick={() => {
              handleBookingForm(time);
            }}
          >
            {time}
          </span>
        ))}
      </div>
      <div className="time-row">
        <p className="day-period">Evening</p>
        {evening.map((time) => (
          <span
            key={time}
            className="time"
            onClick={() => {
              handleBookingForm(time);
            }}
          >
            {time}
          </span>
        ))}
      </div>
      {/* Confirm Modal */}
      {selectedTime && (
        <Confirm
          data={data}
          time={selectedTime}
          open={modalOpen}
          booking={booking}
          setBooking={setBooking}
          handleClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
