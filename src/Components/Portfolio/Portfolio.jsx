import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
import KLBags from "../../img/KLBags.png";
import TB1 from "../../img/TB1.png";
import TB2 from "../../img/TB2.png";
import Movie from "../../img/Movie.png";
import "swiper/css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={KLBags} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TB1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TB2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Movie} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
