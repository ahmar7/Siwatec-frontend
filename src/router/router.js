import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Imprint from "../pages/Imprint/Imprint";
import Miscellaneous from "../pages/Miscellaneous";
import LandForstwirtschaft from "../pages/LandForstwirtschaft";
import CardDetail from "../pages/CardDetail";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
        <Route path="/landForstwirtschaft" element={<LandForstwirtschaft />} />
        <Route path="/product-detail/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
