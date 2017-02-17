import React, { PropTypes } from 'react'
import { Link } from 'react-router';

const NavigationBar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">WebSiteName</Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar
