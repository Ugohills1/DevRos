import React from "react";
import './navbar.css'
function Navbar() {
  return (
      <nav className="navbar">
          <div className='R-DevRos-menu'>
            <img src="/public/image/R-DevRos.png" alt="R-DevRos-image" />
          </div>
          <div className="nav-links">
            <img src="/public/image/Domů.png" alt="Domů.png" className='Domů.png' />
            <a href="/frontend">Front-ends skill</a>
            <a href="/backend">Back-ends skill</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
            <a href="/kontakt">Kontakt</a>
          </div>
      </nav >
  );
}
export default Navbar;