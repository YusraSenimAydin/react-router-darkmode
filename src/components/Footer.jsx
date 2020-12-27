import React from "react";

function Footer(props) {
  const {
    themeHandler,
    themeObj: { theme, bgColor, textColor, btnColor }
  } = props;
  return (
    <div className={`mt-5 ${bgColor} ${textColor}`}>
      <hr />
      <footer className="text-muted text-center mt-5 mb-5">
        <div className="container">
          <button
            className={`btn ${btnColor}`}
            onClick={themeHandler}
            className="btn btn-outline-dark"
          >
            Change Theme
          </button>
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <h2>Github</h2>
          <a
            href="https://github.com/YusraSenimDede"
            className="badge badge-primary"
          >
            Yüsra Senim DEDE
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
