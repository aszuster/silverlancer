import { useEffect, useLayoutEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

import Home from "./pages/Home";
import TermsAndServices from "./pages/TermsAndServices";

let lenisInstance = null;

function Wrapper({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      document.documentElement.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return children;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    lenisInstance = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-services" element={<TermsAndServices />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
