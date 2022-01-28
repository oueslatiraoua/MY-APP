/*import * as React from "react";
import PostModal from "../components/PostModal";
import { ChakraProvider } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import "./homepage.css";
import Img from "./Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { isAuth } = useSelector((state) => state.user);
  const location = useLocation();

  console.log(userInfo.role);

  return (
    <>
      <div className="navbar">
        <div className="icon">
          <img
            className="logoimage"
            src={Img}
            alt="logo"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              display: "inline-block",
              border: "1px solid indianred",
            }}
          />

          <h2 className="logo">Freelance</h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/AboutUs">ABOUT US </Link>
            </li>
            <li>
              <Link to="/OurServices">OUR SERVICES</Link>
            </li>
            {!isAuth ? (
              <>
                <li>
                  <Link to="/Login">SIGN IN</Link>
                </li>
                <li>
                  <Link to="/Register">JOIN US</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <p
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch(logout())}
                  >
                    LOGOUT
                  </p>
                </li>
                <li>
                  <Link to="/Profile">PROFILE</Link>
                </li>
              </>
            )}

            {location.pathname === "/OurServices" ? (
              userInfo.role === "freelancer" ? (
                <li>
                  <ChakraProvider>
                    <PostModal check={false} />
                  </ChakraProvider>
                </li>
              ) : null
            ) : location.pathname === "/" ? (
              <div className="search">
                <input
                  className="src"
                  type="search"
                  placeholder="Find services"
                />
                <button className="btn">
                  <i className="fas fa-search" />
                  Search
                </button>
              </div>
            ) : null}
          </ul>
        </div>
      </div>
    </>
  );
}
*/
