import React from 'react';
import './NavbarStyles.css';
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
            <a href="https://gsuitedm.netlify.app/" className="navbar-brand" aria-label="Home">
              <img src={LogoNormal} width={245} height={45} draggable={false} alt="GSuiteDM Logo" />
            </a>

            <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarContent' aria-controls='navbarToggleExternalContent' aria-expanded='true' aria-label='Toggle Navigation'>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse show" id="navbarContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Help Center
                  </a>
                </li>

                <li className="nav-item dropdown dropdown-nav">
                  <a href="#" className="nav-link dropdown-toggle" id="useCasesDropdown" role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    Download
                  </a>

                  <div className="dropdown-menu" aria-labelledby="useCasesDropdown">
                    <a className="dropdown-item" href="https://tinyurl.com/chrome-webstore-gsuitedm">
                      <img src={DropdownChrome} draggable={false} className="dropdown-icon" target='_blank' aria-hidden="true" />
                      Download for Chrome
                    </a>
                    <a className="dropdown-item" href="https://www.briskine.com/linkedin-templates/">
                    <img src={DropdownFirefox} draggable={false} className="dropdown-icon" aria-hidden="true" />
                      Download for Firefox
                    </a>
                    <a className="dropdown-item" href="https://www.briskine.com/outlook-templates/">
                    <img src={DropdownOpera} draggable={false} className="dropdown-icon" aria-hidden="true" />
                      Download for Opera
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Pricing
                  </a>
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
