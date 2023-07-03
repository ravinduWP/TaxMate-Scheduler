import React from "react";

const AboutCompany = () => {
  return (
    <>
      <div className="about-details-page pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-details-info pr-65">
                <div className="tp-section-wrapper">
                  <span className="tp-section mb-25">
                  
                  </span>
                  <h4 className="tp-pt-size mb-40">
                   Founder and CEO
                  </h4>
                </div>
                <div className="about-tb-content">
                  <nav>
                    {/* <div className="nav mb-30" id="nav-tab" role="tablist">
                      <button
                        className="nav-links active"
                        id="mission"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-mission"
                        type="button"
                        role="tab"
                        aria-controls="nav-mission"
                        aria-selected="true"
                      >
                        Our Mission
                      </button>

                      <button
                        className="nav-links"
                        id="nav-vission-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-vission"
                        type="button"
                        role="tab"
                        aria-controls="nav-vission"
                        aria-selected="false"
                      >
                        Our Vission
                      </button>
                      <button
                        className="nav-links"
                        id="nav-value-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-value"
                        type="button"
                        role="tab"
                        aria-controls="nav-value"
                        aria-selected="false"
                      >
                        Our Value
                      </button>
                    </div> */}
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-mission"
                      role="tabpanel"
                      aria-labelledby="nav-mission"
                    >
                      <p>
                      Ama Abeywickrama is the Founder and CEO of AMA Tax Accountants and Bookkeepers. 
                      Previously known as SA Tax and Bookkeeping Services Pty Ltd.
                      Ama holds a masters degree in finance and a bachelor degree in commerce.
                       Ama is also a certified Tax agent, ASIC agent and Public Accountant. 
                       She has more than 22 years of experience in accounting and tax. 
                       And she specialises in many different industries including but not limited to, tax preparation, accounting, and bookkeeping. 
                      </p>

                      <p>
                      Ama founded her firm in 2013 and currently she has two offices in Bowden and Modbury Heights. 
                      She migrated to Australia in 2010 and started her career as a tax consultant in 2011. 
                      She completed her bachelor’s degree in Sri Lanka and continued her studies in Australia after she migrated from Sri Lanka.
                       She has also completed the highest studies in music, and she played violin and flute and is still continuing her vocal talent in Australia.
                      </p>
                      <h4>Qualifications & Memberships:</h4>
                        <ol >
                          <li>Master of Finance</li>
                            <li>Bachelor of Commerce (Honours)</li>
                            <li>Fellow IPA Accountant</li>
                            <li>Registered Tax Agent</li>
                            <li> Public Practice Certificate</li>
                            <li> ASIC Agent</li>
                            <li> Member of Institute of Bookkeepers</li>
                            <li> XERO Partner</li>
                        </ol>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="tp-about-img-box p-relative d-inline-block mb-30">
                <div className="about-page-img">
                  <img src="assets/img/about/about-page.jpg" alt="" width={'410px'} height={'456px'}/>
                </div>
                <div className="dots-img">
                  <img src="assets/img/about/dot.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
