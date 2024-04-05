import React from 'react';
import "./Spaces.css";
import "../../Common.css";
import sections from '../../../constants/data';

const Spaces = () => {
  return (
    <section className="portfolio section-p bg-dark" id="portfolio">
      <div className="containerr">
        <div className="portfolio-content">
          <div className="section-t text-center">
            <h3>Our Spaces</h3>
            <p className="text">
              From private suites to shared coworking areas, we offer a range of
              options tailored to suit your unique requirements.{" "}
            </p>
          </div>

          <div className="item-list text-center text-white grid">
            {sections.portfolio.map((portfolio) => {
              return (
                <div
                  className="item flex flex-center flex-column translate-effect"
                  key={portfolio.id}
                  style={{
                    background: `url(${portfolio.image})`,
                  }}
                >
                  <div className="item-title fs-25 fw-6">{portfolio.title}</div>
                  <div className="text text-white">{portfolio.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spaces
