import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './Banner.css'
import Banner2 from '../../assets/img/banner-2.webp'
import Banner3 from '../../assets/img/banner3.webp'
const Banner = () => {
  return (
    <>
      <div className="banner-row">
        <div className="banner-col">Address: Lorem Ipsum sit amet diter</div>
        <div className="banner-col">
          Monday - Thursday from: 8 a.m. to 5 p.m.
        </div>
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
            <img src="https://www.jansen-versand.de/media/image/23/b2/2f/land_forst_de_2_1280x1280.webp" />
          </div>
          <div>
            <img src="	https://www.jansen-versand.de/media/image/e5/ac/62/werkzeuge_de_2_1280x1280.webp" />
          </div>
          <div>
            <img src="https://www.jansen-versand.de/media/image/eb/a7/34/land_forst_de_1_1280x1280.webp" />
          </div>
        </Carousel> 
      </div>
      <div className="banner2">
        <div className="row-sname">
            <div className="col-sname">KOMPETEZENZ</div>
            <div className="col-sname">KOMPETEZENZ</div>
            <div className="col-sname">KOMPETEZENZ</div>
        </div>
        <div className="banner-2img">
            <img src={Banner2} alt="" />
        </div>
        <div className="banner-2img">
            <img src={Banner3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
