import React from "react";
import "./Event.css";
import imgEvent from "../../assets/event/eventt.jpg";
import confImg from "../../assets/event/confimg.jpg";
import confImg2 from "../../assets/event/conf1.jpg";

export default function Event() {
  return (
    <div>
      <div className="event">
        <div className="eventcontent">
          <h1>Hear from our experts at events all over the world</h1>
        </div>
        <div className="eventcontent">
          <div className="cont_img">
            <img src={imgEvent} alt="event"></img>
          </div>
        </div>
      </div>
          <h1>Upcoming events of 2025</h1>
         

      <div className="eventdetail">
        <div className="detail">
          <img src={confImg} alt="conference" className="image" />

          <div className="content">
            <h4 className="det">Annual FY25 Conference</h4>
            <p>
              Go beyond business to navigate AI’s evolution and shape its future
              – for all.
              <br />
              Jan 30-Feb 5, 2025 (Online)
            </p>
          </div>
        </div>
        <div className="detail">
          <img src={confImg2} alt="conference" className="image" />

          <div className="content">
            <h4 className="det">Cyber Security-AI Session</h4>
            <p>
              Role & Aspects of CyberSecurity in AI's throughout journey Session
              <br />
              Feb 15, 2025 (Online) &
              <br />
              In-Person (India)
            </p>
          </div>
        </div>
      </div>
      {/* <div class="cont">
        <img src={confImg} alt="Description" class="image" />
        <div class="content">
          <p>This is the content below </p>
        </div>
      </div> */}
    </div>
  );
}
