import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const portfolioItems = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Good Morning, Sunshine!",
    description: "Your morning snippet of information"
  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    heading: "Hella_Social",
    description:
      "A place to connect with others with similar interests"
  },
  {
    imgSrc: "./img/portfolio-3.jpg",
    heading: "Byte",
    description:
      "Like Tinder, but for food... find restaurants that your friends and you all agree on"
  },
  {
    imgSrc: "./img/portfolio-4.jpg",
    heading: "Local Host",
    description:
      "Work in Progress- A place for people to find local artists for events, with specific search parameters"
  }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href="">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;
