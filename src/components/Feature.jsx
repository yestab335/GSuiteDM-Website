import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./FeatureStyles.css";
import messageIcon from "../assets/message.svg";
import graphUpIcon from "../assets/graph-up.svg";
import usersIcon from "../assets/users.svg";
import menuComparison from "../assets/feature/menus.jpg";
import competitorComparison from "../assets/feature/comparison.png";
import optionsMenu from "../assets/feature/optionsMenu.png";

const Feature = () => {
  return (
    <>
      <div className="row home-feature">
        {/* Card 1 */}
        <div className="col-md pr-4">
          <div className="icon-box">
            <img
              src={messageIcon}
              alt="An svg image of two chat message blocks layered"
              width={16}
              height={16}
              aria-hidden="true"
              draggable={false}
            />
          </div>

          <h2>
            Each aspect taken <br />
            into consideration
          </h2>
          <p>
            Are you experiencing discomfort while squinting at a bright white
            screen during nighttime? Our inverted color scheme provides a
            solution, enabling you to maintain your workflow seamlessly in
            darker environments or at night.
          </p>
          <p>
            We have carefully considered the convenience of{" "}
            <strong>popup menus</strong>, including popular options like copy,
            cut, and paste accessible through right-click functionality.
          </p>
        </div>

        {/* Image */}
        <div className="col-md pt-md-4">
          <LazyLoadImage
            src={menuComparison}
            alt="Display of the browser extension's options menu"
            width={446}
            height={296}
            draggable={false}
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="row home-feature flex-md-row-reverse">
        <div className="col-md">
          <div className="icon-box">
            <img
              src={graphUpIcon}
              alt="An svg on an increasing stock graph with an arrow pointing up"
              width={24}
              height={24}
              aria-hidden={true}
              draggable={false}
            />
          </div>

          <h2>
            Better than the <br />
            leading competitor
          </h2>
          <p>
            Color scheme can be associated with custom css attributes. To insert
            a custom theme, you just need to go to the extension options menu
            and press <strong> CUSTOM</strong>
          </p>
          <p>
            Prefer to maintain the original color of your document page? No
            worries! You have the option to customize only the background color
            while keeping the document page itself in crisp white. This allows
            you to personalize your reading or working experience without
            altering the content's appearance.
          </p>
        </div>

        {/* Image */}
        <div className="col-md d-flex">
          <LazyLoadImage
            src={competitorComparison}
            alt="Split screen comparison from the leading competitor and GSuiteDM"
            width={446}
            height={237}
            draggable={false}
            className="align-self-end"
          />
        </div>
      </div>

      {/* Card 3 */}
      <div className="row home-feature">
        <div className="col-md">
          <div className="icon-box">
            <img
              src={usersIcon}
              alt="An svg icon of a person"
              width={16}
              height={16}
              draggable={false}
            />
          </div>

          <h2 className="content-section-heading">
            Custom and easy <br />
            options menu
          </h2>
          <p className="content-section-paragraph">
            Transform your browsing experience with our exceptional browser
            extension. Enjoy the power of a fully customizable and user-friendly
            options menu, giving you the freedom to personalize every aspect
            effortlessly. Install now and unlock a new level of convenience and
            control.
          </p>
        </div>

        {/* Image */}
        <div className="col-md">
          <LazyLoadImage
            src={optionsMenu}
            alt="Extension Options Menu"
            width={446}
            height={297}
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default Feature;
