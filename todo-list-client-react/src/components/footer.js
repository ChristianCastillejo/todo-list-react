import React from "react";
import Fade from "react-reveal/Fade";

function Menu() {
  return (
    <div className="footer">
      <Fade right cascade>
        <a href="https://medium.com">
          <p>Learn how to build this app</p>
        </a>
        <a href="https://ezsoftware.io">
          <p>Created by Christian Castillejo</p>
        </a>
      </Fade>
    </div>
  );
}

export default Menu;
