import React from 'react';
import Footerpage from '../Images/Footerpage.png'

function Footer ()  {
  return (
    <div className="Footerpage">
   <img src={Footerpage} alt='Footerpage' className='Footerpage' width={1500}/>
    <footer className="footer">
      <p><h5>© 2024 Netflix Demo Project. All rights reserved successfully!!!.</h5></p>
    </footer>
    </div>
  );
};

export default Footer;
