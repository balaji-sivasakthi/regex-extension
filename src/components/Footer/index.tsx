import React from "react";
import logo from "./../../assets/img/regex_logo.jpeg";
function Footer() {
  return (
    <div className="regex_footer">
      <span>Powered by</span>
      <div className="logo_group">
        <img
          width={32}
          style={{ borderRadius: "50%" }}
          height={32}
          src={logo}
          alt=""
        />
        <span><a href="https://regex-cse.club/">REGEX</a></span>
      </div>
    </div>
  );
}

export default Footer;
