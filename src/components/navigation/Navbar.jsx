import React from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import LogoNormal from "../../assets/logo-regular.svg"
import DropdownChrome from '../../assets/browsers/chrome.svg';
import DropdownFirefox from '../../assets/browsers/firefox.svg';
import DropdownOpera from '../../assets/browsers/opera.svg';

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-lg navbar-header">
          <div className="container-fluid p-0">
            <Link to='/' className="navbar-brand" aria-label="Home">
              <img src={LogoNormal} width={245} height={45} draggable={false} alt="GSuiteDM Logo" />
            </Link>

            <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarContent' aria-controls='navbarToggleExternalContent' aria-expanded='true' aria-label='Toggle Navigation'>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse show" id="navbarContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to='#' className="nav-link">
                    Help Center
                  </Link>
                </li>

                <li className="nav-item dropdown dropdown-nav">
                  <Link to='#' className="nav-link dropdown-toggle" id="useCasesDropdown" role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    Download
                  </Link>

                  <div className="dropdown-menu" aria-labelledby="useCasesDropdown">
                    <Link to='https://tinyurl.com/chrome-webstore-gsuitedm' target='_blank' className="dropdown-item">
                      <img src={DropdownChrome} draggable={false} className="dropdown-icon" target='_blank' aria-hidden="true" />
                      Download for Chrome
                    </Link>

                    <Link to='#' className="dropdown-item">
                      <img src={DropdownFirefox} draggable={false} className="dropdown-icon" target='_blank' aria-hidden="true" />
                      Download for Firefox
                    </Link>

                    <Link to='#' className="dropdown-item">
                      <img src={DropdownOpera} draggable={false} className="dropdown-icon" target='_blank' aria-hidden="true" />
                      Download for Opera
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Blog
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
