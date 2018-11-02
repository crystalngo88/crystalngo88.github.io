import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const MapSection = () => (
  <ScrollableAnchor id="contact">
    <section className="map">
      <iframe
      title="where-i-am-located"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100785.50184574457!2d-122.37102014595469!3d37.87089021784659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808579363a8549d3%3A0x94ea1595a675e993!2sBerkeley%2C+CA!5e0!3m2!1sen!2sus!4v1541196872927"
      />
      <br />
    </section>
  </ScrollableAnchor>
);
export default MapSection;
