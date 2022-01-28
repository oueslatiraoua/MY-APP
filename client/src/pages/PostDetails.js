import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./profile.css";
import { Link, useParams } from "react-router-dom";
import { loadPost } from "../slices/postSlice";
import { loadFreelancer } from "../slices/userSlice";
const PostDetails = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const { postInfo } = useSelector((state) => state.posts);
  const { freelancerInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadPost(postId));
    console.log("postId", postId);
    //dispatch(loadFreelancer(postInfo.owner._id));
  }, []);

  console.log("freelancerInfo=", freelancerInfo);
  console.log("postInfo", postInfo);
  return (
    <>
      <div class="header1">
        <div class="overlay"></div>
        <div class="navbar">
          <div class="logo">
            <Link to="/ourServices"> Search for other services </Link>
          </div>
        </div>
        <header>
          <div
            class="container"
            style={{
              width: "1300px",
              height: "100%",

              display: "flex",
            }}
          >
            <div class="content">
              <h1
                style={{
                  fontSize: "50px",
                  color: "Indianred",
                }}
              >
                Hi!
                <br /> I'am a {postInfo.title}
              </h1>
              <p
                style={{
                  color: "white",
                  lineHeight: "30px",
                  fontFamily: "Georgia, serif",
                  fontSize: "20px",
                  width: "700px",
                  height: "400px",
                  marginTop: "30px",
                  marginRight: "30px",
                }}
              >
                {postInfo.aboutTheService}
              </p>
            </div>
            <div class="image">
              <img
                style={{ width: "400px", height: "400px", marginTop: "30px" }}
                src={postInfo.image}
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

/*----------------------------------------------------------------


            <h2>{postInfo.owner && postInfo.owner.name}</h2>

            <br />
            <h2>{freelancerInfo.contact}</h2>
          </div>
        </div>*/
export default PostDetails;
