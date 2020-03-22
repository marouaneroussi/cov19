import React from 'react';

const Navbar = props =>{

  return  <div>
  <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Movies Series info </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>

    </ul>
    <span className="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
  </nav>

  </div>



}
export default Navbar;
