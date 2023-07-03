import React from "react";
import { ServiceItem } from "../../Home/Services";

const OurService = () => {
  return (
    <>
      <div className="tp-service-ara grey-bg-4 pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center mb-70">
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
          
          </div>
          <div className="row justify-content-center">
          <ServiceItem 
              icon="pe-7s-umbrella"
              title="Other services"
              desc="Discover a world of financial solutions. Come explore our diverse range of services tailored for your needs."
              serviceId="/service-details/service6"
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default OurService;
