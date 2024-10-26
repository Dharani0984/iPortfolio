// Footer.js
import React, { useEffect } from 'react';
import './assets/css/main.css'; // Ensure the path is correct
const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">dhranikumar</strong> <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits">
          Designed by <a href="#">DharaniKumarNellore</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
