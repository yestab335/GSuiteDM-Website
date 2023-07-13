import React from "react";
import { Link } from "react-router-dom";

// Extension Download Links
var chromeWebStore = "https://tinyurl.com/chrome-webstore-gsuitedm";

const Button = () => {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <Link
            to={chromeWebStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary js-install-extension"
          >
            Add to <span className="js-browser-name">Chrome{" "}</span>
            <span className="fw-normal">It's free</span>
          </Link>

          <div className="mt-4">
            <div className="block-browsers">
              <p className="text-muted">Works with</p>

              <ul>
                <li>
                  <Link
                    to={chromeWebStore}
                    target="_blank"
                    rel="noopener"
                    title="GSuiteDM for Chrome"
                    className="browser-chrome"
                  >
                    <span>Google Chrome</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    target="_blank"
                    rel="noopener"
                    title="GSuiteDM for Firefox"
                    className="browser-firefox"
                  >
                    <span>Mozilla Firefox</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    target="_blank"
                    rel="noopener"
                    title="GSuiteDM for Opera/GX"
                    className="browser-opera"
                  >
                    <span>Opera/GX</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
