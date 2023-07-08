import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <>
    <div className="header" id="topheader">
    <nav className="navbar navbar-expand-lg navbar-light  bg-secondary fixed-top">
      <div className="container text-uppercase">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'}><span className='logo' >Dee</span>pak</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/home'}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Service"}>SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/price"}>PRICE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </nav>
     </div>
    </>
  )
}

export default Navbar
