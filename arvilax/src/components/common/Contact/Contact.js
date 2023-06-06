import React from "react";

const Contact = () => {
  return (
    <>
      <div className="tp-sv-contact grey-bg-4 pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center pb-40">
                <span className="tp-section-subtitle mb-25">
                Direct Contact
                </span>
                <h2 className="tp-section-title">
                  Can’t find what are you <br />
                  looking for?
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-8">
              <div className="tp-contact-form tp-contact-form-2 white-bg pt-50 pl-50 pr-50 pb-55 mr-60">
                <h4 className="tp-contact-form-title">
                    Direct Contact with us
                </h4>
                <form id="contact-form" action="assets/mail.php" method="POST">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name*"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email here"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your number*"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Enter your Massage*"
                  ></textarea>
                  <div className="text-center">
                    <button type="submit" className="tp-btn-border">
                      Send Massage{" "}
                      <span>
                        <svg
                          width="22"
                          height="8"
                          viewBox="0 0 22 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <svg
                          width="22"
                          height="8"
                          viewBox="0 0 22 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-ct-info-box black-bg">
                <div className="tp-ct-info tp-ct-info-border pt-50 pl-50 pb-35">
                  <h3 className="tp-ct-info__title text-white mb-35">
                    <span>
                      <i className="fal fa-address-book"></i>
                    </span>{" "}
                    Online Contact
                  </h3>
                  <p>
                  6 Gething Crescent, Bowden South Australia <br />
                  (08) 8123 4362
                  </p>
                  <p>
                  197A Ladywood Rd, Modbury Heights South Australia<br />
                  0425 491 977
                  </p>
                </div>
                <div className="tp-ct-info pt-60 pl-50 pb-35">
                  <h3 className="tp-ct-info__title text-white mb-35">
                    <span>
                      <i className="fal fa-address-book"></i>
                    </span>{" "}
                    Opening Hours
                  </h3>
                  <p>
                    Office Hours: 9AM - 5PM <br />
                    Monday-Friday<br/>
                    <br/>
                  </p>
                </div>
                <div className="tp-ct-info pt-60 pl-50 pb-50 black-bg-2">
                  <div className="tp-ct-info-icons">
                   
                    <span>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
