import React from "react";
import "./FooterStyles.css";
import Logo from "../../assets/logo-regular.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

const Footer = () => {
  return (
    <footer className="footer container container-narrow">
      <div className="footer-menu d-md-flex">
        <ul className="list-unstyled">
          <li>
            <h5 className="footer-heading">Browser Extension</h5>
          </li>

          <li>
            <a href="https://tinyurl.com/chrome-webstore-gsuitedm" target="_blank" rel="noopener noreferrer">
              GSuiteDM for Chrome
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              GSuiteDM for Firefox
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              GSuiteDM for Opera/GX
            </a>
          </li>
        </ul>

        <ul className="list-unstyled">
          <li>
            <h5 className="footer-heading">Product</h5>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>

        <ul className="list-unstyled ms-md-auto text-md-end">
          <li>
            <h5 className="footer-heading">Contact</h5>
          </li>
          <li>
            <a href="#" className="p-3 p-md-0">
              support@briskine.com
            </a>
          </li>

          {/* LinkedIn Logo */}
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 p-md-1"
            >
              <img
                src={LinkedIn}
                width={15}
                height={15}
                alt="GSuiteDM on LinkedIn"
                draggable={false}
              />
            </a>
          </li>

          {/* Github Logo */}
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 p-md-1"
            >
              <img
                src={Github}
                width={17}
                height={17}
                alt="GSuiteDM on Github"
                draggable={false}
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="row footer-brand">
        <div className="col">
          <a href="#" className="footer-logo" title="GSuiteDM">
            <img src={Logo} draggable={false} alt="GSuiteDM Logo" />
          </a>
        </div>

        {/* Copyright */}
        <div className="col footer-brand-text text-end">© 2023 GSuiteDM</div>
      </div>
    </footer>
  );
};

export default Footer;
