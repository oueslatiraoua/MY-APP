import React from "react";
import NavbarOurServices from "./NavbarOurServices";
import { Link } from "react-router-dom";
import "./homepage.css";
import Img from "./Logo.png";
import { useSelector } from "react-redux";

const Home = () => {
  const { isAuth } = useSelector((state) => state.user);
  return (
    <>
      <NavbarOurServices />
      <div className="main">
        <div>
          <div
            class="banner-text"
            style={{
              backgroundColor: "black",
              opacity: "0.4",
              padding: "20px",
              border: "1px solid",
              borderRadius: "20px",
            }}
          >
            <h1>
              Make bright projects <span> happen</span>
            </h1>
            <br />

            <p>
              Freelance is a global marketplace connecting freelancers for their
              digital services needs.
            </p>
            <br />

            <a href="#">Contact US</a>
          </div>
        </div>
      </div>

      <footer className="endOfPage">
        <div class="footer-bottom">
          <ul class="socials">
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>

          <p>copyright &copy;2022 freelance</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
