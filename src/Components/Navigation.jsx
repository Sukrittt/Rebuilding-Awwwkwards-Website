import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/case-studies" exact="true">
                  Case Studies
                </NavLink>
              </li>
              <li>
                <NavLink to="/approach" exact="true">
                  Approach
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" exact="true">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" exact="true">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li className="nav-info-label">
                  <NavLink to="/contact" exact="true">
                    Get in touch with us
                  </NavLink>
                </li>
                <li className="nav-info-label">
                  <NavLink to="/audit" exact="true">
                    Get a free audit
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 75 510 28 70</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
