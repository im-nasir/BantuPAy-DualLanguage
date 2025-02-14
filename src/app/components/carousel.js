"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/carousel.png",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel9.png",
  "/carousel5.png",
  "/carousel6.png",
  "/carousel7.png",
  "/carousel8.png",
];

export default function FullWidthCarousel() {
  return (
    <div className="w-full  bg-[#F7F0E7]">
        <div className=" text-center pt-8 ">
            <h1 className=" text-5xl font-bold">App Screenshots</h1>
            <p className=" text-md font-medium text-gray-500 ">What’s Inside The App? </p>
            <p className=" text-md font-medium text-gray-500 ">See For Yourself!</p>
        </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        className="bg-transparent"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center bg-transparent">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-[90%] md:w-[85%] lg:w-[100%] xl:w-[100%] 
              transition-transform duration-300 ease-in-out hover:scale-[110%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
