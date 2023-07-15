import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-regular.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

// Extension Download Links
var chromeWebStore = "https://tinyurl.com/chrome-webstore-gsuitedm";

const Footer = () => {
  return (
    <footer className="footer container container-narrow">
      <div className="footer-menu d-md-flex">
        <ul className="list-unstyled">
          <li>
            <h5 className="footer-heading">Browser Extension</h5>
          </li>

          <li>
            <Link to={chromeWebStore} target="_blank" rel="noopener noreferrer">
              GSuiteDM for Chrome
            </Link>
          </li>
          <li>
            <Link to='' target="_blank" rel="noopener noreferrer">
              GSuiteDM for Firefox
            </Link>
          </li>
          <li>
            <Link to='' target="_blank" rel="noopener noreferrer">
              GSuiteDM for Opera/GX
            </Link>
          </li>
        </ul>

        <ul className="list-unstyled">
          <li>
            <h5 className="footer-heading">Product</h5>
          </li>

          <li>
            <Link to='/updates'>Updates</Link>
          </li>
          <li>
            <Link to='/'>Privacy Policy</Link>
          </li>
          <li>
            <Link to='/'>Terms of Service</Link>
          </li>
        </ul>

        <ul className="list-unstyled ms-md-auto text-md-end">
          <li>
            <h5 className="footer-heading">Contact</h5>
          </li>
          <li>
            <Link to='/' className="p-3 p-md-0">yestab335@gmail.com</Link>
          </li>

          {/* Social Media Icons */}
          <li>
            {/* LinkedIn Logo */}
            <Link to='/' target="_blank" rel="noopener noreferrer" className="p-3 p-md-1">
              <img
                src={LinkedIn}
                width={15}
                height={15}
                alt="GSuiteDM on LinkedIn"
                draggable={false}
              />
            </Link>

            {/* Github Logo */}
            <Link to='https://tinyurl.com/gsuitedm' target="_blank" rel="noopener noreferrer" className="p-3 p-md-1">
              <img
                src={Github}
                width={17}
                height={17}
                alt="GSuiteDM on Github"
                draggable={false}
              />
            </Link>
          </li>
        </ul>
      </div>

      <div className="row footer-brand">
        <div className="col">
          <Link to='/' className="footer-logo" title="GSuiteDM">
            <img src={Logo} draggable={false} alt="GSuiteDM Logo" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="col footer-brand-text text-end">© 2023 GSuiteDM</div>
      </div>
    </footer>
  );
};

export default Footer;
