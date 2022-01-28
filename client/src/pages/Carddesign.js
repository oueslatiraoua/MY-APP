import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../slices/postSlice";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/theme";

//import Card from "@material-ui/core/Card";
//import CardHeader from "@material-ui/core/CardHeader";

import "./Carddesign.css";
import CardPost from "../components/CardPost";
import Pricing from "./Pricing";

const Carddesign = () => {
  const { loading, postList, errors } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  //***********map cards info
  return (
    <div className="container">
      {postList &&
        postList.map((post) => (
          <>
            <ThemeProvider theme={theme}>
              <CardPost post={post} />
            </ThemeProvider>
          </>
        ))}
    </div>
  );
};

export default Carddesign;
