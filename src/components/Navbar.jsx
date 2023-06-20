import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ background: "black" }}>
      <div
        style={{
          display: "flex",
          gap: "100px",
          width: "20%",
          margin: "auto",
          color: "white",
        }}
      >
        <h3 style={{ padding: "18px", cursor: "pointer", fontWeight: 600 }}>
          <Link to='/'>Register</Link>
        </h3>
        <h3 style={{ padding: "18px", cursor: "pointer", fontWeight: 600 }}>
        <Link to='/verify'>Verify</Link>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
