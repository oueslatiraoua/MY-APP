import "./homepage.css";

import Carddesign from "./Carddesign";
import PostModal from "../components/PostModal";
import { ChakraProvider } from "@chakra-ui/react";
import NavbarOurServices from "./NavbarOurServices";

const OurServices = () => {
  return (
    <>
      <NavbarOurServices style={{ backgroundColor: "#1d1611" }} />
      <div className="mainCard">
        <div>
          <Carddesign />
        </div>
      </div>
    </>
  );
};
export default OurServices;
