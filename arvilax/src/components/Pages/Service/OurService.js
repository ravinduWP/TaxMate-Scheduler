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
                <span className="tp-section-subtitle mb-30">OUR SERVICES</span>
                <h2 className="tp-section-title">Explore Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
          <ServiceItem
              icon="pe-7s-graph1"
              title="Taxation"
              desc="Maximize your tax benefits with our comprehensive taxation services for individuals and businesses."
            />
            <ServiceItem
              icon="pe-7s-calculator"
              title="Accounting"
              desc="Unlock the potential of our comprehensive accounting solutions for precise financial management."
            />
            <ServiceItem
              icon="pe-7s-culture"
              title="Xero Training"
              desc="Master Xero effortlessly with our expert training programs for efficient financial management and bookkeeping."
            />
            <ServiceItem
              icon="pe-7s-notebook"
              title="Bookkeeping"
              desc="Simplify your bookkeeping tasks with our reliable services for accurate financial record-keeping and reporting."
            />
            <ServiceItem
            icon="pe-7s-graph"
            title="Payroll services "
            desc="Streamline your payroll processes effortlessly with our reliable and comprehensive payroll services solutions."
          />
            <ServiceItem
              icon="pe-7s-umbrella"
              title="Other services"
              desc="Discover a world of financial solutions. Come explore our diverse range of services tailored for your needs."
            />
            {/* <ServiceItem
              icon="pe-7s-graph3"
              title="Analysis"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
            <ServiceItem
              icon="pe-7s-cup"
              title="Design"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            />
            <ServiceItem
              icon="pe-7s-config"
              title="Digital Service"
              desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
