import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        Copyright &copy; Andrew Kil {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
