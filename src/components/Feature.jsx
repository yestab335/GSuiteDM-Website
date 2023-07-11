import React, { lazy } from "react";
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
      <div className="container">
        <div className="row home-feature">
          {/* Card 1 */}
          <div className="col-md pr-4">
            <div className="icon-box">
              <img
                src={messageIcon}
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
              Do you find yourself writing the same answers to common questions?
              Templates allow you to answer common questions in just a second.
            </p>
            <p>
              You can even use <strong>custom variables</strong> such as the
              recipient's first name to personalize your messages.
            </p>
          </div>

          {/* Image */}
          <div className="col-md pt-md-4">
            <img
              src={menuComparison}
              width={446}
              height={296}
              draggable={false}
              alt=""
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="row home-feature flex-md-row-reverse">
          <div className="col-md">
            <div className="icon-box">
              <img
                src={graphUpIcon}
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
              Templates can be associated with a keyboard shortcut. To insert a
              template, you just need to type its shortcut and press
              <strong> TAB</strong>
            </p>
            <p>
              Can&apos;t remember you shortcut? You can also insert them
              directly from your email client.
            </p>
          </div>

          {/* Image */}
          <div className="col-md d-flex">
            <img
              src={competitorComparison}
              loading={lazy}
              width={446}
              height={237}
              alt="Split screen comparison from the leading competitor and GSuiteDM"
              className="align-self-end"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="row home-feature">
          <div className="col-md">
            <div className="icon-box">
              <img src={usersIcon} width={16} height={16} draggable={false} />
            </div>

            <h2 className="content-section-heading">
              Custom and easy <br />
              options menu
            </h2>
            <p className="content-section-paragraph">
              Having team members writing the same responses is both time
              consuming and tedious. Briskine has template sharing and syncing,
              so everyone is on the same page.
            </p>
          </div>

          {/* Image */}
          <div className="col-md">
            <img
              src={optionsMenu}
              loading={lazy}
              width={446}
              height={297}
              draggable={false}
              alt="Extension Options Menu"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
