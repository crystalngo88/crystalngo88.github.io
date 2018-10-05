import React from "react";
const socialSites = [
  {
    link: "https://linkedin.com/in/ngocrystal",
    icon: "icon-social-linkedin"
  },
  {
    link: "https://www.instagram.com/_ngodollaz/",
    icon: "icon-social-instagram"
  },
  // {
  //   link: "https://twitter.com/crystalngo88",
  //   icon: "icon-social-twitter"
  // },
  {
    link: "https://github.com/crystalngo88",
    icon: "icon-social-github"
  }
];
const FooterSection = () => (
  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
      {socialSites.map((site,index)=>(
        <li className="list-inline-item" key={`social_${index}`}>
          <a className="social-link rounded-circle text-white mr-3" href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
      <p className="text-muted small mb-0">
        Copyright &copy; Crystal Ngo 2018
      </p>
    </div>
  </footer>
);
export default FooterSection;
