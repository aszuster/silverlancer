import { useState } from "react";
;import "./App.css";
import { Route, Routes } from "react-router-dom";

//Sections
import Home from "./pages/Home";
import TermsAndServices from "./pages/TermsAndServices";

function App() {

  return (
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/terms-and-services" element={<TermsAndServices/>} />
    </Routes>
  );
}

export default App;
