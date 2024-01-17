import React from "react";
import "./portfolio.css";
import { ProjectsData } from "./ProjectsData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Portfolio = () => {
  return (
    <section className="portfolio container section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My personel projects</span>

      <Swiper
        className="portfolio__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {ProjectsData.map(({ id, image, title, link }) => {
          return (
            <SwiperSlide className="portfolio__card" key={id}>
              <img src={image} alt="" className="portfolio__img" />

              <h3 className="portfolio__name">{title}</h3>
              <a
                href={link}
                className="portfolio__description home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
