
import services from '../../../data/services.json';
const ServiceDetailsAbout = (props) => {
  const servicedata=services;
  const id =props.id;
  
  
  const pagedata = servicedata.serviceset.find(item => item.id === id);
  // console.log(pagedata);
  
  return (
    <>
      <div className="tp-service-page pt-140 pb-140">
        <div className="container">
          <div className="row pb-30">
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/service-blog-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/service-blog-2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
                <h3 className="tp-sv__title">{pagedata.title}</h3>
                <p>{pagedata.para1}</p>

                <p>{pagedata.para2}</p>

                <h4 className="tp-sv__subtitle">
                We Offer The Following Services 
                </h4>
                  {/* <ul className="list-group">
                  {pagedata.serviceList.map((service, index) => (
                    <li className="list-group-item" key={index}>{service}</li>
                  ))}
                    
                  </ul> */}
                  <div className="row justify-content-center">
                <div className="col">
                  <ul >
                    {pagedata.serviceList.slice(0, Math.ceil(pagedata.serviceList.length / 2)).map((service, index) => (
                      <li id="service_list" key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div className="col">
                  <ul >
                    {pagedata.serviceList.slice(Math.ceil(pagedata.serviceList.length / 2)).map((service, index) => (
                      <li id="service_list" key={index}>{service}</li>
                    ))}
                  </ul>
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

export default ServiceDetailsAbout;
