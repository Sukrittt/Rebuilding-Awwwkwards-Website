import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Cases from "../Components/Cases";
import IntroOverlay from "../Components/IntroOverlay";
import gsap from "gsap";

//timeline
const timeline = gsap.timeline();
const homeAnimation = (completeAnimation) => {
  timeline
    .from(".line span", 1.8, {
      y: 100,
      ease: "power4",
      skewY: 7,
      delay: 1,
      stagger: {
        amount: 0.3,
      },
    })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(
      ".overlay-bottom",
      1.6,
      {
        width: 0,
        ease: "expo.inOut",
        stagger: {
          amount: 0.4,
        },
      },
      "-=.8"
    )
    .to(".intro-overlay", 0, { css: { display: "none" } })
    .from(
      ".case-image img",
      1.6,
      {
        scale: 1.4,
        ease: "expo.inOut",
        stagger: {
          amount: 0.4,
        },
        onComplete: completeAnimation,
      },
      "-=2"
    );
};

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };
  useEffect(() => {
    homeAnimation(completeAnimation); // Storing all the animation in a single function
  }, []);
  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
    </>
  );
}
