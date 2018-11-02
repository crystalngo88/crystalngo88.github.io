import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              Introduction
            </h2>
            <p className="lead mb-5">
            As a high school English teacher turned developer, I am looking to change the landscape of education by giving teachers and students better tools. After five years teaching in an urban public school, I found many creative ways to integrate technology into my lessons to make it more effective, efficient, and engaging. After learning full-stack development, I want to combine my love of education and technology to build projects that help provide more access to knowledge. I am a natural leader with great organization, and interpersonal skills to facilitate growth. I work well with people and would make a great addition to any team.
            </p>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#services"
            >
              What I Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
