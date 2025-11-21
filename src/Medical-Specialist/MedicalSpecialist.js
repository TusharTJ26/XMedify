import "./MedicalSpecialist.css";
import SCarouselItem from "./Specialist-Carousel/Specialist-Carousel-Item";

// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MedicalSpecialist() {
  return (
    <div className="specialist-container">
      <div className="specialist-heading">Our Medical Specialist</div>
      <div style={{ width: "1440px", overflow: "hidden" }}>
        <Swiper
          style={{ height: "550px" }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          // spaceBetween={30}
          // slidesPerView={1}
          // autoplay={{
          //   delay: 3000, // time between slides in ms
          //   disableOnInteraction: false, // keeps autoplay even after user clicks
          // }}
        >
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "1600px",
                  marginLeft: "-15px", // or whatever is larger than the slide
                }}
              >
                <SCarouselItem />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "1600px",
                  marginLeft: "-200px", // or whatever is larger than the slide
                }}
              >
                <SCarouselItem />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "1600px",
                  marginLeft: "-390px", // or whatever is larger than the slide
                }}
              >
                <SCarouselItem />
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <SCarouselItem />
          </SwiperSlide>
          <SwiperSlide>
            <SCarouselItem />
          </SwiperSlide>
          <SwiperSlide>
            <SCarouselItem />
          </SwiperSlide> */}
        </Swiper>

        {/* <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ marginLeft: "-15px" }}>
              <SCarouselItem />
            </div>
            <div className="swiper-slide" style={{ marginLeft: "-200px" }}>
              <SCarouselItem />
            </div>
            <div className="swiper-slide" style={{ marginLeft: "-390px" }}>
              <SCarouselItem />
            </div>
          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <div className="swiper-scrollbar"></div>
        </div> */}
      </div>

      {/* <div
        id="medical-carouselIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: "1440px" }}
      >
        <div className="carousel-indicators custom-indicators">
          <button
            type="button"
            data-bs-target="#medical-carouselIndicators"
            data-bs-slide-to="0"
          ></button>

          <button
            type="button"
            data-bs-target="#medical-carouselIndicators"
            data-bs-slide-to="1"
            className="active"
            aria-current="true"
          ></button>

          <button
            type="button"
            data-bs-target="#medical-carouselIndicators"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item" style={{ marginLeft: "-15px" }}>
            <SCarouselItem />
          </div>

          <div
            className="carousel-item active"
            style={{ marginLeft: "-200px" }}
          >
            <SCarouselItem />
          </div>

          <div className="carousel-item" style={{ marginLeft: "-390px" }}>
            <SCarouselItem />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#medical-carouselIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#medical-carouselIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
}
