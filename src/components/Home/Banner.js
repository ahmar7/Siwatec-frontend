import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import Banner2 from "../../assets/img/banner-2.webp";
import Banner3 from "../../assets/img/banner3.webp";
import { toast } from "react-toastify";
import { getBelowBannerApi, getSliderApi } from "../../Api/Services";
import { baseUrl } from "../../utils/Constant";
const Banner = () => {
  const [slider, setSlider] = useState([]);
  const [belowBanner, setbelowBanner] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState({
    address: "",
    availabilityFrom: "",
    availablityTo: "",
  });
  let getHeader = async () => {
    try {
      let res = await fetch(`${baseUrl}getHeader`, {
        method: "GET",
        credentials: "include",

        headers: { "Content-Type": "application/json" },
      });
      let data = await res.json();
      if (res.status === 200) {
        setUser({
          address: data.findHeader.address,
          availabilityFrom: data.findHeader.availabilityFrom,
          availabilityTo: data.findHeader.availabilityTo,
        });
      } else {
        toast.error("something went wrong, please try again later");
        console.log(res.status);
        return false;
      }
    } catch (e) {
      console.log("e: ", e);
      toast.error("something went wrong, please try again later");
    } finally {
      // setisLoading(false);
    }
  };

  const getBanners = async () => {
    try {
      const getSlider = await getSliderApi();

      if (getSlider.success) {
        toast.success(getSlider.msg);
        setSlider(getSlider.findHeader);
      } else {
        toast.error(getSlider.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      // setisLoading(false);
    }
  };
  const getBelowBanners = async () => {
    try {
      const getBelowBanner = await getBelowBannerApi();

      if (getBelowBanner.success) {
        toast.success(getBelowBanner.msg);
        setbelowBanner(getBelowBanner.findBelow);
      } else {
        toast.error(getBelowBanner.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    getHeader();
    getBelowBanners();
    getBanners();
  }, []);
  if (isLoading) {
    return <div></div>;
  }
  return (
    <>
      <div className="banner-row">
        <div className="banner-col">Address: {user.address}</div>
        <div className="banner-col"> {user.availabilityFrom}</div>
      </div>
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          swipeable={true}
        >
          <div>
            <img src={slider.image1.url} />
          </div>

          <div>
            <img src={slider.image2.url} />
          </div>
          <div>
            <img src={slider.image3.url} />
          </div>
        </Carousel>
      </div>
      <div className="banner2">
        <div className="row-sname">
          <div className="col-sname">{slider.bannerText[0]}</div>
          <div className="col-sname">{slider.bannerText[1]}</div>
          <div className="col-sname">{slider.bannerText[2]}</div>
        </div>
        <div className="banner-2img">
          <img src={belowBanner.banner1.url} alt="" />
        </div>
        <div className="banner-2img">
          <img src={belowBanner.banner2.url} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
