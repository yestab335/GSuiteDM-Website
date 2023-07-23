import React from "react";
import "../styles/PrivatePolicy.css";

const PrivatePolicy = () => {
  return (
    <>
      <div className="hero pb-5">
        <div className="container text-center">
          <h1> Privacy Policy </h1>
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

          <li>
            Payment details are handled by
            <a href="https://stripe.com/">{" "}Stripe</a>. We do not store payment
            details with the rest of your data.
          </li>
        </ul>

        <br />
        <hr />

        <div name='termly-embed' data-id="919173dd-98f9-4e51-8f7a-5ffecede27b7" datatype="iframe">
          <div className="Iframe-content">
            <iframe allowFullScreen='' className="Iframe-itframe" frameBorder="0" id="919173dd-98f9-4e51-8f7a-5ffecede27b7" scrolling="no" src="https://app.termly.io/dashboard/website/b6253a95-f17d-4780-b3d4-6c6d17859e13/privacy-policy" style={{ height:'18337px', opacity: '1' }}>
              <p>Your browser does not support iframes.</p>
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivatePolicy;
