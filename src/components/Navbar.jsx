// import React from 'react'
import logo from "../images/logo.svg";
// import { pagelinks } from "../data";
import { socialIcons } from "../data";
import SocialLink from "./SocialLink";
import Pagelinks from "./Pagelinks";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <Pagelinks parentClass="nav-links" itemClass="nav-link"/>
        {/* <ul className="nav-links" id="nav-links">
          {pagelinks.map((links) => {
            return (
              <li key={links.id}>
                <a href={links.href} className="nav-link">
                  {links.text}
                </a>
              </li>
            );
          })}
        </ul> */}

        <ul className="nav-icons">
          {socialIcons.map((links) => {
            // let {id,href,icon}=links;
            return (
              <SocialLink key={links.id} {...links} itemclass="nav-icon"/>
              // <li key={id}>
              //   <a
              //     href={href}
              //     target="_blank"
              //     rel='noreferrer'
              //     className="nav-icon"
              //   >
              //     <i className={icon}></i>
              //   </a>
              // </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
