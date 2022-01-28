import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import PostDetails from "./pages/PostDetails";

//Routes and Navbar
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/pricing/:postId" element={<Pricing />} />
        <Route path="/postDetails/:postId" element={<PostDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
