import React from "react";
import me from "./images/me.jpg";
import linkedImage from "./images/linkedin.png";
import mailImage from "./images/email.png";

function Info() {
  return (
    <div>
      <div className="infoSection">
        <img src={me} />
        <h1>Antonis Vlachovasilis</h1>
        <h2>Frontend Developer</h2>
        <h3>
          website:{" "}
          <a
            href="https://www.antonisvlachovasilis.com/aboutMe.html"
            className="pWebsite"
          >
            www.antonisvlachovasilis.com
          </a>
        </h3>
      </div>
      <div className="linkSection">
        <button className="mailButton">
          <a href="mailto:an.vlachovasilis@yahoo.com" className="mailLink">
            <img src={mailImage} className="mailImage" />
            Email
          </a>
        </button>
        <button className="linkdButton">
          <a
            href="https://www.linkedin.com/in/vlachovasilis-antonis-92623b23b/"
            className="linkedLink"
          >
            <img src={linkedImage} className="linkedImage" /> LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}

export default Info;
