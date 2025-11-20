import "./Offer.css";

// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OfferItem from "./OfferItem";
export default function Offer() {
  return (
    <div className="offer-section">
      <Swiper
        style={{ height: "250px" }}
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        // spaceBetween={30}
        // slidesPerView={1}
        // autoplay={{
        //   delay: 3000, // time between slides in ms
        //   disableOnInteraction: false, // keeps autoplay even after user clicks
        // }}
      >
        <SwiperSlide>
          <OfferItem />
        </SwiperSlide>
        <SwiperSlide>
          <OfferItem />
        </SwiperSlide>
        <SwiperSlide>
          <OfferItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
