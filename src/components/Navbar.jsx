import React, { useState, useEffect } from "react";

const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 200;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${isTop ? "bg-transparent" : "bg-gradient"
        } `}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

    </nav>
  );
};

export default Navbar;
