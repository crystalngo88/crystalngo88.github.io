import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const ServicesOffered = [
  {
    title: "Tech Savvy Gal",
    description: "Socially aware and sharp",
    icon: "icon-screen-smartphone"
  },
  {
    title: "Excellent Communicator",
    description: "Multiple degrees in English!",
    icon: "icon-pencil"
  },
  {
    title: "Team Player",
    description: (
      <span>
        People <i className="fas fa-heart" /> me!
      </span>
    ),
    icon: "icon-like"
  },
  {
    title: "Community Builder",
    description: "I mustache you a question...",
    icon: "icon-mustache"
  }
];
const ServicesSections = () => (
  <ScrollableAnchor id="services">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Skills</h3>
          <h2 className="mb-5">What I Offer</h2>
        </div>
        <div className="row">
          {ServicesOffered.map((service, index) => (
            <div
              className="col-lg-3 col-md-6 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className={service.icon} />
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;
