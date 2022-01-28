import React, { useState, useEffect } from "react";
import NavbarOurServices from "./NavbarOurServices";
import { Link } from "react-router-dom";
import "./homepage.css";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  register as registerAction,
  registerFreelancer,
} from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import WelcomingModal from "../components/WelcomingModal";

function Register() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //UseForm for user

  const {
    register: userRegister,
    handleSubmit: handleSubmitUser,
    formState: { errors: userErrors },
    reset,
  } = useForm();
  //UseForm for freelancer

  const {
    register: freelancerRegister,
    handleSubmit: handleSubmitFreelancer,
    formState: { errors: freelancerErrors },
    reset: resetFree,
  } = useForm();

  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuth) navigate("/ourServices");
  }, [isAuth]);

  // user Action
  const [photo, setPhoto] = useState({});
  const inputInfo = (data) => {
    console.log(data);
    dispatch(
      registerAction({
        info: { ...data, contact: +data.contact, role: "user" },

        photo,
      })
    );
  };
  // freelancer Action

  const inputInfoFree = (data) => {
    console.log(data);

    dispatch(
      registerFreelancer({
        info: { ...data, contact: +data.contact, role: "freelancer" },

        photo,
      })
    );
  };

  return (
    <div>
      <NavbarOurServices />
      <div className="main"></div>
      <div>
        <div className="card">
          <div className="card-title">
            <h3>
              {toggle === false ? (
                <>
                  {" "}
                  <i
                    className="fa fa-user-circle-o"
                    aria-hidden="true"
                  ></i>{" "}
                  User
                  <span id="action_title">register</span>
                </>
              ) : (
                <>
                  {" "}
                  <i
                    className="fa fa-user-circle-o"
                    aria-hidden="true"
                  ></i>{" "}
                  Freelancer
                  <span id="action_title">register</span>
                </>
              )}
            </h3>
          </div>
          <div className="card-body">
            <div className="card-body-top">
              <button
                id="login"
                className="btn"
                name="login"
                onClick={() => {
                  setToggle(false);
                  reset();
                }}
              >
                Register as User
              </button>
              <button
                id="register"
                className="btn"
                name="register"
                onClick={() => {
                  setToggle(true);
                  resetFree();
                }}
              >
                Register as Freelancer
              </button>

              <div id="pointer-btn"></div>
            </div>
            <div className="card-body-login">
              {toggle ? (
                <form
                  id="register-form"
                  onSubmit={handleSubmitFreelancer(inputInfoFree)}
                >
                  <input
                    className="input-form"
                    type="name"
                    placeholder="Enter your full name"
                    {...freelancerRegister("name", { required: true })}
                    required
                  />
                  <br />
                  <br />

                  <label
                    className="input-form"
                    style={{
                      color: "gray",
                      opacity: "0.9",
                    }}
                  >
                    <input
                      placeholder="Enter your contact"
                      type="file"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      required
                    />
                    Profile Photo...
                  </label>
                  <br />
                  <br />
                  <input
                    className="input-form"
                    type="number"
                    placeholder="Enter your contact "
                    {...freelancerRegister("contact", { required: true })}
                    required
                  />
                  <br />
                  <br />
                  <input
                    className="input-form"
                    type="url"
                    placeholder="Download your portfolio "
                    {...freelancerRegister("portfolio")}
                    required
                  />
                  <br />
                  <br />
                  <input
                    className="input-form"
                    type="text"
                    placeholder="Enter your freelance service"
                    {...freelancerRegister("service", { required: true })}
                    required
                  />
                  <br />
                  <br />
                  <input
                    className="input-form"
                    type="email"
                    placeholder="Enter your email"
                    {...freelancerRegister("email", {
                      required: "Please put your email address",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "you should put a valid email",
                      },
                    })}
                  />
                  <br />
                  <br />
                  <input
                    className="input-form"
                    type="password"
                    placeholder="Enter your password"
                    {...freelancerRegister("password", {
                      required: "password is required",
                    })}
                  />

                  <br />
                  <br />
                  <input
                    className="submit-form"
                    type="submit"
                    value="Register"
                  />
                  <p style={{ color: "red", marginTop: "20px" }}>
                    {freelancerErrors.email && freelancerErrors.email.message}
                  </p>
                  <p style={{ color: "red", marginTop: "20px" }}>
                    {freelancerErrors.password &&
                      freelancerErrors.password.message}
                  </p>
                </form>
              ) : (
                <form id="login-form" onSubmit={handleSubmitUser(inputInfo)}>
                  <input
                    className="input-form"
                    type="text"
                    placeholder="Enter your full name"
                    {...userRegister("name", { required: true })}
                    required
                  />
                  <br />
                  <br />
                  <input
                    className="input-form"
                    type="number"
                    placeholder="Enter your contact"
                    {...userRegister("contact", { required: true })}
                    required
                  />
                  <br />
                  <br />
                  <label
                    className="input-form"
                    style={{
                      color: "gray",
                      opacity: "0.9",
                    }}
                  >
                    <input
                      placeholder="Enter your contact"
                      type="file"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      required
                    />
                    Profile Photo...
                  </label>
                  <br />
                  <br />
                  <input
                    className="input-form"
                    type="email"
                    placeholder="Enter your email"
                    {...userRegister("email", {
                      required: "Please put your email address",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "you should put a valid email",
                      },
                    })}
                  />
                  <br />
                  <br />
                  <input
                    className="input-form"
                    type="password"
                    placeholder="Enter your password"
                    {...userRegister("password", {
                      required: "password is required",
                    })}
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    className="submit-form"
                    type="submit"
                    value="Register"
                  />
                  <p style={{ color: "red", marginTop: "20px" }}>
                    {userErrors.email && userErrors.email.message}
                  </p>
                  <p style={{ color: "red", marginTop: "20px" }}>
                    {userErrors.password && userErrors.password.message}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
