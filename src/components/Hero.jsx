import React from "react";
import "../styles/HeroStyles.css";
import { Link } from 'react-router-dom';
import Feature from '../components/Feature.jsx';
import GoogleDrive from "../assets/logos/drive.svg"
import GoogleDocs from "../assets/logos/docs.png"
import GoogleSlides from "../assets/logos/slides.png"
import GoogleSheets from "../assets/logos/sheets.png"
import demoVideo from "../assets/demo.gif";

const Hero = () => {
  // Extension Download Links
  var chromeWebStore = 'https://tinyurl.com/chrome-webstore-gsuitedm';

  return (
    <>
      <div className="hero pb-5 pb-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1>Relieve eye-strain</h1>
              <p className="tagline">
                Push a button and the theme changes from light to dark
              </p>

              {/* Button To Install Extension */}
              <Link to={chromeWebStore} target="_blank" rel="noopener" className="btn btn-primary btn-lg btn-install-extension js-install-extension">
                Install free extension
              </Link>

              <div className="mt-5 mb-4">
                <div className="mb-4">
                  <div className="block-browsers">
                    <p className="text-muted">Works with</p>

                    <ul>
                      <li>
                        <Link to={chromeWebStore} target="_blank" rel="noopener" title="GSuiteDM for Chrome" className="browser-chrome">
                          <span>Google Chrome</span>
                        </Link>
                      </li>

                      <li>
                        <Link to='' target="_blank" rel="noopener" title="GSuiteDM for Firefox" className="browser-firefox">
                          <span>Mozilla Firefox</span>
                        </Link>
                      </li>

                      <li>
                        <Link to='' target="_blank" rel="noopener" title="GSuiteDM for Opera/GX" className="browser-opera">
                          <span>Opera/GX</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="col-lg-7 d-flex justify-content-end align-items-end">
                {/* Demo Video Container */}
                <div className="video-demo video-demo-visible" aria-hidden={true} style={{ display: "flex" }}>
                  <img src={demoVideo} alt="Demo of GSuiteDM being used" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-narrow content-main">
        <div className="home-tools">
          <h2 className="mb-4">Works with the apps and tools you already use</h2>

          {/* Logo Images */}
          <img src={GoogleDrive} alt="Google Drive Logo" title="Google Drive" width={60} height={60} draggable={false} />
          <img src={GoogleDocs} alt="Google Docs Logo" title="Google Docs" width={60} height={60} draggable={false} />
          <img src={GoogleSlides} alt="Google Slides Logo" title="Google Slides" width={60} height={60} draggable={false} />
          <img src={GoogleSheets} alt="Google Sheets Logo" title="Google Sheets" width={60} height={60} draggable={false} />
        </div>

        {/* Feature Section Component */}
        <Feature />
      </div>
    </>
  );
};

export default Hero;
