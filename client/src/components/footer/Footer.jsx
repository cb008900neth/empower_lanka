import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Tech & Innovation</span>
            <span>Health & Bio</span>
            <span>E-commerce & Retail</span>
            <span>Sustainable Solutions</span>
            <span>Creative Industries</span>
            <span>Fintech</span>
            <span>Education & E-learning</span>
            <span>Food & Beverage</span>
            <span>Social Impact & Non-Profit</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            
          </div>
          <div className="item">
            <h2>Support</h2>
            
          </div>
          <div className="item">
            <h2>Community</h2>
            
          </div>
          <div className="item">
            <h2>More From empower</h2>
            
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>empower.</h2>
            <span>© empower International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>LKR</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
