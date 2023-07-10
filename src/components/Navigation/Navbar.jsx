import React from 'react';
import './NavbarStyles.css';
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
              <svg width="245" height="45" version="1.1" viewBox="0 0 64.823 11.906" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-13.897 -86.795)" fill="#0d7af6"><path d="m34.843 94.688c0 0.86668-0.60797 1.3712-1.604 1.3712h-1.9921v-2.807h1.9403c0.9831 0 1.6557 0.54329 1.6557 1.4358zm-0.23284-3.9194c0 0.82787-0.5821 1.2806-1.5393 1.2806h-1.8239v-2.5742h1.8239c0.95723 0 1.5393 0.47861 1.5393 1.2936zm1.7075 4.0747c0-1.0736-0.77613-2.0309-1.7334-2.199 0.86668-0.31045 1.5264-0.97016 1.5264-2.0567 0-1.2677-1.009-2.3155-2.9105-2.3155h-3.4279v8.9902h3.5961c1.8368 0 2.9493-1.0478 2.9493-2.4189z"></path><path d="m39.396 93.511c0-1.5134 0.67265-1.9662 1.7592-1.9662h0.37513v-1.5264c-1.009 0-1.7204 0.4398-2.1344 1.1513v-1.0348h-1.4746v7.1275h1.4746z"></path><path d="m42.889 97.262h1.4746v-7.1275h-1.4746zm0.75026-8.0718c0.51742 0 0.93136-0.41394 0.93136-0.9443 0-0.53035-0.41394-0.94429-0.93136-0.94429-0.53036 0-0.94429 0.41394-0.94429 0.94429 0 0.53036 0.41394 0.9443 0.94429 0.9443z"></path><path d="m51.62 95.27c-0.07761-2.5742-4.1006-1.7722-4.1006-3.208 0-0.47862 0.41394-0.802 1.203-0.802 0.802 0 1.2806 0.42687 1.3324 1.0478h1.4746c-0.07761-1.4229-1.1383-2.2896-2.7553-2.2896-1.6816 0-2.7423 0.91842-2.7423 2.0567 0 2.613 4.1394 1.811 4.1394 3.208 0 0.49154-0.45274 0.85374-1.3065 0.85374-0.81494 0-1.3712-0.47861-1.4229-1.0607h-1.5264c0.06468 1.2936 1.2677 2.3025 2.9752 2.3025 1.6816 0 2.7294-0.90549 2.7294-2.1085z"></path><path d="m53.211 97.262h1.4746v-3.0657l2.6388 3.0657h1.9921l-3.2856-3.5573 3.2856-3.5702h-2.0438l-2.5871 3.1174v-5.5623h-1.4746z"></path><path d="m60.378 97.262h1.4746v-7.1275h-1.4746zm0.75026-8.0718c0.51742 0 0.93136-0.41394 0.93136-0.9443 0-0.53035-0.41394-0.94429-0.93136-0.94429-0.53036 0-0.94429 0.41394-0.94429 0.94429 0 0.53036 0.41394 0.9443 0.94429 0.9443z"></path><path d="m68.85 97.262h1.4617v-4.204c0-1.9921-1.2547-3.0398-2.9234-3.0398-0.85374 0-1.6428 0.34926-2.1214 0.93135v-0.81493h-1.4746v7.1275h1.4746v-3.9841c0-1.3065 0.71145-1.9791 1.798-1.9791 1.0736 0 1.7851 0.67265 1.7851 1.9791z"></path><path d="m75.189 91.26c1.0995 0 1.9662 0.69851 1.9921 1.798h-3.9453c0.15523-1.1254 0.95723-1.798 1.9533-1.798zm3.3374 3.8806h-1.5911c-0.27164 0.55622-0.77613 0.99603-1.6816 0.99603-1.0866 0-1.9274-0.71145-2.0309-1.8886h5.4458c0.03881-0.24578 0.05174-0.47862 0.05174-0.72439 0-2.0956-1.4358-3.5055-3.4667-3.5055-2.1085 0-3.5573 1.4358-3.5573 3.6737s1.5135 3.6866 3.5573 3.6866c1.7463 0 2.8717-0.99604 3.2727-2.2378z"></path><path d="m15.294 86.795c-0.77351 0-1.3963 0.6228-1.3963 1.3963v9.122c0 0.77351 0.62281 1.3963 1.3963 1.3963h9.122c0.77351 0 1.3963-0.62281 1.3963-1.3963v-9.122c0-0.77352-0.62281-1.3963-1.3963-1.3963zm2.4261 3.3034h2.8892c1.6854 0 2.0465 0.82846 0.84265 2.4854l-0.2006 0.27617c-0.20064 0.27616-0.64198 0.55235-0.88274 0.55235h-4.8154c-0.24077 0-0.24085-0.33142-0.08034-0.55235l1.8057-2.4854c0.12038-0.1657 0.29699-0.27617 0.44145-0.27617zm1.34 0.38706c-0.0029 2e-5 -0.0056 1.2e-4 -0.0085 3.3e-4 -0.08206 7e-3 -0.16494 0.0955-0.12322 0.20224l0.2834 0.72436c-0.05852-1e-3 -0.10137 0-0.10137 0h-1.7229c-0.07005 0-0.12733 0.0636-0.12733 0.14129 0 0.0777 0.05726 0.14064 0.12733 0.14064h1.5999l-0.94172 0.61429c-0.14675 0.1023-0.01696 0.33708 0.12979 0.23477l1.2499-0.83673s0.0293-0.0199 0.05585-0.0391c0.02219-0.0161 0.04469-0.0362 0.04469-0.0362 0.01927-0.0215 0.0275-0.0841 0.0065-0.1357l-5.09e-4 -2e-3c-9e-4 -2e-3 -0.0016-4e-3 -0.0026-7e-3l-0.36259-0.92316c-0.02194-0.0561-0.06358-0.0796-0.10663-0.0793zm1.5797 0.0203a0.14529 0.16022 32.132 0 0-0.13308 0.0835l-1.1335 1.9352a0.1453 0.16022 32.132 0 0 0.2517 0.14523l1.1336-1.9354a0.14529 0.16022 32.132 0 0-0.04502-0.21079 0.14529 0.16022 32.132 0 0-0.07377-0.0177zm1.776 1.7709h1.7408c0.25507 0 0.28356 0.2462 0.06391 0.55217l-1.5859 2.2092c-0.21965 0.30598-0.60187 0.55235-0.85695 0.55235h-6.2157c-0.25507 0-0.28372-0.24637-0.06408-0.55235l0.3966-0.55218h4.7132c0.24531 0 0.69508-0.2762 0.8995-0.55236l0.20438-0.27617c0.40886-0.55232 0.64056-1.0125 0.70416-1.3807z"></path></g></svg>
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
                      <img src={DropdownChrome} className="dropdown-icon" target='_blank' aria-hidden="true" />
                      Download for Chrome
                    </a>
                    <a className="dropdown-item" href="https://www.briskine.com/linkedin-templates/">
                    <img src={DropdownFirefox} className="dropdown-icon" aria-hidden="true" />
                      Download for Firefox
                    </a>
                    <a className="dropdown-item" href="https://www.briskine.com/outlook-templates/">
                    <img src={DropdownOpera} className="dropdown-icon" aria-hidden="true" />
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