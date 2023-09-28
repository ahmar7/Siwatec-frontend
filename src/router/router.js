import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Imprint from "../pages/Imprint/Imprint";
import Miscellaneous from "../pages/Miscellaneous";
import LandForstwirtschaft from "../pages/LandForstwirtschaft";
import CardDetail from "../pages/CardDetail";
import HeaderUpdate from "../pages/Admin/HeaderUpdate";
import AdminLogin from "../admin/Login/AdminLogin";
import SliderAdd from "../pages/Admin/SliderUpdate";
import BannerUpdate from "../pages/Admin/BannerUpdate";
import AboutData from "../pages/Admin/AboutData";
import InformationUpdate from "../pages/Admin/InformationUpdate";
import SocialLink from "../admin/Footer/SocialLink";
import SocialFeature from "../admin/Footer/SocialFeature";
import MiscBannerUpdate from "../admin/Miscellaneous/miscBannerUpdate";
import LandBannerUpdate from "../admin/LandPage/landBannerUpdate";
import AddMiscProduct from "../admin/Miscellaneous/addMiscProduct";
import AllMiscProducts from "../admin/Miscellaneous/AllMiscProduts";
import UpdateMiscProduct from "../admin/Miscellaneous/updateProduct";
import AddLandProduct from "../admin/LandPage/addLandProduct";
import AllLandProducts from "../admin/LandPage/AllLandProduts";
import UpdateLandProduct from "../admin/LandPage/updateProduct";
import LandCardDetail from "../pages/LandCardDetail";
import UpdateProfile from "../admin/UpdateProfile";
import UpdatePassword from "../admin/updatePassword";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
        <Route path="/landForstwirtschaft" element={<LandForstwirtschaft />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/product-detail/:id" element={<CardDetail />} />
        <Route path="/land-detail/:id" element={<LandCardDetail />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/header-update" element={<HeaderUpdate />} />
        <Route path="/Slider-update" element={<SliderAdd />} />
        <Route path="/banners-update" element={<BannerUpdate />} />
        <Route path="/about-update" element={<AboutData />} />
        <Route path="/information-update" element={<InformationUpdate />} />
        <Route path="/socialLink-update" element={<SocialLink />} />
        <Route path="/socialFeature-update" element={<SocialFeature />} />
        <Route path="/miscBanner-update" element={<MiscBannerUpdate />} />
        <Route path="/landBanner-update" element={<LandBannerUpdate />} />
        <Route path="/addMisc-update" element={<AddMiscProduct />} />
        <Route path="/addLand-update" element={<AddLandProduct />} />
        <Route path="/allMisc-products" element={<AllMiscProducts />} />
        <Route path="/allLand-products" element={<AllLandProducts />} />
        <Route path="/updateMisc-product/:id" element={<UpdateMiscProduct />} />
        <Route path="/updateLand-product/:id" element={<UpdateLandProduct />} />
        <Route path="/update-password" element={<UpdatePassword />} />
      </Routes>
    </BrowserRouter>
  );
}
