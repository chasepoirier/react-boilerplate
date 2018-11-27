import React from 'react'
import { NavLink } from 'react-router-dom'
import Routes from 'utils/Routes'

import './navbar.css'

const Navbar = () => (
  <div className="nav-container">
    <div className="page-wrapper flexed">
      <div className="logo" />
      <div className="link-container">
        <NavLink to={Routes.primary.home.path}>
          <div className="styled-link">HOME</div>
        </NavLink>
        <NavLink to={Routes.primary.about.path}>
          <div className="styled-link">ABOUT</div>
        </NavLink>
      </div>
    </div>
  </div>
)

export default Navbar
