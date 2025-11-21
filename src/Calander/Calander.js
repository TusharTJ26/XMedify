import Timings from "./Timings/Timings";

export default function Calander({ data, booking, setBooking }) {
  return (
    <>
      <Timings data={data} booking={booking} setBooking={setBooking} />
    </>
  );
}
