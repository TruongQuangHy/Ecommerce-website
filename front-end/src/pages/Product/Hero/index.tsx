import React from "react";
import { imgData } from "../../../data/navItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="container p-4 mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
      <div className="grid justify-items-center my-10">
        <h1 className="font-Noto custom-gradient-text text-3xl font-bold text-center w-3/5">
          The Perfect Product for Your Needs Buy Now and Experience the
          Difference!
        </h1>
        <p className="font-Noto text-white/70 w-4/5 text-center my-4">
          The ideal solution to optimize performance and enhance your
          experience. Don’t miss out on owning a top-quality product with
          special offers today!
        </p>
      </div>
      <div className="mb-16">
        <Swiper
          effect={"coverflow"}
          slidesPerView={5}
          spaceBetween={-30}
          coverflowEffect={{
            rotate: 35,
            stretch: 40,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {imgData.map(({ img }, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center overflow-hidden group"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={img}
                  className="absolute w-full h-auto object-cover transform transition-transform duration-1000 ease-in-out group-hover:-translate-y-1/2 group-hover:duration-[4000ms]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
