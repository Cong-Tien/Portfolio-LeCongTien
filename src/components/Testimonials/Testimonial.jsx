import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/hutech.png";
import profilePic2 from "../../img/cyber.png";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        `Ho Chi Minh University of Teachnology xxx 
        Jun 2019 - Oct 2023 xxx Major: Information technology  xxx GPA current: 3.58/4.0`
    },
    {
      img: profilePic2,
      review:
      `Cybersoft Academy xxx Front-end Web Developer xxx
      Jun 2022 - Oct 2022 xxx  GPA: 8.5/10 xxx Knowledge: HTML, CSS, SCSS,JS, ReactJS, Typescript`,
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span style={{color:"#fca61f"}}>EDUCATION</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{fontSize:"28px", color:"black"}}>{client.review.split("xxx")[0]}</span>
                <span>{client.review.split("xxx")[1]}</span>
                <span><b>{client.review.split("xxx")[2]}</b></span>
                <span><b>{client.review.split("xxx")[3]}</b></span>
                <span><b>{client.review.split("xxx")[4]}</b></span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
