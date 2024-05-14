import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 month working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">+ 10 projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-bulb about__icon"></i>
        <h3 className="about__title">Creativity</h3>
        <span className="about__subtitle">The best solutions</span>
      </div>
    </div>
  );
};

export default Info;
