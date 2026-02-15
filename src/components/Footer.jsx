import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ marginTop: "2rem", textAlign: "center", color: "#888" }}>
      <p>© {year} Your Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;