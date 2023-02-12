import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
        <div className="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
          <span className="flex-grow-1"></span>
          <div className="d-flex align-items-center">
            <img className="logo" src="/assets/images/logo.png" alt="" />
            <div>
              <p className="m-0">&copy; 2019 Gull HTML</p>
              <p className="m-0">All rights reserved</p>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default Footer;
