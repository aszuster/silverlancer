import { useState } from "react";
import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

//Sections
import Home from "./pages/Home";
import TermsAndServices from "./pages/TermsAndServices";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

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
