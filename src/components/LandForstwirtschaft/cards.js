import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getLandBannerApi, getLandProductApi } from "../../Api/Services";
import { toast } from "react-toastify";
const Cards = () => {
  const [banner, setBanner] = useState();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMiscBanner = async () => {
    try {
      const getinfo = await getLandBannerApi();

      if (getinfo.success) {
        setBanner(getinfo.findHeader.banner.url);
      } else {
      }
    } catch (error) {
      console.log("error: ", error);
      // toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      //
    }
  };
  const getAllProducts = async () => {
    try {
      const updateHeader = await getLandProductApi();
      console.log("updateHeader: ", updateHeader);

      if (updateHeader.success) {
        setProducts(updateHeader.products);
      } else {
        // toast.error(updateHeader.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMiscBanner();
    getAllProducts();
  }, []);
  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="content--wrapper">
      <div className="content listing--content">
        <div className="banner--container">
          <picture>
            <img
              loading="lazy"
              srcSet={banner}
              alt="Miscellaneous"
              className="banner--img"
            />
          </picture>
        </div>
        <div
          className="hero-unit category--teaser panel has--border is--rounded toptext emptytext mobilejstext"
          id="toptext"
        >
          <div className="hero--text panel--body is--wide">
            <div className="teaser--text-long"></div>
          </div>
        </div>
        <div className="listing--wrapper visible--xl visible--l visible--m visible--s visible--xs">
          <div
            data-listing-actions="true"
            data-buffertime={0}
            className="listing--actions is--rounded"
          >
            <div
              className="action--filter-options is--ajax-reload is--left"
              style={{}}
            >
              <a
                href="#"
                className="filter--close-btn"
                data-show-products-text="%s Produkt(e) anzeigen"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Close filter</font>
                </font>
                <i className="icon--arrow-right" />
              </a>
              <div className="filter--container">
                <form
                  id="filter"
                  method="get"
                  data-filter-form="true"
                  data-is-in-sidebar="false"
                  data-listing-url="https://www.jansen-versand.de/widgets/listing/listingCount/sCategory/1000182150"
                  data-is-filtered={0}
                  data-load-facets="true"
                  data-instant-filter-result="true"
                  className=" is--instant-filter"
                  style={{}}
                >
                  <input type="hidden" name="p" defaultValue={1} />
                  <input type="hidden" name="o" defaultValue={8} />
                  <input type="hidden" name="n" defaultValue={48} />
                  <div className="filter--facet-container" style={{}}>
                    <div
                      className="filter-panel filter--value facet--immediate_delivery"
                      data-filter-type="value"
                      data-facet-name="immediate_delivery"
                      data-field-name="delivery"
                    >
                      <div className="filter-panel--flyout">
                        <label
                          className="filter-panel--title"
                          htmlFor="delivery"
                          title="Available immediately"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Available immediately
                            </font>
                          </font>
                        </label>
                        <span className="filter-panel--input filter-panel--checkbox">
                          <input
                            type="checkbox"
                            id="delivery"
                            name="delivery"
                            defaultValue={1}
                          />
                          <span className="input--state checkbox--state">
                            &nbsp;
                          </span>
                        </span>
                      </div>
                    </div>
                    <div
                      className="filter-panel filter--range facet--price"
                      data-filter-type="range"
                      data-facet-name="price"
                      data-field-name="price"
                    >
                      <div className="filter-panel--flyout">
                        <label className="filter-panel--title" title="Price">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Price
                            </font>
                          </font>
                        </label>
                        <span className="filter-panel--icon" />
                        <div className="filter-panel--content">
                          <div
                            className="range-slider"
                            data-range-slider="true"
                            data-roundpretty="false"
                            data-labelformat="0,00 €"
                            data-suffix
                            data-stepcount={100}
                            data-stepcurve="linear"
                            data-startmin="40.29"
                            data-digits={2}
                            data-startmax="7653.78"
                            data-rangemin="40.29"
                            data-rangemax="7653.78"
                          >
                            <div className="range-slider--container">
                              <div
                                className="range-slider--range-bar"
                                style={{ left: "0%", width: "100%" }}
                              >
                                <div className="range-slider--handle is--min" />
                                <div className="range-slider--handle is--max" />
                              </div>
                            </div>
                            <input
                              type="hidden"
                              id="min"
                              name="min"
                              data-range-input="min"
                              defaultValue="40.29"
                              disabled="disabled"
                            />
                            <input
                              type="hidden"
                              id="max"
                              name="max"
                              data-range-input="max"
                              defaultValue="7653.78"
                              disabled="disabled"
                            />
                            <div className="filter-panel--range-info">
                              <span className="range-info--min">
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    from
                                  </font>
                                </font>
                              </span>
                              <label
                                className="range-info--label"
                                htmlFor="min"
                                data-range-label="min"
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    €40.29{" "}
                                  </font>
                                </font>
                              </label>
                              <span className="range-info--max">
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    to
                                  </font>
                                </font>
                              </span>
                              <label
                                className="range-info--label"
                                htmlFor="max"
                                data-range-label="max"
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    €7653.78
                                  </font>
                                </font>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="filter-panel filter--rating facet--vote_average"
                      data-filter-type="rating"
                      data-facet-name="vote_average"
                      data-field-name="rating"
                    >
                      <div className="filter-panel--flyout">
                        <label
                          className="filter-panel--title"
                          title="Evaluation"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Evaluation
                            </font>
                          </font>
                        </label>
                        <span className="filter-panel--icon" />
                        <div className="filter-panel--content">
                          <div className="filter-panel--star-rating">
                            <label
                              htmlFor="rating_4"
                              className="rating-star--outer-container"
                            >
                              <input
                                className="is--hidden"
                                type="checkbox"
                                name="rating"
                                id="rating_4"
                                defaultValue={4}
                              />
                              <i className="icon--star" />
                              <i className="icon--star" />
                              <i className="icon--star" />
                              <i className="icon--star" />
                              <i className="icon--star-empty" />
                              <span className="rating-star--suffix">
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    &amp; more
                                  </font>
                                </font>
                              </span>
                            </label>
                            <label
                              htmlFor="rating_3"
                              className="rating-star--outer-container"
                            >
                              <input
                                className="is--hidden"
                                type="checkbox"
                                name="rating"
                                id="rating_3"
                                defaultValue={3}
                              />
                              <i className="icon--star" />
                              <i className="icon--star" />
                              <i className="icon--star" />
                              <i className="icon--star-empty" />
                              <i className="icon--star-empty" />
                              <span className="rating-star--suffix">
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    &amp; more
                                  </font>
                                </font>
                              </span>
                            </label>
                            <label
                              htmlFor="rating_2"
                              className="rating-star--outer-container"
                            >
                              <input
                                className="is--hidden"
                                type="checkbox"
                                name="rating"
                                id="rating_2"
                                defaultValue={2}
                              />
                              <i className="icon--star" />
                              <i className="icon--star" />
                              <i className="icon--star-empty" />
                              <i className="icon--star-empty" />
                              <i className="icon--star-empty" />
                              <span className="rating-star--suffix">
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    &amp; more
                                  </font>
                                </font>
                              </span>
                            </label>
                            <label
                              htmlFor="rating_1"
                              className="rating-star--outer-container"
                            >
                              <input
                                className="is--hidden"
                                type="checkbox"
                                name="rating"
                                id="rating_1"
                                defaultValue={1}
                              />
                              <i className="icon--star" />
                              <i className="icon--star-empty" />
                              <i className="icon--star-empty" />
                              <i className="icon--star-empty" />
                              <i className="icon--star-empty" />
                              <span className="rating-star--suffix">
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    &amp; more
                                  </font>
                                </font>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="filter--active-container"
                    data-reset-label="Alle Filter zurücksetzen"
                  ></div>
                </form>
              </div>
            </div>
            <div className="listing--paging panel--paging">
              <div className="right"></div>
            </div>
          </div>
          <div className="listing--container">
            <div
              className="listing"
              data-ajax-wishlist="true"
              data-compare-ajax="true"
            >
              {products.map((item) => {
                return (
                  <div className="product--box box--minimal">
                    <div className="box--content is--rounded">
                      <div className="product--badges"></div>
                      <div className="product--info">
                        <Link
                          to={`/land-detail/${item._id}`}
                          title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                          className="product--image"
                        >
                          <span className="image--element">
                            <span className="image--media">
                              <picture>
                                <img
                                  loading="lazy"
                                  srcSet={item.image.url}
                                  alt="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                                  title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                                />
                              </picture>
                            </span>
                          </span>
                        </Link>
                        <Link
                          to={`/land-detail/${item._id}`}
                          className="product--title"
                          title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              {item.name}
                            </font>
                          </font>
                        </Link>
                        <div className="product--rating-container"></div>
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
