// import React from 'react'
import { pagelinks } from "../data"
import PropTypes from "prop-types"; 
const Pagelinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
    {pagelinks.map((links) => {
      return (
        <li key={links.id}>
          <a href={links.href} className={itemClass}>
            {links.text}
          </a>
        </li>
      );
    })}
  </ul>
  )
}
Pagelinks.propTypes = {
    parentClass: PropTypes.string.isRequired,
    itemClass: PropTypes.string.isRequired,
};


export default Pagelinks
