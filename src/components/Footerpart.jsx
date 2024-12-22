// import React from 'react'
// import { pagelinks } from "../data";
import { socialIcons } from "../data";
import SocialLink from "./SocialLink";
import Pagelinks from "./Pagelinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks parentClass="footer-links" itemClass="footer-link"/>
      {/* <ul className="footer-links">
        {pagelinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="footer-icons">
        {socialIcons.map((links) => {
          // let { id, href, icon }=links;
          return (
            <SocialLink key={links.id} {...links} itemclass="footer-icon" />
            // <li key={id}>
            //   <a
            //     href={href}
            //     target="_blank"
            //     className="footer-icon"
            //     rel="noreferrer"
            //   >
            //     <i className={icon}></i>
            //   </a>
            // </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
