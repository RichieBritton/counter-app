import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/#">
        Navbar{' '}
        <span className="bg bg-pill bg-secondary bg-white">
          {totalCounters}
        </span>
      </a>
    </nav>
  )
}

export default NavBar
