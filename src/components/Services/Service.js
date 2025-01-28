import React from "react";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChartBar,
  faCopy,
  faMarker,
  faUserGear,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

export default function Service() {
  const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />;
  const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
  const faCopyIcon = <FontAwesomeIcon icon={faCopy} />;
  const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />;
  const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />;
  const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />;

  return (
    <>
      <div id="service">
        <div className="container">
          <div className="title_head">
            <h3>Experience Top-Notch Service</h3>
            <p>
              Connects you with innovative solutions and expert insights to help
              you stay ahead in a constantly evolving world with Unmatched
              Expertise
            </p>
          </div>

          <div className="service_wrapper">
            <div className="serviceBox">
              <div className="service_icon bluei">{faLaptopCodeIcon}</div>
              <h4 className="number">01</h4>
              <div className="serv_content">
                <h5>Cloud & Infrastructure</h5>
                <p>
                  Empower your business with scalable, secure, and robust cloud
                  solutions. Transform your IT landscape with cutting-edge
                  infrastructure.
                </p>
                <a href="/" className="readmore">
                  Read More
                </a>
              </div>
            </div>
            <div className="serviceBox">
              <div className="service_icon">{faChartBarIcon}</div>
              <h4 className="number">02</h4>
              <div className="serv_content">
                <h5>Business strategy</h5>
                <p>
                  Drive success with tailored strategies that align with your
                  business goals. Unlock your potential with our expert
                  strategic planning.
                </p>
                <a href="/" className="readmore">
                  Read More
                </a>
              </div>
            </div>
            <div className="serviceBox">
              <div className="service_icon greeni">{faCopyIcon}</div>
              <h4 className="number">03</h4>
              <div className="serv_content">
                <h5>Cyber Security</h5>
                <p>
                  Fortify your defenses with our comprehensive cyber security
                  services. Safeguard your business from cyber threats and
                  vulnerabilities.
                </p>
                <a href="/" className="readmore">
                  Read More
                </a>
              </div>
            </div>
            <div className="serviceBox">
              <div className="service_icon">{faMarkerIcon}</div>
              <h4 className="number">04</h4>
              <div className="serv_content">
                <h5>Consulting</h5>
                <p>
                  Your business must be ready for the future and our consulting
                  services will help you get there. With our industry expertise,
                  reimagine your organization for bigger vision.
                </p>
                <a href="/" className="readmore">
                  Read More
                </a>
              </div>
            </div>
            <div className="serviceBox">
              <div className="service_icon greeni">{faUserGearIcon}</div>
              <h4 className="number">05</h4>
              <div className="serv_content">
                <h5>Customer Focus</h5>
                <p>
                  Delivering an outstanding customer experience through our
                  dedicated support and innovative strategies for long lasting
                  relationships with a customer-centric approach.
                </p>
                <a href="/" className="readmore">
                  Read More
                </a>
              </div>
            </div>
            <div className="serviceBox">
              <div className="service_icon bluei">{faCoinsIcon}</div>
              <h4 className="number">06</h4>
              <div className="serv_content">
                <h5>Solution Oriented</h5>
                <p>
                  Empowering your business with our customized solutions to
                  overcome challenges, expertise and innovation at your door.
                  Navigate complexities with confidence and precision
                </p>
                <a href="/" className="readmore">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
