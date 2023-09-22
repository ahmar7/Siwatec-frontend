import React from 'react';
 import { Link } from 'react-router-dom';
const Cards = () => {
  let data = [
    {
      name: "Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol",
      price: "€1,899.00",
      img: "https://www.jansen-versand.de/media/image/e0/fa/a6/1055000_01_285x285.jpg",
      link:"/product-detail/id"
    },
    {
      name: "Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol",
      price: "€1,899.00",
      img: "https://www.jansen-versand.de/media/image/e0/fa/a6/1055000_01_285x285.jpg",
      link:"/product-detail/id"
    },
    {
      name: "Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol",
      price: "€1,899.00",
      img: "https://www.jansen-versand.de/media/image/e0/fa/a6/1055000_01_285x285.jpg",
      link:"/product-detail/id"
    },
    {
      name: "Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol",
      price: "€1,899.00",
      img: "https://www.jansen-versand.de/media/image/e0/fa/a6/1055000_01_285x285.jpg",
      link:"/product-detail/id"
    },
    {
      name: "Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol",
      price: "€1,899.00",
      img: "https://www.jansen-versand.de/media/image/e0/fa/a6/1055000_01_285x285.jpg",
      link:"/product-detail/id"
    },
    {
      name: "Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol",
      price: "€1,899.00",
      img: "https://www.jansen-versand.de/media/image/e0/fa/a6/1055000_01_285x285.jpg",
      link:"/product-detail/id"
    },
    {
      name: "Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol",
      price: "€1,899.00",
      img: "https://www.jansen-versand.de/media/image/e0/fa/a6/1055000_01_285x285.jpg",
      link:"/product-detail/id"
    },
    {
      name: "Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol",
      price: "€1,899.00",
      img: "https://www.jansen-versand.de/media/image/e0/fa/a6/1055000_01_285x285.jpg",
      link:"/product-detail/id"
    },
  ];
    return (
      <div className="content--wrapper">
        <div className="content listing--content">
          <div className="banner--container">
            <picture>
              <img
                loading="lazy"
                srcSet="https://www.jansen-versand.de/media/image/90/b7/20/LandForst2022_800x800.png"
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
              <div className="action--filter-btn">
                <a
                  href="#"
                  className="filter--trigger btn is--small"
                  data-filter-trigger="true"
                  data-offcanvas="true"
                  data-offcanvasselector=".action--filter-options"
                  data-closebuttonselector=".filter--close-btn"
                >
                  <i className="icon--filter" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Filter</font>
                  </font>
                  <span className="action--collapse-icon" />
                </a>
              </div>
              <form
                className="action--sort action--content block"
                method="get"
                data-action-form="true"
              >
                <input type="hidden" name="p" defaultValue={1} />
                <label htmlFor="o" className="sort--label action--label">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Sorting</font>
                  </font>
                </label>
                <div className="sort--select select-field">
                  <select
                    id="o"
                    name="o"
                    className="sort--field action--field"
                    data-auto-submit="true"
                    data-loadingindicator="false"
                  >
                    <option value={8} selected="selected">
                      relevance
                    </option>
                    <option value={2}>popularity</option>
                    <option value={3}>lowest price</option>
                    <option value={4}>Highest price</option>
                    <option value={5}>Item name</option>
                  </select>
                </div>
              </form>
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
                    <font style={{ verticalAlign: "inherit" }}>
                      Close filter
                    </font>
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
                <form
                  className="action--per-page action--content block"
                  method="get"
                  data-action-form="true"
                >
                  <input type="hidden" name="p" defaultValue={1} />
                  <label htmlFor="n" className="per-page--label action--label">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Items per page
                      </font>
                    </font>
                  </label>
                  <div className="per-page--select select-field">
                    <select
                      id="n"
                      name="n"
                      className="per-page--field action--field"
                      data-auto-submit="true"
                      data-loadingindicator="false"
                    >
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                      <option value={48} selected="selected">
                        48
                      </option>
                      <option value={72}>72</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className="listing--container">
              <div className="listing-no-filter-result">
                <div className="alert is--info is--rounded is--hidden">
                  <div className="alert--icon">
                    <i className="icon--element icon--info" />
                  </div>
                  <div className="alert--content">
                    Für die Filterung wurden keine Ergebnisse gefunden!
                  </div>
                </div>
              </div>
              <div
                className="listing"
                data-ajax-wishlist="true"
                data-compare-ajax="true"
              >
               {data.map((item)=>{
                return (
                  <div
                    className="product--box box--minimal" 
                  >
                    <div className="box--content is--rounded">
                      <div className="product--badges"></div>
                      <div className="product--info">
                        <Link
                          to={item.link}
                          title="Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol"
                          className="product--image"
                        >
                          <span className="image--element">
                            <span className="image--media">
                              <picture>
                                <img
                                  loading="lazy"
                                  srcSet={item.img}
                                  alt="Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol"
                                  title="Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol"
                                />
                              </picture>
                            </span>
                          </span>
                        </Link>
                        <Link
                          to={item.link}className="product--title"
                          title="Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                            {item.name}
                            </font>
                          </font>
                        </Link>
                        <div className="product--rating-container">
                          <span className="product--rating">
                            <i className="icon--star" />
                            <i className="icon--star" />
                            <i className="icon--star" />
                            <i className="icon--star" />
                            <i className="icon--star-half" />
                          </span>
                        </div>
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
            <div className="listing--bottom-paging">
              <div className="listing--paging panel--paging">
                <div className="right"></div>
                <form
                  className="action--per-page action--content block"
                  method="get"
                  data-action-form="true"
                >
                  <input type="hidden" name="p" defaultValue={1} />
                  <label htmlFor="n" className="per-page--label action--label">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Items per page
                      </font>
                    </font>
                  </label>
                  <div className="per-page--select select-field">
                    <select
                      id="n"
                      name="n"
                      className="per-page--field action--field"
                      data-auto-submit="true"
                      data-loadingindicator="false"
                    >
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                      <option value={48} selected="selected">
                        48
                      </option>
                      <option value={72}>72</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className="hero-unit category--teaser panel has--border is--rounded bottomtext mobilejstext"
            id="bottomtext"
          >
            <h1 className="hero--headline panel--title">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Agriculture and Forestry
                </font>
              </font>
            </h1>
            <h1 className="hero--headline panel--title teaser--title-mobile">
              Land- und Forstwirtschaft
            </h1>{" "}
            <div className="hero--text panel--body is--wide">
              <div className="teaser--text-long">
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Our products from the agricultural and forestry sectors
                        are characterized by quality, durability and a fair
                        price.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        Many of our machines such as wood splitters, stump
                        grinders, mini excavators, garden shredders, track
                        dumpers, mini dumpers, crawler dumpers, motorized
                        wheelbarrows, walk-behind tractors (multi-tool carriers)
                        are powered by a Honda licensed engine or Kohler engine.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        These engines are virtually indestructible.
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Normal wear parts, spare parts, etc. are still quite
                        affordable and inexpensive.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        With us you will always receive fair and detailed advice
                        and we will be happy to be there for you even after the
                        purchase.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        We have our own master workshop where we carry out all
                        repairs and maintenance.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        We also pre-assemble machines upon customer request.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        For example, you can pick up a ready-to-use log
                        splitter, mini excavator, dumper, etc. from us.
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Shipping is also not a problem, but the machines are
                        usually not assembled.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        The majority of our log splitters are powered by a
                        Kohler petrol engine;{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        With this type of drive you are largely independent and
                        do not have to rely on a power grid.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        Of course, we also offer most of our log splitters with
                        an electric motor or, more recently, as a combination
                        version (electric and gasoline engine).{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        You can also find PTO-operated wood splitters in our
                        range.
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        You can also hang our wood splitters, for example, on
                        the ball head coupling of your car, lawn mower tractor
                        or tractor... so you are very flexible with the
                        splitting machines.
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        You can also find the right equipment for transporting
                        wood in rough terrain... e.g. our log truck with a
                        loading crane and its own winch (for attaching to your
                        tractor, quad, ATV, etc.).
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        We also have garden shredders, garden shredders, tractor
                        shredders, wood chippers for shredding cuttings,
                        branches, small trees, fir branches and other garden
                        waste in stock.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        Here too the price-performance ratio is very good!
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        One of our main focuses is the marketing of mowers,
                        mulchers, flail mowers, flail mowers and embankment
                        mowers for the 3-point suspension of tractors.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        These mowers are usually driven via the PTO shaft and
                        may require additional hydraulic connections (only for
                        embankment mowers or mowers with side lift).{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        Thanks to the built-in hammer flails, the mowers mulch
                        the clippings to a minimum size, so that after mowing
                        there is hardly anything left to see.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        Our ground milling machines (for your tractor or, for
                        example, our multi-tool carrier/walk-behind tractor) are
                        also an ideal tool for ground work in private and
                        commercial areas.
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        In the agriculture and forestry category you will also
                        find our tree stump grinder (stub grinder, root
                        grinder), which can be used to remove tree stumps very
                        effectively.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        This milling machine is also powered by a gasoline
                        engine.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        Structurally, it is very narrow, so you can drive it
                        through garage doors, etc.
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Fertilizer spreaders, spreaders, salt spreaders, salt
                        spreaders, centrifugal spreaders, etc. are also not
                        missing from our range.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        They are ideal for clearing ice from larger areas such
                        as a parking lot.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        But lawns can also be fertilized quickly and
                        effectively.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        The spreader can be hung on a normal ball head coupling.
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Earth drilling equipment such as tractor drills, earth
                        drills, one-man drills, two-man drills can also be found
                        in this category.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        The tractor drills are equipped with a well-sized
                        gearbox.
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Our rear excavators (rear-mounted excavators, tractor
                        excavators, tractor excavators), which are hung in the
                        3-point and are driven via a PTO shaft and tractor
                        hydraulics, are also designed for operation on a
                        tractor.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        As an alternative to tractor excavators, we also have a
                        petrol-powered walking excavator and track excavator
                        (mini excavator).
                      </font>
                    </font>
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        For areas with a lot of snowfall, we offer optional
                        accessories for our machines.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        E.g. snow blades or snow brooms for our sweeper or our
                        crawler dumper.
                      </font>
                    </font>
                  </span>
                </p>
                <p className="MsoNormal" style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "medium" }}>
                    <strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Our machines are suitable for different areas of
                          application and users.{" "}
                        </font>
                        <font style={{ verticalAlign: "inherit" }}>
                          They are used and recommended in the following areas
                          and facilities, among others:
                        </font>
                      </font>
                    </strong>
                  </span>
                </p>
                <ul>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Building authorities
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Construction yards
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Highway maintenance departments
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Fire departments
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Airports
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Forestry departments
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Forestry companies
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Leisure facilities
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Cemetery offices
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Garden offices
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Building management
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Municipal administrations
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          trade offices
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Parks Departments
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Property manager
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Land registry offices
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Church administrations
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Municipal companies
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          District administrations
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Cultural institutions
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Farms</font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Natural parks
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Nursing homes
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>police</font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Emergency services
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          school authorities
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          retirement homes
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Social facilities
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Sports offices
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Sports facility operator
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Stadiums
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          city ​​planning offices
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          City administrations
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Municipal utilities
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Road maintenance services
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Technical relief organizations
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Tourism offices
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          University hospitals
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Event halls
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Transport offices
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          transport services
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Zoos</font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Special purpose associations
                        </font>
                      </font>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          and much more&nbsp;
                        </font>
                      </font>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="teaser--text-mobile">
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Unsere Produkte aus dem Bereich der Land- und
                    Forstwirtschaft zeichnen sich durch Qualität, Langlebigkeit
                    und einen fairen Preis aus. Viele unserer Maschinen wie z.B.
                    Holzspalter, Stubbenfräsen, Minibagger, Gartenschredder,
                    Kettendumper, Minidumper, Raupendumper, Motorschubkarren,
                    Einachsschlepper (Mehrgeräteträger) &nbsp;werden von einem
                    Honda-Lizenz-Motor bzw. Kohler-Motor angetrieben. Diese
                    Motoren sind quasi unverwüstlich.
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Normale Verschleißteile, Ersatzteile usw. sind dennoch recht
                    erschwinglich und preiswert. Bei uns erhalten Sie stets eine
                    faire und ausführliche Beratung und auch nach dem Kauf sind
                    wir gerne für Sie da. Wir verfügen über eine eigene
                    Meisterwerkstatt in der wir jegliche Reparaturen und
                    Wartungen durchführen. Auf Kundenwunsch montieren wir
                    Maschinen auch vor. So können Sie beispielsweise bei uns
                    einen bereits betriebsfertigen Holzspalter, Minibagger,
                    Dumper etc. abholen.
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Auch der Versand ist kein Problem, jedoch sind die Maschinen
                    dann in der Regel nicht montiert. Ein Großteil unserer
                    Holzspalter wird von einem Kohler-Benzinmotor angetrieben;
                    mit dieser Antriebsart ist man weitgehend unabhängig und
                    nicht auf ein Stromnetz angewiesen. Natürlich bieten wir die
                    meisten unserer Holzspalter auch mit einem Elektromotor oder
                    neuerdings auch als Kombi-Version (Elektro- &amp;
                    Benzinmotor) an. Auch zapfwellenbetriebene Holzspalter
                    finden Sie in unserem Sortiment.
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Weiterhin können Sie unsere Holzspalter z.B. an die
                    Kugelkopfkupplung von Ihrem Auto, Rasenmähertraktor oder
                    Schlepper hängen… so ist man sehr flexibel mit den
                    Spaltmaschinen.
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Auch für den Holztransport im unwegsamen Gelände finden Sie
                    das passende Gerät bei uns... z.B. unseren Holzrückewagen
                    mit Ladekran und eigener Seilwinde (zum Anhängen an Ihren
                    Traktor, Quad, ATV etc.).
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Gartenschredder, Gartenhäcksler, Traktorschredder,
                    Holzhackmaschinen zum Zerkleinern von Schnittresten, Ästen,
                    kleinen Bäumen, Tannenzweigen und anderem Gartenabfall haben
                    wir ebenfalls am Lager. Auch hier ist das
                    Preis-Leistungs-Verhältnis sehr gut!
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Einer unserer Schwerpunkte ist die Vermarktung von
                    Mähwerken, Mulchern, Schlegelmähern, Schlegelmähwerken und
                    Böschungsmähwerken für die 3-Punkt-Aufhängung von Traktoren.
                    Diese Mähwerke werden in der Regel über die Zapfwelle
                    angetrieben und benötigen ggf. noch weitere
                    Hydraulikanschlüsse (nur bei Böschungsmähwerken oder
                    Mähwerken mit Seitenhub). Die Mähwerke mulchen das
                    Schnittgut dank der verbauten Hammerschlegel auf ein Minimum
                    an Größe, sodass nach dem Mähen davon kaum noch etwas zu
                    sehen ist. Mit unseren Bodenfräsen (für Ihren Traktor oder
                    z.B. unserem Mehrgeräteträger/Einachsschlepper) sind auch
                    Bodenarbeiten im privaten und gewerblichen Bereich ein
                    ideales Hilfsmittel.
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    In der Kategorie Land- und Forstwirtschaft finden Sie auch
                    unsere Baumstumpffräse (Stubbenfräse, Wurzelfräse) mit
                    welcher sehr effektiv Baumstümpfe entfernt werden können.
                    Diese Fräse wird ebenfalls durch einen Benzinmotor
                    angetrieben. Baulich ist sie sehr schmal gehalten, sodass
                    man mit ihr auch durch Garagentüren usw. fahren kann.
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Auch Düngerstreuer, Streuwagen, Salzstreuer, Salzstreuwagen,
                    Schleuderstreuer etc. fehlen nicht in unserem Sortiment. Sie
                    sind ideal geeignet um größere Flächen wie z.B. einen
                    Parkplatz vom Eis zu befreien. Aber auch Rasenflächen können
                    damit schnell und effektiv gedüngt werden. Der Streuwagen
                    kann an eine normale Kugelkopfkupplung gehangen werden.
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Erdbohrgeräte wie Traktorbohrer, Erdbohrer, Einmannbohrer,
                    Zweimannbohrer finden Sie auch in dieser Kategorie. Die
                    Schlepperbohrer sind mit einem gut dimensionierten Getriebe
                    ausgestattet.
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Ebenfalls für den Betrieb an einem Traktor sind unsere
                    Heckbagger (Heckanbaubagger, Traktorbagger,
                    Schlepperbagger), welche in den 3-Punkt gehangen werden und
                    über Zapfwelle, sowie Traktorhydraulik angetrieben werden.
                    Alternativ zu den Traktorbaggern haben wir auch einen
                    benzinbetriebenen Schreitbagger und Kettenbagger
                    (Minibagger).
                  </span>
                </p>
                <p
                  className="MsoNormal"
                  style={{ lineHeight: "150%", textAlign: "left" }}
                >
                  <span style={{ fontSize: "medium" }}>
                    Für Gegenden mit viel Schneefall bieten wir optionales
                    Zubehör für unsere Maschinen an. Z.B. Schneeschilder oder
                    Schneebesen für unsere Kehrmaschine oder unseren
                    Raupendumper.
                  </span>
                </p>
                <p className="MsoNormal" style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "medium" }}>
                    <strong>
                      Unsere Maschinen sind für unterschiedliche
                      Anwendungsbereiche und Anwender geeignet. So werden sie
                      unter anderem in folgenden Bereichen und Einrichtungen
                      eingesetzt und empfohlen:
                    </strong>
                  </span>
                </p>
                <ul>
                  <li>
                    <span style={{ fontSize: "medium" }}>Bauämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Bauhöfe</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Autobahnmeistereien
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Feuerwehren</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Flughäfen</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Forstämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Forstbetriebe</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Freizeitanlagen</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Friedhofsämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Gartenämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Gebäudemanagement
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Gemeindeverwaltungen
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Gewerbeämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Grünflächenämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Hausverwalter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Katasterämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Kirchenverwaltungen
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Kommunale Betriebe
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Kreisverwaltungen
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Kultureinrichtungen
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Landwirtschaftsbetriebe
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Naturparks</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Pflegeheime</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Polizei</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Rettungsdienste</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Schulämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Seniorenheime</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Sozialeinrichtungen
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Sportämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Sportstättenbetreiber
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Stadien</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Stadtplanungsämter
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Stadtverwaltungen
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Stadtwerke</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Straßenmeistereien
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Technische Hilfswerke
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Tourismusämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Unikliniken</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Veranstaltungshallen
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Verkehrsämter</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Verkehrsbetriebe</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Zoos</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>Zweckverbände</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "medium" }}>u.v.m.&nbsp;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cards;
