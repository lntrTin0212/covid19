import React from 'react'
import logo from '../img/logo3.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
      <>
        <nav className="navbar">
            <div className="logo-container">
                <a href="">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-list">
                <ul className="list-container">
                    <li className="list-item">
                        <Link to='/covid19'>
                            Home
                        </Link>
                    </li>
                   
                    <li className="list-item">
                        <Link to="contagion">
                            Contagion
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="symtom">
                            Symptoms
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to='news'>
                            News
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="prevent">
                            Prevention
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="tensor">
                            App tracking
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="coming">
                            Coming soon list
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
      </>
  )
}

export default Navbar