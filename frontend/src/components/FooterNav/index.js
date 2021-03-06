import React from 'react';

import './FooterNav.css'

const FooterNav = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-links-container'>
          <div className='footer-title'>Developed by</div>
            <div className='profile-images-small'>
              <div className='footer-box'>   
                <div className='footer-div'>
                  <div className="footer-name">
                      <a href="https://jomix-13.github.io/" target="_blank" rel="noreferrer">
                        John Wanis
                      </a>
                    </div>
                    <div className="footer-links">
                      <a href="mailto:john.wanis@yahoo.com" target="_blank" rel="noreferrer">
                        <i className="far fa-envelope fa-sm" />
                      </a>
                      &nbsp;
                      <a href="https://github.com/Jomix-13" target="_blank" rel="noreferrer">
                        <i className="fab fa-github fa-sm" />
                      </a>
                      &nbsp;
                      <a href="https://www.linkedin.com/in/john-wanis-764957138/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin fa-sm" />
                      </a>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default FooterNav;
