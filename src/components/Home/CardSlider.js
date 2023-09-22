import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 3,
    },
    mbllarge: {
      breakpoint: { max: 500, min: 350 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 350    , min: 0 },
      items: 1,
    },
  };
  let data = [
    {
      img: "https://www.jansen-versand.de/media/image/4c/aa/27/1775010_01lHeZHRintZ6rE_285x285.jpg",
      name: " Shredder Jansen BX-42S, shredder wood chipper wood shredder tractor",
      price: "€1,639.31",
    },
    {
      img: "https://www.jansen-versand.de/media/image/4c/aa/27/1775010_01lHeZHRintZ6rE_285x285.jpg",
      name: " Shredder Jansen BX-42S, shredder wood chipper wood shredder tractor",
      price: "€1,639.31",
    },
    {
      img: "https://www.jansen-versand.de/media/image/4c/aa/27/1775010_01lHeZHRintZ6rE_285x285.jpg",
      name: " Shredder Jansen BX-42S, shredder wood chipper wood shredder tractor",
      price: "€1,639.31",
    },
    {
      img: "https://www.jansen-versand.de/media/image/4c/aa/27/1775010_01lHeZHRintZ6rE_285x285.jpg",
      name: " Shredder Jansen BX-42S, shredder wood chipper wood shredder tractor",
      price: "€1,639.31",
    },
    {
      img: "https://www.jansen-versand.de/media/image/4c/aa/27/1775010_01lHeZHRintZ6rE_285x285.jpg",
      name: " Shredder Jansen BX-42S, shredder wood chipper wood shredder tractor",
      price: "€1,639.31",
    },
    {
      img: "https://www.jansen-versand.de/media/image/4c/aa/27/1775010_01lHeZHRintZ6rE_285x285.jpg",
      name: " Shredder Jansen BX-42S, shredder wood chipper wood shredder tractor",
      price: "€1,639.31",
    },
    {
      img: "https://www.jansen-versand.de/media/image/4c/aa/27/1775010_01lHeZHRintZ6rE_285x285.jpg",
      name: " Shredder Jansen BX-42S, shredder wood chipper wood shredder tractor",
      price: "€1,639.31",
    },
  ];
  return (
    <div className="-product-carousel">
      <Carousel
        swipeable={true}
        infinite={true}
        autoPlay={true}
        // centerMode={true}
        arrows={false}
        responsive={responsive}
        >





        {data.map((item, key) => {
          return (
            <div key={key} className="product-slider--item">
              <div className="product--box box--emotion">
                <div className="box--content">
                  <div className="product--badges"></div>
                  <div className="product--info">
                    <Link to="/product-detail/id" className="product--image">
                      <span className="image--element">
                        <span className="image--media">
                          <picture>
                            <img
                              loading="lazy"
                              src={item.img}
                              alt="product image"
                            />
                          </picture>
                        </span>
                      </span>
                    </Link>
                    <div className="product--details">
                      <a href="#" className="product--title">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {item.name}
                          </font>
                        </font>
                      </a>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  {item.price}
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CardSlider;
