import react, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import gsap from "gsap";

// Components
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

// pages
import Home from "./pages/home";
import CaseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import About from "./pages/About";
import Services from "./pages/services";

// Storing all route information in an array
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/about-us", name: "About Us", Component: About },
  { path: "/services", name: "Services", Component: Services },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  // Prevents flashing, It will make the visibility to visible only when all dom elements are loaded
  gsap.to("body", 0, { css: { visibility: "visible" } });

  const [dimension, setdimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    let vh = dimension.height * 0.1;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function HandleResize() {
      setdimension({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    // When the user resizes the height and width will be updated
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <>
      <Header dimension={dimension} />
      <div className="app">
        <Routes>
          {routes.map(({ path, Component }) => (
            // This will one by one map through all elements in the "routes" array and generate a route for each element
            <Route key={path} exact path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
      <Navigation />
    </>
  );
}

export default App;
