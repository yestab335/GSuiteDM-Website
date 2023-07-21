import React from "react";

const UpdateLog = () => {
  return (
    <>
      <div className="hero pb-5">
        <div className="container text-center">
          <h1>Update Log</h1>
        </div>
      </div>

      <div className="container container-narrow content-main" markdown="1">
        <h2>v1.0.9</h2>
        <ul>
          <li>Minor big fixes and improvements</li>
        </ul>

        <h2>v1.0.8</h2>
        <ul>
          <li>Google Chrome</li>
          <ul>
            <li>Added a dark mode theme for Google Classroom</li>
            <li>Added a theme toggler button in the bottom left of the screen</li>
            <li>Added a settings button next to the theme toggler</li>
            <li>Added fields for custom settings and inputs</li>
            <li>Added the ability to save the custom settings using the browser's local storage</li>
          </ul>

          <li>Mozilla Firefox</li>
          <ul>
            <li>Added a dark mode theme for Google Classroom</li>
            <li>Added a theme toggler button in the bottom left of the screen</li>
            <li>Added a settings button next to the theme toggler</li>
            <li>Added fields for custom settings and inputs</li>
            <li>Added the ability to save the custom settings using the browser's local storage</li>
          </ul>

          <li>Opera/OperaGX</li>
          <ul>
            <li>Added a dark mode theme for Google Classroom</li>
            <li>Added a theme toggler button in the bottom left of the screen</li>
            <li>Added a settings button next to the theme toggler</li>
            <li>Added fields for custom settings and inputs</li>
            <li>Added the ability to save the custom settings using the browser's local storage</li>
          </ul>
        </ul>

        <h2>v1.0.7</h2>
        <ul>
          <li>Updated extension name on notification banner</li>
        </ul>

        <h2>v1.0.6</h2>
        <ul>
          <li>Changed the extension's logo and icon</li>
          <ul>
            <li>Optimized for Google Chrome, Mozilla Firefox, Opera, and Opera GX</li>
          </ul>
        </ul>

        <h2>v1.0.5</h2>
        <ul>
          <li>Added a built-in smooth cursor/caret animation to Google Docs</li>
          <ul>
            <li>Optimized for Google Chrome, Mozilla Firefox, Opera, and Opera GX</li>
          </ul>
          <li>Licensed extension under MIT</li>
        </ul>

        <h2>v1.0.4</h2>
        <ul>
          <li>Fixed global toggle button throw errors</li>
          <ul>
            <li>When the setting to turn the global toggler off, the extension would not change the theme from light to dark mode.</li>
          </ul>
        </ul>

        <h2>v1.0.3</h2>
        <ul>
          <li>Added compatibility with the Firefox and Mozilla browsers</li>
          <li>Added compatibility with Opera and Opera GX browsers</li>
        </ul>

        <h2>v1.0.1</h2>
        <ul>
          <li>Chrome browser exclusive compatibility</li>
          <li>Added theme toggle switch to bottom left corner of Google Docs</li>
          <li>Updated Google Docs' color scheme for a better looking dark mode</li>
          <li>Added popup window for quick access to settings</li>
          <ul>
            <li>Custom dark mode color pallets and color schemes</li>
            <li>Inverted color scheme</li>
            <li>Extension on and off toggler</li>
            <li>Monotone color scheme</li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default UpdateLog;
