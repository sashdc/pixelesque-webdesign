import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="container-fluid ">
        <div className="row m-3">
          <div className="footerinfo ">
            <h5>
              <i className="fa fa-bolt"></i> Pixelesque Web Development
            </h5>
            <div className="row">
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#portfolio">WebDev Portfolio</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="https://www.pixelesquephotography.com">
                      Photography
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="footnav">
              <li className="nav-item">
                <a
                  href="https://stackoverflow.com/users/20758760/sashdc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link "
                >
                  <i className="fa fa-stack-overflow fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/sashdc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-github fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/saharsh-cherian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-linkedin fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
