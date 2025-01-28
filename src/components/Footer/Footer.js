import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const element = <FontAwesomeIcon icon={faArrowAltCircleUp} />;
  const [isVisible, setVisible] = useState(false);
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenScroll = () => {
    let heighthide = 250;
    const windowscroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    windowscroll > heighthide ? setVisible(true) : setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  });
  return (
    <div>
      <section className="container">
        <footer className="footer">
          <p>
            @ All rights reserved 2025 Designed by{" "}
            <a href="/">Samruddhi Desai</a>
          </p>
        </footer>
      </section>
      {isVisible && (
        <div className="scrolltop" onClick={scrolltoTop}>
          {element}
        </div>
      )}
    </div>
  );
}
