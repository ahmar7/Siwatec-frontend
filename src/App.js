import React from "react";
import "./App.css";
import "./assets/css/main.css";
import Siders from "./components/Home/siders";
import Home from "./pages/Home";
import Router from "./router/router";
import ModalPopup from "./pages/ModalPopup";

function App() {

  return (
    <>
    <ModalPopup/>
    <Siders/>
      
      <div className="page-wrap">
        <Router/>
      </div>
    </>
  );
}

export default App;
