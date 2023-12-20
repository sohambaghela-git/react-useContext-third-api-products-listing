import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="container">
          <div className="row">
            <div className="col-1">  
              <Link to="/Table">Table</Link>
            </div>
            <div className="col-1">
              <Link to="/Card">Card</Link> 
            </div>
            <div className="col-1">  
              <Link to="/">Home</Link>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;