import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ab_image from "../../assets/about/about_img.jpg";

export default function About() {
  const faBusinessTimeIcon = <FontAwesomeIcon icon={faBusinessTime} />;
  const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />;
  const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />;
  const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />;
  const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />;
  const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="title_headline">
            <h3>We Provide Great Exclusive Ideas!!</h3>
            <p>
              Unlock a world of possibilities with our curated collection of
              brilliant ideas designed to transform your life and business
            </p>
          </div>
          <div className="about_box_wrapper">
            <div className="about_box">
              <div className="about_icon">{faBusinessTimeIcon}</div>
              <div className="about_content">
                <h5>Development</h5>
                <p>
                  Crafting the website's functionality, ensuring it is
                  responsive, and that its codebase is robust to handle user
                  interactions efficiently.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon greeni">{faChartPieIcon}</div>
              <div className="about_content">
                <h5>Integration</h5>
                <p>
                  Seamlessly connecting third-party services, such as payment
                  gateways and CRM systems, to enhance the website's
                  capabilities and user experience.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon bluei">{faBusinessTimeIcon}</div>
              <div className="about_content">
                <h5>Branding</h5>
                <p>
                  Establishing a unique visual identity and consistent messaging
                  to ensure the website reflects the company's values and
                  resonates with its target audiences.
                </p>
              </div>
            </div>
          </div>
          <div className="box_details">
            <div className="about_col">
              <div className="about_image">
                <img src={ab_image} alt="about"></img>
              </div>

              <div className="imginfo">
                <h6 className="imginfo_title">GET PRICE QUOTATION TODAY!!</h6>
                <p>
                  "Experience Excellence Today" ,
                  <br />
                  "Expert Services at Your Fingertips"
                  <br />
                  Call Us Now!!
                </p>
                <a href="/">{faPhoneIcon} 1100-125-212</a>
              </div>
            </div>

            <div className="about_col space">
              <h3>Expand your business, while we provide Services</h3>
              <p>
                We can provide you best services to enhance your product at high
                level.
              </p>
              <div className="gridinfo">
                <div className="icon">{faUserClockIcon}</div>
                <div className="detail">
                  <h4>In minutes business in your hands</h4>
                  <p>
                    Our Focus on your product, will deifinitely expand your
                    business.
                  </p>
                </div>
              </div>
              <div className="gridinfo">
                <div className="icon">{faHouseLaptopIcon}</div>
                <div className="detail">
                  <h4>Your Product, Our Skills</h4>
                  <p>
                    Start your product professional journey with Us, we will
                    surely expedite your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
