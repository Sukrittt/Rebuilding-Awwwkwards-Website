import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UpArrowCircle } from "../assets/UpArrowCircle";
import gsap from "gsap";

const tl = gsap.timeline();
export default function Header({ dimension }) {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  const handleRouterClick = () => {
    setMenuState({ menuOpened: false });
  };

  useEffect(() => {
    if (menuState.menuOpened === true) {
      // Run open menu animations
      tl.to("body", { duration: 0.01, css: { overflow: "hidden" } })
        .to(".app", 1, {
          // y: dimension.width <= 654 ? "70vh" : dimension.height / 2,
          y: "85vh",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu span", {
          scaleX: 0,
          transformOrigin: "50% 0",
          delay: -1,
          duration: 0.6,
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 10, strokeDasharray: 5 },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 10, strokeDasharray: 20 },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 40, strokeDasharray: 18 },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: { strokeDashoffset: 0 },
        })
        .to(".hamburger-menu-close", {
          duration: 0.6,
          delay: -0.8,
          css: { display: "block" },
        });
    } else {
      // Run close menu animations
      tl.to(".app", 1, {
        y: 0,
        ease: "expo.inOut",
      })
        .to("#cirlce", {
          duration: 0.6,
          delay: -0.6,
          css: { strokeDashoffset: -193, strokeDasharray: 227 },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 10, strokeDasharray: 10 },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 10, strokeDasharray: 10 },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: { strokeDashoffset: 40, strokeDasharray: 40 },
        })
        .to(".hamburger-menu span", {
          scaleX: 1,
          transformOrigin: "50% 0",
          delay: -0.6,
          duration: 0.6,
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", {
          duration: 0,
          css: { display: "none" },
        })
        .to("body", {
          css: { overflow: "auto" },
        });
    }
  }, [menuState.menuOpened]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/" exact="true" onClick={handleRouterClick}>
              AGENCY.
            </NavLink>
          </div>
          <div className="nav-toggle">
            <div
              className="hamburger-menu"
              onClick={() => {
                setMenuState({ menuOpened: true });
              }}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => {
                setMenuState({ menuOpened: false });
              }}
            >
              <UpArrowCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
