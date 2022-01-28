import React from "react";
import Comments from "../components/Comments";
import Navbar from "../pages/Navbar";
import "./AboutUs.css";
import img from "../pages/aboutUs.jpg";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div>
      <div className="navbarAboutUs">
        <div className="logo">
          <Link to="/OurServices"> click here to see our services {""}! </Link>
        </div>
      </div>

      <section class="home" id="home">
        <div class="home-content">
          <div class="text">
            <div
              style={{
                color: "DimGrey",
                fontSize: "35px",
                fontWeight: "600",
                marginLeft: "-3px",
                width: "500px",
                paddingTop: "400px",
                fontFamily: "Helvet",
              }}
            >
              We provide opportunities for freelancers to work remotely and to
              market their services to companies.
            </div>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <div class="content">
          <div class="title">
            <span>Our Services</span>
          </div>
          <div class="boxes">
            <div class="box">
              <i class="fas fa-desktop" style={{ fontSize: "25px" }}></i>

              <div class="topic">Web Devlopment</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div class="box">
              <i class="fas fa-paint-brush" style={{ fontSize: "25px" }}></i>

              <div class="topic">Graphic Design</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div class="box">
              <i class="fas fa-chart-line" style={{ fontSize: "25px" }}></i>

              <div class="topic">Digital Marketing</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div class="box">
              <i class="fab fa-android" style={{ fontSize: "25px" }}></i>

              <div class="topic">Icon Design</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div class="box">
              <i class="fas fa-camera-retro" style={{ fontSize: "25px" }}></i>

              <div class="topic">Photography</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div class="box">
              <i class="fas fa-tablet-alt" style={{ fontSize: "25px" }}></i>

              <div class="topic">Apps Devlopment</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="content">
          <div class="title">
            <span>Contact us</span>
          </div>
          <div class="text">
            <div class="topic">Have Any Project?</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              neque ipsum corrupti dolores, facere numquam voluptate aspernatur
              sit perferendis qui nisi modi! Recusandae deserunt consequatur
              voluptatibus alias repellendus nobis eligendi.
            </p>
            <div class="button">
              <button>Let's Chat</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
