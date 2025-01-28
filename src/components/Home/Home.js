import React from "react";
import "./Home.css";
import Banner_image from "../../assets/banner/banner-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faShieldHalved,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const fachartIcon = <FontAwesomeIcon icon={faChartLine} />;
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />;
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />;

  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">
                WE PROMOTE YOUR<span> BUSINESS</span>
              </h3>
              <p>
                New company that provides expertise in search marketing
                solutions for businesses worldwide, including website promotion,
                online advertising, and search engine optimization techniques to
                improve its clients’ positioning in search engines.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={Banner_image} alt="Banner_image" />
              </div>
              <div className="baner_style_1">
                {fachartIcon}
                <h4>Business Analysis</h4>
              </div>
              <div className="baner_style_1 baner_style_2">
                {faShieldIcon}
                <h4>99.8% Success</h4>
              </div>
              <div className="baner_style_1 baner_style_3">
                {faChartAreaIcon}
                <h4>Strategy</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
