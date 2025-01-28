import React, { useEffect, useRef,useState } from "react";
import "./Insights.css";
import Banner_image from "../../assets/banner/banner-img.jpg";
import AIImg from "../../assets/banner/AI-thinking.jpg";
import bulbImg from "../../assets/banner/bulb.jpg";
import intelImg from "../../assets/banner/intel.jpg";
import troubImg from "../../assets/banner/trouble.jpg";

const CardSlider = () => {
  const slidesRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slides = slidesRef.current;
    let index = 0;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.children.length);
    }, 4000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slides = slidesRef.current;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);
  const prevSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + slidesRef.current.children.length) %
        slidesRef.current.children.length
    );
  };
  const nextSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex + 1) % slidesRef.current.children.length
    );
  };

  return (
    <>
      <section id="insights">
        <div className="slider">
          <div className="slides" ref={slidesRef}>
            <div className="slide">
              <div className="card">
                <h3>7 Troubling Tech Trends of 2024</h3>
                <img src={troubImg} alt="image" width="350px"></img>

                <p>
                  In the ever-evolving world of technology, 2024 brought some
                  exciting innovations alongside an alarming number of trends
                  that expose the pitfalls of our current tech culture...
                </p>
                <div className="btn_wrapper">
                  <button type="submit" className="btn">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="card">
                <h3>
                  Intel vs. AMD, Nvidia, Qualcomm: What the Hell Happened?
                </h3>
                <img src={intelImg} alt="image" width="350px"></img>

                <p>
                  In the 1990s, Intel was a marketing powerhouse under the
                  marketing leadership of Dennis Carter and the brilliant
                  leadership of Andy Grove...
                </p>
                <div className="btn_wrapper">
                  <button type="submit" className="btn">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="card">
                <h3>GEN AI Ads Open New Doors for Brand Engagement</h3>
                <img src={bulbImg} alt="image" width="350px"></img>

                <p>
                  GMS, an AI-driven communications solutions company for global
                  enterprises and mobile network operators (MNOs), launched
                  Generative Response Ads in November....
                </p>
                <div className="btn_wrapper">
                  <button type="submit" className="btn">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="card">
                <h3>AI Dominates 2025 Cybersecurity Predictions</h3>
                <img src={AIImg} alt="image" width="350px"></img>
                <p>
                  When it comes to cybersecurity in 2025, artificial
                  intelligence is top of mind for many analysts and
                  professionals...
                </p>
                <div className="btn_wrapper">
                  <button type="submit" className="btn">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="prev" onClick={prevSlide}>
            ❮
          </button>{" "}
          <button className="next" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section>
    </>
  );
};

export default CardSlider;
