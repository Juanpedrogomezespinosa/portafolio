import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification_title">Telecommunications</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2019 - 2021</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data-2">
              <div></div>

              <div className="move__right">
                <span className="qualification__rounder"></span>
                <span className="qualification__line-2"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification__subtitle">
                  Spain - Bootcamp
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2022 - 2023</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
