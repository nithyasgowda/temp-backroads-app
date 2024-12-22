// import React from "react";
// import PropTypes from "prop-types";
import PropTypes from "prop-types"; 
const SocialLink = ({href,icon,itemclass}) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemclass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
SocialLink.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    itemclass: PropTypes.string.isRequired,
};
export default SocialLink;
