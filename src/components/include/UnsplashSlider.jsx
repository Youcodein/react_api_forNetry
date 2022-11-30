import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function UnsplashRandom({ random }) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${random.id}`}>
        <img src={random.urls.full + "&w=500&h=600&fit=crop"} alt={random.urls.alt_description} />
      </a>
    </li>
  );
}

const UnsplashSlider = ({ random }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <section className="cont__usplash">
          <div className="container">
            <div className="usplash__random">
              <ul>
                {random.map((random, index) => (
                  <SwiperSlide>
                    <UnsplashRandom key={index} random={random} />
                  </SwiperSlide>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Swiper>
    </>
  );
};

export default UnsplashSlider;