"use client";

import { useRef } from "react";
import Image from "next/image";
import a1 from "../../../public/avatar-1.jpg";
import a2 from "../../../public/avatar-2.jpg";
import a3 from "../../../public/avatar-3.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CurvedArrow from "./CurvedArrow";

const testimonials = [
  {
    img: a1,
    name: "Tanya Scott",
    role: "Product Lead, Nova",
    quote:
      "Netsprin's IT consulting services have been invaluable to our digital transformation journey. Their strategic advice and hands-on support have helped us streamline our operations and adopt new technologies with ease. Their expertise is unmatched.",
  },
  {
    img: a2,
    name: "James Carter",
    role: "Founder, Spark",
    quote:
      "The team at Netsprin developed a comprehensive e-commerce platform for us, integrating seamlessly with our existing systems. Their attention to detail and commitment to delivering a high-quality product was outstanding. We highly recommend their services.",
  },
  {
    img: a3,
    name: "Maria Lopez",
    role: "Marketing Director, Flow",
    quote:
      "Netsprin provided us with an exceptional mobile application that has significantly improved our customer engagement. Their ability to understand our requirements and translate them into a user-friendly app was impressive. We look forward to collaborating.",
  },
  {
    img: a1,
    name: "Tanya Scott",
    role: "Product Lead, Nova",
    quote:
      "Netsprin's IT consulting services have been invaluable to our digital transformation journey. Their strategic advice and hands-on support have helped us streamline our operations and adopt new technologies with ease. Their expertise is unmatched.",
  },
  {
    img: a2,
    name: "Kim Karter",
    role: "Founder, Spark",
    quote:
      "The team at Netsprin developed a comprehensive e-commerce platform for us, integrating seamlessly with our existing systems. Their attention to detail and commitment to delivering a high-quality product was outstanding. We highly recommend their services.",
  },
  {
    img: a3,
    name: "James Rivera",
    role: "CEO, BrightPath",
    quote:
      "Working with Netsprin was an absolute pleasure. They understood our vision from the beginning and delivered a solution that exceeded our expectations in every way.  Their expertise is unmatched, and they deliver quality high standard custom software",
  },
];

export default function Testimonials() {
const swiperRef = useRef<SwiperClass | null>(null);


  return (
    <section id="testimonials" >
      <div className="px-8 max-sm:px-4 py-5 relative container mx-auto mt-2 max-sm:mt-0">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center gap-1">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-2 md:mb-5">
              Why Our Customers <br className="max-sm:hidden" /> Think We Are Best
            </h1>
            <button
  className="
    relative ml-3 bg-white border border-blue-400 text-blue-500
    px-5 py-1.5 rounded-full text-sm font-medium
    inline-flex items-center gap-2
    hover:bg-blue-50 transition-colors duration-200 ease-out
    max-sm:hidden

    before:content-[''] before:absolute before:top-0 before:right-[-7px]
    before:h-full before:w-full before:border-r before:border-blue-400
    before:rounded-full

    after:content-[''] after:absolute after:top-0 after:right-[-14px]
    after:h-full after:w-full after:border-r after:border-blue-400
    after:rounded-full
  "
>
  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
</button>
          </div>

          <p className="text-gray-600 text-center md:text-left text-lg md:text-2xl mt-4 md:mt-0">
            Our clients love us for our commitment to quality, innovation,
            <br className="max-sm:hidden" /> and exceptional service. Here&apos;s what they have to say..
          </p>
        </div>

      
        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <article className="rounded-xl border bg-blue-100 p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-all">
                <section className="flex justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={t.img}
                      alt={`${t.name} avatar`}
                      className="h-12 w-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold leading-tight">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-1 mb-3"
                    aria-label="5 out of 5 stars"
                  >
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <AiFillStar key={i} className="text-yellow-500 text-lg max-sm:text-[15px]" />
                    ))}
                  </div>
                </section>

                <p className="text-sm text-gray-700 flex-1">“{t.quote}”</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
          {/* Custom Nav Buttons */}
        <div className=" w-full flex justify-end gap-4 mt-6 px-4 ">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
            aria-label="Previous Slide"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
            aria-label="Next Slide"
          >
            <FaArrowRight />
          </button>
        </div>

      </div>

      <CurvedArrow />
    </section>
  );
}
