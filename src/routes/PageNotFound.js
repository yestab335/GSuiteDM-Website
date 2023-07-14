import React from "react";
import { Link } from "react-router-dom";

// Lottie For Animation Gif
import Lottie from "lottie-react";
import errorAnimation from "../assets/errorAnimation.json";

// Styles
const Styles = {
  center: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const PageNotFound = () => {
  return (
    <>
      <div style={Styles.center}>
        <Lottie
          loop={true}
          animationData={errorAnimation}
        />
        <Link to="/" role="button" className="btn btn-primary">
          Return to home page
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
