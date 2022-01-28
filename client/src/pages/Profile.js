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
        <div style={{ paddingTop: "150px" }}>
          <section class="about" id="about">
            <div class="content">
              <div class="title">
                <span
                  style={{
                    color: "white",
                  }}
                >
                  About Me
                </span>
              </div>
              <div
                class="about-details "
                style={{
                  backgroundColor: "black",
                  width: "70%",
                  opacity: "0.8",
                }}
              >
                <div class="left">
                  <img src={userInfo.picture} alt="" />
                </div>
                <div class="right">
                  <p
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    <div
                      class="name"
                      style={{
                        fontSize: "30px",
                        color: "white",
                      }}
                    >
                      Hi {""}!{""}
                      {""}I {""} 'am {userInfo.name}
                    </div>
                    <br />
                    <h2
                      class="name"
                      style={{
                        color: "white",
                      }}
                    >
                      <span style={{ color: "burlywood " }}>
                        My email is: {""}
                      </span>
                      {userInfo.email}
                    </h2>
                    <br />
                    <h2>
                      <span style={{ color: "burlywood " }}>
                        My phone number is: {""}
                        {userInfo.contact}
                      </span>
                    </h2>
                    <br />

                    <div>
                      {" "}
                      {userInfo.role === "freelancer" ? (
                        <h2
                          style={{ paddingBottom: "15px", color: "burlywood " }}
                        >
                          {userInfo.service} is my passion{" "}
                        </h2>
                      ) : null}
                    </div>
                  </p>
                  <div class="button">
                    <button>Download CV</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
