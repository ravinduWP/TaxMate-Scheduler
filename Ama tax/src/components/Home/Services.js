import React from "react";
import { Link } from "react-router-dom";

// single service
export function ServiceItem({ icon, title, desc,serviceId }) {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="tp-service text-center white-bg pt-60 pb-45 pl-25 pr-25 mb-30">
        <div className="tp-service__icon">
          <i className={icon}></i>
        </div>
        <h3 className="tp-service__title pt-40 pb-25">
          <Link to={serviceId}>{title}</Link>
        </h3>
        <p>{desc}</p>
        <Link className="tp-btn-sm-black" to={serviceId}>
          <span>
            <svg
              width="36"
              height="8"
              viewBox="0 0 36 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="currentColor"
              />
            </svg>
            <svg
              width="36"
              height="8"
              viewBox="0 0 36 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          View MOre
        </Link>
      </div>
    </div>
  );
}

const Services = () => {
  return (
    <>
      {/* <!-- service area start  --> */}
      <div className="tp-service-ara grey-bg-4 pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center mb-70">
                <span className="tp-section-subtitle mb-25">OUR SERVICES</span>
                <h2 className="tp-section-title">Explore Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
          <ServiceItem
              icon="pe-7s-graph1"
              title="Taxation"
              desc="Maximize your tax benefits with our comprehensive taxation services for individuals and businesses."
              serviceId="/service-details/service1"
            />
            <ServiceItem
              icon="pe-7s-calculator"
              title="Accounting & Tax Planning"
              desc="Unlock the potential of our comprehensive accounting solutions for "
              serviceId="/service-details/service2"
            />
            <ServiceItem
              icon="pe-7s-notebook"
              title="Bookkeeping & Payroll"
              desc="Simplify your bookkeeping tasks with our reliable services for accurate financial record-keeping and reporting."
              serviceId="/service-details/service3"
            />
            <ServiceItem
              icon="pe-7s-config"
              title="Software setup & training"
              desc="Master Xero effortlessly with our expert training programs for efficient financial management and bookkeeping."
              serviceId="/service-details/service4"
            />
            <div className="text-center mt-60">
              <Link to="/service" className="tp-btn-border">
                All Service
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
                    />
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
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- service area end  -->   */}
    </>
  );
};

export default Services;
