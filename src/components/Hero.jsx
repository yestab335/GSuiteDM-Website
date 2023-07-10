import React from "react";
import "./HeroStyles.css";
import GoogleDrive from "../assets/logos/drive.png"
import GoogleDocs from "../assets/logos/docs.png"
import GoogleSlides from "../assets/logos/slides.png"
import GoogleSheets from "../assets/logos/sheets.png"

const Hero = () => {
  return (
    <>
      <div className="hero pb-5 pb-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1>Write emails faster</h1>
              <p className="tagline">
                Create text templates and insert them with shortcuts
              </p>

              {/* Button To Install Extension */}
              <a
                href="https://chrome.google.com/webstore/detail/gsuitedm/obhgpfmjmefcllgmbipacahdhdkkafoc?hl=en&authuser=0"
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-lg btn-install-extension js-install-extension"
              >
                Install free extension
              </a>

              <div className="mt-5 mb-4">
                <div className="mb-4">
                  <div className="block-browsers">
                    <p className="text-muted">Works with</p>

                    <ul>
                      <li>
                        <a
                          href="https://tinyurl.com/chrome-webstore-gsuitedm"
                          target="_blank"
                          rel="noopener"
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
                          rel="noopener"
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
                          rel="noopener"
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

              {/* Image */}
              <div className="col-lg-7 d-flex justify-content-end align-items-end">
                <img src="#" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-narrow content-main">
        <div className="home-tools">
          <h2 className="mb-4">Insert templates in the tools you already use</h2>

          {/* Logo Images */}
          <img src={GoogleDrive} alt="Google Drive Logo" title="Google Drive" width={60} height={60} draggable={false} />
          <img src={GoogleDocs} alt="Google Docs Logo" title="Google Docs" width={60} height={60} draggable={false} />
          <img src={GoogleSlides} alt="Google Slides Logo" title="Google Slides" width={60} height={60} draggable={false} />
          <img src={GoogleSheets} alt="Google Sheets Logo" title="Google Sheets" width={60} height={60} draggable={false} />
        </div>
      </div>
    </>
  );
};

export default Hero;
