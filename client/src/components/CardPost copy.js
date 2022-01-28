import React from "react";
import Comments from "../components/Comments";
import NavbarOurServices from "../pages/NavbarOurServices";
import "./AboutUs.css";
import img from "../pages/aboutUs.jpg";
function AboutUs() {
  return (
    <div>
      <NavbarOurServices />
      <body>
        <div className="wrapper">
          <div className="background-containerAboutUS">
            <div className="bg-1"></div>
            <div className="bg-2"></div>
          </div>
          <div className="about-container">
            <div className="image-container">
              <img src={img} alt="" />
            </div>

            <div class="text-container">
              <p style={{ color: "indianred" }}>
                <i class="far fa-check-circle">
                  <span style={{ fontSize: "30px", fontFamily: "Helvet" }}>
                    {" "}
                    Wide variety of skills and services on offer <br />
                  </span>
                  <br />
                </i>

                <i class="far fa-check-circle">
                  <span style={{ fontSize: "30px", fontFamily: "Helvet" }}>
                    View seller profiles and feedback ratings before hiring{" "}
                    <br />
                  </span>
                  <br />
                </i>
                <i class="far fa-check-circle">
                  <span
                    style={{
                      fontSize: "30px",
                      fontFamily: "Helvet",
                    }}
                  >
                    Easy to use platform <br />
                  </span>
                  <br />
                </i>
                <i class="far fa-check-circle">
                  <span style={{ fontSize: "30px", fontFamily: "Helvet" }}>
                    that’s open to everybody Excellent rates for all types of
                    jobs
                  </span>
                </i>
              </p>
            </div>
          </div>
        </div>
      </body>
      <body className="bodyService">
        <div className="container">
          <div className="box">
            <h2>01</h2>
            <h3>Personal Details</h3>
            <p>
              Freelance values your privacy. Your data is secure at all times
              and we'll never share your personal information with third
              parties.
            </p>
          </div>
          <div className="box">
            <h2>02</h2>
            <h3>Secure Communications</h3>
            <p>
              You can safely communicate and exchange files with any Seller on
              Freelance through our secure messaging system.
            </p>
          </div>
          <div className="box">
            <h2>03</h2>
            <h3>Freelancer's Levels</h3>
            <p>
              Freelancers deliver high quality work and maintain strong ratings
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default AboutUs;
{
  isAuth ? (
    <WelcomingModal />
  ) : (
    <input style={{ color: "black", backgroundColor: "indianred" }}>
      Register
    </input>
  );
}
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../slices/userSlice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./profile.css";
import { Link } from "react-router-dom";
import Img from "./Logo.png";
import { loadPost } from "../slices/postSlice";
//***********display user or freelancer profile
const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const { userInfo } = useSelector((state) => state.user);

  return (
    <>
      <div class="header">
        <div class="navbar">
          <div className="logo">
            <Link to="/"> Go to Home Page </Link>
          </div>
        </div>

        <div class="banner">
          <div class="app-text">
            <h6 className="heading-title">Hello!</h6>
            <img
              src={userInfo.picture}
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "30px",
                boxShadow: "4px 4px 2px blue",
              }}
            />
            <h5 class="name">I'am {userInfo.name}</h5>
            <br />
            <h2>My email :{userInfo.email}</h2>
            <br />
            {userInfo.role === "freelancer" ? (
              <h2 style={{ paddingBottom: "15px" }}>
                My service :{userInfo.service}{" "}
              </h2>
            ) : null}

            <h2>My contact number :{userInfo.contact}</h2>
            <br />
            <a href="#" class="learn-more-btn">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
