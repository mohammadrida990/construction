"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderButtons from "./SliderButtons";

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-amber-400 w-full max-w-[630px] h-[200px]">
      <SwiperSlide>
        <div className="px-12 md:pl-[60px]  flex items-center gap-9 h-full">
          <div className="relative xl:flex w-[90px]  h-[90px] hidden ">
            <Image
              src="/assets/assets.jpg"
              alt=""
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              dignissimos?
            </p>

            <p className="font-semibold text-black">Lorem, ipsum dolor.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="px-12 md:pl-[60px]  flex items-center gap-9 h-full">
          <div className="relative xl:flex w-[90px]  h-[90px] hidden ">
            <Image
              src="/assets/assets.jpg"
              alt=""
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              dignissimos?
            </p>

            <p className="font-semibold text-black">Lorem, ipsum dolor.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="px-12 md:pl-[60px]  flex items-center gap-9 h-full">
          <div className="relative xl:flex w-[90px]  h-[90px] hidden ">
            <Image
              src="/assets/assets.jpg"
              alt=""
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              dignissimos?
            </p>

            <p className="font-semibold text-black">Lorem, ipsum dolor.</p>
          </div>
        </div>
      </SwiperSlide>

      <SliderButtons />
    </Swiper>
  );
};

export default Slider;
