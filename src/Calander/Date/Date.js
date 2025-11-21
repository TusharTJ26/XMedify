import "./Date.css";
import Timings from "../Timings/Timings";
import React, { useState, useEffect } from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DateSelector = ({ data, booking, setBooking }) => {
  const [selectedDate, setSelectedDate] = useState({});
  const [dates, setDates] = useState([]);
  //   const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState();
  let firstHalf = [];
  let secondHalf = [];
  if (dates.length > 1) {
    firstHalf = dates.slice(0, 3);
    secondHalf = dates.slice(3, 6);
  }
  const handleDate = (d) => {
    setSelectedDate(d);
  };
  console.log(selectedDate);
  useEffect(() => {
    const today = new Date();
    const options = { weekday: "short", day: "numeric", month: "short" };

    const generateDates = Array.from({ length: 6 }, (_, i) => {
      //   const date = new Date(today);
      //   date.setDate(today.getDate() + i);
      //   return {
      //     // label:
      //     //   i === 0
      //     //     ? "Today"
      //     //     : i === 1
      //     //     ? "Tomorrow"
      //     //     : date.toLocaleDateString("en-IN", options),
      //     label:
      //       i === 0
      //         ? "Today"
      //         : i === 1
      //         ? "Tomorrow"
      //         : date.toLocaleDateString("en-GB", {
      //             day: "numeric",
      //             month: "long",
      //             year: "numeric",
      //           }),
      //     date: date.toISOString().split("T")[0],
      //     slots: Math.floor(Math.random() * 20) + 1, // Replace with API call
      //   };
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      return {
        label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : formattedDate,
        date: formattedDate, // <-- now matches your desired format
        slots: Math.floor(Math.random() * 20) + 1,
      };
    });

    setDates(generateDates);
  }, []);

  return (
    <div>
      <div className="date-selector">
        {/* {dates.map((d, idx) => (
        <div key={idx} className="date-card">
          <div className="label">{d.label}</div>
          <div className="slots">{d.slots} Slots Available</div>
        </div>
      ))} */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          // pagination={{ clickable: true }}
          // spaceBetween={30}
          slidesPerView={1}
          // autoplay={{
          //   delay: 3000, // time between slides in ms
          //   disableOnInteraction: false, // keeps autoplay even after user clicks
          // }}
        >
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="date-card-holder"
              style={{ width: "38.44rem", height: "3.64rem" }}
            >
              {firstHalf.map((d, idx) => (
                <div
                  key={idx}
                  className="date-card"
                  style={{
                    //   borderBottomColor: active
                    //     ? "rgba(1, 164, 0, 1)"
                    //     : "rgba(240, 240, 245, 1)",
                    borderBottomColor:
                      activeIndex == idx
                        ? "rgba(1, 164, 0, 1)"
                        : "rgba(240, 240, 245, 1)",
                  }}
                  onClick={() => {
                    setActiveIndex(idx);
                    handleDate(d);
                  }}
                >
                  <div className="label">{d.label}</div>
                  <div className="slots">{d.slots} Slots Available</div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <div className="date-card-holder">
              {secondHalf.map((d, idx) => (
                <div
                  key={idx + 3}
                  className="date-card"
                  style={{
                    borderBottomColor:
                      activeIndex == idx + 3
                        ? "rgba(1, 164, 0, 1)"
                        : "rgba(240, 240, 245, 1)",
                  }}
                  onClick={() => {
                    setActiveIndex(idx + 3);
                    handleDate(d);
                  }}
                >
                  <div className="label">{d.label}</div>
                  <div className="slots">{d.slots} Slots Available</div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Timings
        data={data}
        booking={booking}
        setBooking={setBooking}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default DateSelector;
