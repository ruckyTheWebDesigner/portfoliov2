/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Testimonials from "./TestimonialsApi";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [reviews, setReviews] = useState(Testimonials);

  return (
    <div className='swiper-section'>
      <h4 className='text-center others-heading mt-5 mb-4'>
        Reviews from Satsified Clients.
      </h4>
      <hr className='swiper-underline mb-4' />
      <Swiper
        onSwiper={setSwiperRef}
        // centeredSlides={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className='mySwiper'
        spaceBetween={30}>
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <div className='swiper-slide'>
                <blockquote className='p-8'>
                  <div className='flex items-center'>
                    <img
                      src={review.image}
                      alt=''
                      className='object-cover w-16 h-16 rounded-full'
                    />

                    <div className='ml-4 text-sm'>
                      <h6 className='font-bold'>{review.name}</h6>
                      <p className='mt-1'>{review.location}</p>
                    </div>
                  </div>

                  <p className='relative mt-4 text-gray-500'>
                    <span className='text-xl'>&ldquo;</span>
                    {review.review}
                    <span className='text-xl'>&rdquo;</span>
                  </p>
                </blockquote>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
