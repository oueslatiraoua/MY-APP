import React from "react";
import "./check-circle.svg";
import "./x-square.svg";
import "./Pricing.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { loadPost } from "../slices/postSlice";

const Pricing = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const { postInfo } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(loadPost(postId));
    console.log("postId", postId);
  }, []);
  return (
    <div>
      <div>
        <Link to="/OurServices">
          {" "}
          <i
            class="fas fa-arrow-left"
            style={{ fontSize: "25px", margin: "20px" }}
          ></i>
        </Link>
      </div>
      <article className="freelancerPrices">
        {postInfo.packages &&
          postInfo.packages.map((el) => (
            <div key={el._id}>
              <section class="price-comparison">
                <div class="price-column">
                  <div class="price-header">
                    <div class="price">
                      <div class="dollar-sign">dt</div>
                      {el?.price}
                      <div class="per-month">/mo</div>
                    </div>
                    <div class="plan-name">{el?.serviceTier}</div>
                  </div>
                  <div class="divider"></div>
                  <div class="feature">
                    <img src="check-circle.svg" />
                    {el?.description}
                  </div>
                  <button class="cta">Start Today</button>
                </div>
              </section>
            </div>
          ))}
      </article>
    </div>
  );
};

export default Pricing;
