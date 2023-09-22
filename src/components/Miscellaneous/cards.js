import React from 'react';
import './cards.css'
import { Link } from 'react-router-dom';
const Cards = () => {
    let data = [
      {
        name: "Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit",
        price: "€499.00",
        img: "https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg",
        link: "/product-detail/id",
      },
      {
        name: "Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit",
        price: "€499.00",
        img: "https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg",
        link: "/product-detail/id",
      },
      {
        name: "Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit",
        price: "€499.00",
        img: "https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg",
        link: "/product-detail/id",
      },
      {
        name: "Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit",
        price: "€499.00",
        img: "https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg",
        link: "/product-detail/id",
      },
      {
        name: "Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit",
        price: "€499.00",
        img: "https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg",
        link: "/product-detail/id",
      },
      {
        name: "Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit",
        price: "€499.00",
        img: "https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg",
        link: "/product-detail/id",
      },
      {
        name: "Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit",
        price: "€499.00",
        img: "https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg",
        link: "/product-detail/id",
      },
      {
        name: "Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit",
        price: "€499.00",
        img: "https://www.jansen-versand.de/media/image/a0/37/05/2222222_02FA74Adner6MS4_285x285.jpg",
        link: "/product-detail/id",
      },
    ];
    return (
      <div className="content--wrapper">
        <div className="content listing--content">
          <div className="banner--container">
            <picture>
              <source
                srcSet="https://www.jansen-versand.de/media/image/9f/2e/4f/Sonstiges2022_1280x1280.webp"
                media="(min-width: 48em)"
                type="image/webp"
              />
              <source
                srcSet="https://www.jansen-versand.de/media/image/93/70/71/Sonstiges2022_1280x1280.png"
                media="(min-width: 48em)"
              />
              <img
                loading="lazy"
                srcSet="https://www.jansen-versand.de/media/image/3a/35/6b/Sonstiges2022_800x800.png"
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
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        No results were found for the filtering!
                      </font>
                    </font>
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
                    data-page-index={1}
                    data-ordernumber={1028411524}
                  >
                    <div className="box--content is--rounded">
                      <div className="product--badges"></div>
                      <div className="product--info">
                        <Link
                          to={item.link}
                          title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                          className="product--image"
                        >
                          <span className="image--element">
                            <span className="image--media">
                              <picture>
                                <img
                                  loading="lazy"
                                  srcSet={item.img}
                                  alt="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                                  title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                                />
                              </picture>
                            </span>
                          </span>
                        </Link>
                        <Link
                          to={item.link}
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
                <font style={{ verticalAlign: "inherit" }}>Miscellaneous</font>
              </font>
            </h1>
            <h1 className="hero--headline panel--title teaser--title-mobile">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Miscellaneous</font>
              </font>
            </h1>{" "}
            <div className="hero--text panel--body is--wide">
              <div className="teaser--text-long">
                <p className="MsoNormal" style={{ lineHeight: "19.5px" }}>
                  <strong>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Our machines are suitable for different areas of
                        application and users.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        They are used and recommended in the following areas and
                        facilities, among others:
                      </font>
                    </font>
                  </strong>
                </p>
                <ul>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Building authorities
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Construction yards
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Highway maintenance departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Fire departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Airports</font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Forestry departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Forestry companies
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Leisure facilities
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Cemetery offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Garden offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Building management
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Municipal administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        trade offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Parks Departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Property manager
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Land registry offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Church administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Municipal companies
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        District administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Cultural institutions
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Farms</font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Natural parks
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Nursing homes
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>police</font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Emergency services
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        school authorities
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        retirement homes
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Social facilities
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Sports offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Sports facility operator
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Stadiums</font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        city ​​planning offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        City administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Municipal utilities
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Road maintenance services
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Technical relief organizations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Tourism offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        University hospitals
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Event halls
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Transport offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        transport services
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Zoos</font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Special purpose associations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        and much more&nbsp;
                      </font>
                    </font>
                  </li>
                </ul>
              </div>
              <div className="teaser--text-mobile">
                <p className="MsoNormal" style={{ lineHeight: "19.5px" }}>
                  <strong>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Our machines are suitable for different areas of
                        application and users.{" "}
                      </font>
                      <font style={{ verticalAlign: "inherit" }}>
                        They are used and recommended in the following areas and
                        facilities, among others:
                      </font>
                    </font>
                  </strong>
                </p>
                <ul>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Building authorities
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Construction yards
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Highway maintenance departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Fire departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Airports</font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Forestry departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Forestry companies
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Leisure facilities
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Cemetery offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Garden offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Building management
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Municipal administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        trade offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Parks Departments
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Property manager
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Land registry offices
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Church administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Municipal companies
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        District administrations
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Cultural institutions
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Farms</font>
                    </font>
                  </li>
                  <li>Naturparks</li>
                  <li>Pflegeheime</li>
                  <li>Polizei</li>
                  <li>Rettungsdienste</li>
                  <li>Schulämter</li>
                  <li>Seniorenheime</li>
                  <li>Sozialeinrichtungen</li>
                  <li>Sportämter</li>
                  <li>Sportstättenbetreiber</li>
                  <li>Stadien</li>
                  <li>Stadtplanungsämter</li>
                  <li>Stadtverwaltungen</li>
                  <li>Stadtwerke</li>
                  <li>Straßenmeistereien</li>
                  <li>Technische Hilfswerke</li>
                  <li>Tourismusämter</li>
                  <li>Unikliniken</li>
                  <li>Veranstaltungshallen</li>
                  <li>Verkehrsämter</li>
                  <li>Verkehrsbetriebe</li>
                  <li>Zoos</li>
                  <li>Zweckverbände</li>
                  <li>u.v.m.&nbsp;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cards;
