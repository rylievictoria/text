import React from "react";
import Section from "./Section";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
      className="footer"
    >
      <div className="FooterComponent__container container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <Link className="brand" to="/">
              <div className="brand-icon">
                <img
                  className="FooterComponent__logo"
                  src={props.logo}
                  alt="Logo"
                />
              </div>
            </Link>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            {props.copyright && (
              <p className="FooterComponent__copyright">{props.copyright}</p>
            )}
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Product</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Company</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Social</p>
                  <ul className="menu-list">
                    <li>
                      <a
                        href="https://www.facebook.com/pages/category/Web-Designer/Leading-Point-Marketing-1649410601997222/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-facebook.svg"
                          alt="Facebook"
                        />
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
