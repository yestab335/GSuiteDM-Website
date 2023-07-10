import React from "react";

const Button = () => {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary js-install-extension"
          >
            Add to <span className="js-browser-name">Chrome </span>
            <span className="fw-normal">It's free</span>
          </a>

          <div className="mt-4">
            <div className="block-browsers">
              <p className="text-muted">Works with</p>

              <ul>
                <li>
                  <a
                    href="https://tinyurl.com/chrome-webstore-gsuitedm"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GSuiteDM for Chrome"
                    className="browser-chrome"
                  >
                    <span>Google Chrome</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#FIREFOX STORE EXTENSION LINK HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GSuiteDM for Firefox"
                    className="browser-firefox"
                  >
                    <span>Mozilla Firefox</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#OPERA STORE EXTENSION LINK HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GSuiteDM for Opera/GX"
                    className="browser-opera"
                  >
                    <span>Opera/GX</span>
                  </a>
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
