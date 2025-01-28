import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function Navbar() {
  //mobile menu
  const [sidenavbar, setSidenav] = useState(false);

  //desktop menu
  const [sticky, setSticky] = useState(false);

  const element = <FontAwesomeIcon icon={faBars} />;

  //sidenav
  const sidenavshow = () => {
    setSidenav(!sidenavbar);
  };

  useEffect(() => {
    const handlescroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  });

  return (
    <>
      <header id="site_header" className={`${sticky ? "sticky" : ""}`}>
        <div className="container">
          <nav className="navbar" id="Navbar">
            <div className="navbar-brand">
              <a href="/">
                <img src={logo} alt="logo"></img>
              </a>
            </div>
            <div className="navbar_toggler" onClick={sidenavshow}>
              {element}
            </div>
            <div
              className={`menu_items ${sidenavbar === true ? "active" : " "}`}
            >
              <ul>
                <li>
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="event" spy={true} smooth={true}>
                    Events
                  </Link>
                </li>

                <li>
                  <Link to="service" spy={true} smooth={true}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="insights" spy={true} smooth={true}>
                    Insights
                  </Link>
                </li>

                <li>
                  <Link to="contact" spy={true} smooth={true}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
