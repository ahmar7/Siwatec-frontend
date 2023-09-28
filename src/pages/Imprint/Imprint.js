import React from "react";
import Header from "../../Layout/Header";
import Banner from "../../components/Home/Banner";
import CardSlider from "../../components/Home/CardSlider";
import About from "../../components/Home/About";
import Footer from "../../Layout/Footer";
import Breadcrum from "../../components/Home/Breadcrum";
import MainBody from "../../components/Imprint/mainBody";
import Top from "../../components/GoTop/GoTop";

const Imprint = () => {
  let pageName = "Imprint";
  return (
    <>
      <Top />
      <Header />
      <section className="content-main  container block-group is--ctl-custom is--act-index">
        <Breadcrum pageName={pageName} />
        <div className="content-main--inner">
          <MainBody />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Imprint;
