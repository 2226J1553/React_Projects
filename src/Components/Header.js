import React from 'react';
import HeaderPage from '../Images/Header page.jpeg'

function Header() {
  return (
    
    <header className="header">
      <div className="logo"><h1><b>Netflix Demo Page</b></h1></div>
      <img src={HeaderPage} alt="HeaderPage" className="HeaderPage" width={1500} height={600}/>
    </header>
  );
};

export default Header;
