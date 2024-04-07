// Footer.js

import React from "react";

function Footer() {
  return (
    <footer style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      backgroundColor : "black",
      color: "white",
    }}>
      <p>Footer {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
