import DateSelector from "./Date/Date";
import Timings from "./Timings/Timings";

export default function Calander({ data, booking, setBooking }) {
  return (
    <div
      id="appointment-booking"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      <DateSelector data={data} booking={booking} setBooking={setBooking} />
      {/* <Timings data={data} booking={booking} setBooking={setBooking} /> */}
    </div>
  );
}
