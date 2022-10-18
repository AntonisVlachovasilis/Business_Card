import React from "react";
import insta from "./images/instagram.png";
import face from "./images/facebook.png";
import git from "./images/github.png";
function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/antonis.vlahovasilis/">
        <img src={insta} className="footerImage insta" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100005360268351">
        <img src={face} className="footerImage face" />
      </a>
      <a href="https://github.com/AntonisVlachovasilis">
        <img src={git} className="footerImage git" />
      </a>
    </div>
  );
}

export default Footer;
