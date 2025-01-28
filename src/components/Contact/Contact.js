import React from "react";
import "./Contact.css";
import contImage from "../../assets/contact/contact.jpg";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="cont_wrapper">
            <div className="cont_col">
              <div className="cont_img">
                <img src={contImage} alt="contact"></img>
              </div>
            </div>
            <div className="cont_col">
              <h2>Contact Us</h2>
              <h4 className="heading">(*) Asterisk denotes mandatory fields</h4>
              <form>
                <div className="input_wrapper">
                  <input
                    type="text"
                    className="fcontrol"
                    autoComplete="off"
                    placeholder="First Name*"
                  ></input>
                </div>
                <div className="input_wrapper">
                  <input
                    type="text"
                    className="fcontrol"
                    autoComplete="off"
                    placeholder="Last Name*"
                  ></input>
                </div>
                <div className="input_wrapper">
                  <input
                    type="email"
                    className="fcontrol"
                    autoComplete="off"
                    placeholder="Email*"
                    required
                  ></input>
                </div>
                <div className="input_wrapper">
                  <input
                    type="text"
                    className="fcontrol"
                    autoComplete="off"
                    placeholder="Phone number (Optional)"
                    required
                    pattern="\d{10}"
                  ></input>
                </div>

                <div className="input_wrapper">
                  <input
                    type="text"
                    className="fcontrol"
                    autoComplete="off"
                    placeholder="Company"
                  ></input>
                </div>

                <div className="input_wrapper">
                  <textarea placeholder="How can we help you"></textarea>
                </div>

                <div className="btn_wrapper">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
