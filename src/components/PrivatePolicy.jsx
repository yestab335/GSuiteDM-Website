import React from "react";
import "../styles/PrivatePolicy.css";

const PrivatePolicy = () => {
  return (
    <>
      <div className="hero pb-5">
        <div className="container text-center">
          <h1>Privacy Policy</h1>
        </div>
      </div>

      <div className="container container-narrow content-main" markdown="1">
        <h2>Summary</h2>

        <ul>
          <li>
            We use <a href="https://analytics.google.com/">Google Analytics</a>{" "}
            to understand how users interact with our website and application.
          </li>

          <li>
            Your data (templates, email address, authentication information) is
            stored on <a href="https://cloud.google.com/">Google Cloud</a> in
            the USA.
          </li>
        </ul>

        <br />
        <hr />

        <div name='termly-embed' data-id="919173dd-98f9-4e51-8f7a-5ffecede27b7" datatype="iframe">
          <div className="Iframe-content">
            <iframe allowFullScreen='' className="Iframe-iframe" scrolling="no" src="https://www.freeprivacypolicy.com/live/ccb478cb-f3e2-43ac-bf68-2a2b04f90175" style={{ height:'8200px', width:'-webkit-fill-available', opacity: '1' }}>
              <p>Your browser does not support iframes.</p>
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivatePolicy;
