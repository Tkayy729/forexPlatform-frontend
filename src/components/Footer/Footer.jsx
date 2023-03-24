import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        </div>
        <div className="col-md-4">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fa fa-map-marker"></i> 123 Main Street, Anytown USA</li>
            <li><i className="fa fa-phone"></i> +1 (555) 123-4567</li>
            <li><i className="fa fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Follow Us</h3>
          <ul className="social">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>© 2023 My Awesome Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer