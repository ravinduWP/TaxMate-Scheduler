import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <!-- footer area start --> */}
      <footer>
        <div className="tp-footer__area black-bg">
          <div className="tp-footer">
            {/* <!-- main-footer start  --> */}
            <div className="tp-footer__main">
              <div className="container">
                <div className="tp-footer-border pt-60 pb-30">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">
                          Our Services
                        </h3>
                        <ul>
                          <li>
                            <Link to="/Service">Taxation</Link>
                          </li>
                          <li>
                            <Link to="/Service">Accounting & tax planning</Link>
                          </li>
                          <li>
                            <Link to="/Service">Software setup & Training</Link>
                          </li>
                          <li>
                            <Link to="/Service">Bookkeeping & Payroll services </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="tp-footer__widget pb-30">
                        {/* <ul>
                        <li><Link to='/'>Home</Link></li>
                        </ul> */}

                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">Quick Links</h3>
                        <ul>
                          <li>
                            <a href="">
                              ABN : 41 580 165 625
                            </a>
                          </li>
                          <li>
                            <a href="">
                              6 Gething Crescent, Bowden South Australia
                            </a>
                          </li>
                          <li>
                            <a href="">
                              197A Ladywood Rd, Modbury Heights South Australia
                            </a>
                          </li>
                          <li>
                            <a href="tel:0881234362 ">Office: (08) 8123 4362 </a>
                            <a href="tel:0425491977" className="ml-5">Mobile: 0425 491 977 </a>
                          </li>

                          <li>
                            <a href="mailto:ama@taxsa.com.au">
                              Email: ama@taxsa.com.au
                            </a>
                          </li>
                          <li>
                            <p>
                              Office hours: 9 AM - 5 PM  Monday – Friday <br />
                              July - October: 9 AM - 5 PM Monday -Sunday
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- main footer end  --> */}
          </div>
        </div>

        {/* <!-- footer copy right --> */}
        <div className="top-footer-copyright pt-30 black-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-12">
                <div className="tp-copyrigh-text mb-30">
                  <span>
                    © {new Date().getFullYear()} Ama Tax Accountants and Bookkeepers . All Rights Reserved.
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="tp-footer-social-icon mb-30 text-md-end">
                  <ul>
                    <li>
                      <a href="https://web.facebook.com/p/Ama-Tax-Accountants-100050855595067/?_rdc=2&_rdr" target='_blank'>
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/amataxaccountants/" target='_blank'>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@AMATAXACCOUNTANTS" target='_blank'>
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://au.linkedin.com/in/ama-abeywickrama-9242b574" target='_blank'>
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer copyright end  --> */}
      </footer>
      {/* <!-- footer area end --> */}
    </>
  );
};

export default Footer;
