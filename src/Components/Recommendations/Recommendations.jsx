import React from "react";
import "./Recommendations.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Recommendations = () => {
  const RecommendationsArray = [
    {
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <div className="r-wrapper">
      <div className="r-heading">
        <span>Recommendations</span>
        <span> About me..</span>
        <div
          className="blur r-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur r-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {RecommendationsArray.map((Recommendation, index) => {
          return (
            <SwiperSlide>
              <div className="recommendations">
                <span>{Recommendation.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Recommendations;
