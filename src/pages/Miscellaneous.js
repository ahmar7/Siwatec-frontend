import React from "react";
import Header from "../Layout/Header";

import Footer from "../Layout/Footer";
import Breadcrum from "../components/Home/Breadcrum";
import Cards from "../components/Miscellaneous/cards";
import Top from "../components/GoTop/GoTop";
// import MainBody from "../../components/Miscellaneous/mainBody";

const Miscellaneous = () => {
  let pageName = "Miscellaneous";
  return (
    <>
      <Top />
      <Header />
      <section className="content-main  container block-group is--ctl-custom is--act-index">
        <Breadcrum pageName={pageName} />
        <div className="content-main--inner">
          <Cards />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Miscellaneous;
