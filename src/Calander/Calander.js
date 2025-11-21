import Timings from "./Timings/Timings";

export default function Calander({ data, booking, setBooking }) {
  return (
    <div id="appointment-booking">
      <Timings data={data} booking={booking} setBooking={setBooking} />
    </div>
  );
}
