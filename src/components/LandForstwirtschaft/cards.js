import React from 'react';
 
const Cards = () => {
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
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1009523704}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/baumstumpffraesen/5/stubbenfraese-jansen-bsf-13-baumstumpffraese-wurzelfraese-15-ps-benzin?c=1000181780"
                        title="Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/3a/6d/38/1055000_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/e0/fa/a6/1055000_01_285x285.jpg"
                                alt="Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol"
                                title="Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/baumstumpffraesen/5/stubbenfraese-jansen-bsf-13-baumstumpffraese-wurzelfraese-15-ps-benzin?c=1000181780"
                        className="product--title"
                        title="Stump grinder Jansen BSF-13, tree stump grinder, root grinder, 15 HP petrol"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Stump grinder Jansen BSF-13, tree stump grinder,
                            root grinder, 15 HP petrol
                          </font>
                        </font>
                      </a>
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
                                  €1,899.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1009855974}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/bagger/11/minibagger-jansen-mb-300-benzinmotor-schreitbagger-inkl.-20cm-loeffel?c=1000181780"
                        title="Mini excavator Jansen MB-300, petrol engine, walking excavator including 20cm bucket"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/88/33/40/1515000_01oxdnujCgWPlIR_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/ef/26/54/1515000_01oxdnujCgWPlIR_285x285.jpg"
                                alt="Mini excavator Jansen MB-300, petrol engine, walking excavator including 20cm bucket"
                                title="Mini excavator Jansen MB-300, petrol engine, walking excavator including 20cm bucket"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/bagger/11/minibagger-jansen-mb-300-benzinmotor-schreitbagger-inkl.-20cm-loeffel?c=1000181780"
                        className="product--title"
                        title="Mini excavator Jansen MB-300, petrol engine, walking excavator including 20cm bucket"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Mini excavator Jansen MB-300, petrol engine, walking
                            excavator including 20cm bucket
                          </font>
                        </font>
                      </a>
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
                                  €3,699.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1011701369}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/duenger-salzstreuer/64/streuwagen-jansen-sw-200-nachlaufstreuer-duengerstreuer-salzstreuer?c=1000181780"
                        title="Jansen SW-200 spreader, trailing spreader, fertilizer spreader, salt spreader"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/a7/7f/c6/1729050_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/f4/ed/18/1729050_01_285x285.jpg"
                                alt="Jansen SW-200 spreader, trailing spreader, fertilizer spreader, salt spreader"
                                title="Jansen SW-200 spreader, trailing spreader, fertilizer spreader, salt spreader"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/duenger-salzstreuer/64/streuwagen-jansen-sw-200-nachlaufstreuer-duengerstreuer-salzstreuer?c=1000181780"
                        className="product--title"
                        title="Jansen SW-200 spreader, trailing spreader, fertilizer spreader, salt spreader"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Jansen SW-200 spreader, trailing spreader,
                            fertilizer spreader, salt spreader
                          </font>
                        </font>
                      </a>
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
                                  €599.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1011701371}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/65/holzspalter-jansen-hs-12l53-12-t-50cm-liegend-benzinmotor-6-5-ps?c=1000181780"
                        title="Log splitter Jansen HS-12L53, 12 t, 50cm, lying, petrol engine 6.5 HP"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/16/ae/c1/1325102_01EdqULv9rGHY1Y_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/20/dc/ba/1325102_01EdqULv9rGHY1Y_285x285.jpg"
                                alt="Log splitter Jansen HS-12L53, 12 t, 50cm, lying, petrol engine 6.5 HP"
                                title="Log splitter Jansen HS-12L53, 12 t, 50cm, lying, petrol engine 6.5 HP"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/65/holzspalter-jansen-hs-12l53-12-t-50cm-liegend-benzinmotor-6-5-ps?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-12L53, 12 t, 50cm, lying, petrol engine 6.5 HP"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-12L53, 12 t, 50cm, lying,
                            petrol engine 6.5 HP
                          </font>
                        </font>
                      </a>
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
                                  €1,299.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1013727460}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/wiesenschleppen-netze/68/jansen-wiesenschleppe-reitbahnplaner-egge-wiesenegge-breite-1-4-m?c=1000181780"
                        title="Jansen meadow drag, riding arena planner, harrow, meadow harrow, width: 1.4 m"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/4b/9b/ac/1925006_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/a5/f4/3c/1925006_01_285x285.jpg"
                                alt="Jansen meadow drag, riding arena planner, harrow, meadow harrow, width: 1.4 m"
                                title="Jansen meadow drag, riding arena planner, harrow, meadow harrow, width: 1.4 m"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/wiesenschleppen-netze/68/jansen-wiesenschleppe-reitbahnplaner-egge-wiesenegge-breite-1-4-m?c=1000181780"
                        className="product--title"
                        title="Jansen meadow drag, riding arena planner, harrow, meadow harrow, width: 1.4 m"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Jansen meadow drag, riding arena planner, harrow,
                            meadow harrow, width: 1.4 m
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €449.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1013727486}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/wiesenschleppen-netze/69/jansen-wiesenschleppe-reitbahnplaner-egge-wiesenegge-breite-2-44m?c=1000181780"
                        title="Jansen meadow tractor, riding arena planner, harrow, meadow harrow, width: 2.44m"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/f6/62/64/1925007_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/f3/c3/f0/1925007_01_285x285.jpg"
                                alt="Jansen meadow tractor, riding arena planner, harrow, meadow harrow, width: 2.44m"
                                title="Jansen meadow tractor, riding arena planner, harrow, meadow harrow, width: 2.44m"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/wiesenschleppen-netze/69/jansen-wiesenschleppe-reitbahnplaner-egge-wiesenegge-breite-2-44m?c=1000181780"
                        className="product--title"
                        title="Jansen meadow tractor, riding arena planner, harrow, meadow harrow, width: 2.44m"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Jansen meadow tractor, riding arena planner, harrow,
                            meadow harrow, width: 2.44m
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €599.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1026744206}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/astsaegen/143/astsaege-jansen-as-600-astschere-traktor-frontlader-1750-mm-breite?c=1000181780"
                        title="Pruning saw Jansen AS-600, pruning shears, tractor, front loader, 1750 mm width"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/41/62/16/1775027_01hh2sLusSeLW1c_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/46/43/65/1775027_01hh2sLusSeLW1c_285x285.jpg"
                                alt="Pruning saw Jansen AS-600, pruning shears, tractor, front loader, 1750 mm width"
                                title="Pruning saw Jansen AS-600, pruning shears, tractor, front loader, 1750 mm width"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/astsaegen/143/astsaege-jansen-as-600-astschere-traktor-frontlader-1750-mm-breite?c=1000181780"
                        className="product--title"
                        title="Pruning saw Jansen AS-600, pruning shears, tractor, front loader, 1750 mm width"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Pruning saw Jansen AS-600, pruning shears, tractor,
                            front loader, 1750 mm width
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €5,990.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1032073091}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/erdbohrgeraete/201/hydraulik-erdbohrgeraet-jansen-hbg-1500-minibagger-traktor-frontlader?c=1000181780"
                        title="Hydraulic earth drilling rig Jansen HBG-1500, mini excavator, tractor, front loader"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/07/a9/19/1175030_01vfJRHOacWiAAx_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/ee/f9/b0/1175030_01vfJRHOacWiAAx_285x285.jpg"
                                alt="Hydraulic earth drilling rig Jansen HBG-1500, mini excavator, tractor, front loader"
                                title="Hydraulic earth drilling rig Jansen HBG-1500, mini excavator, tractor, front loader"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/erdbohrgeraete/201/hydraulik-erdbohrgeraet-jansen-hbg-1500-minibagger-traktor-frontlader?c=1000181780"
                        className="product--title"
                        title="Hydraulic earth drilling rig Jansen HBG-1500, mini excavator, tractor, front loader"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hydraulic earth drilling rig Jansen HBG-1500, mini
                            excavator, tractor, front loader
                          </font>
                        </font>
                      </a>
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
                                  €799.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1034307214}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/spritzen-beregner/242/motorspritze-jansen-mgs-50-spruehgeraet-spritzgeraet-motorsprueher?c=1000181780"
                        title="Motorized sprayer Jansen MGS-50, sprayer, sprayer, motorized sprayer"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/c8/8c/ce/1056000_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/4b/b4/9c/1056000_01_285x285.jpg"
                                alt="Motorized sprayer Jansen MGS-50, sprayer, sprayer, motorized sprayer"
                                title="Motorized sprayer Jansen MGS-50, sprayer, sprayer, motorized sprayer"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/spritzen-beregner/242/motorspritze-jansen-mgs-50-spruehgeraet-spritzgeraet-motorsprueher?c=1000181780"
                        className="product--title"
                        title="Motorized sprayer Jansen MGS-50, sprayer, sprayer, motorized sprayer"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Motorized sprayer Jansen MGS-50, sprayer, sprayer,
                            motorized sprayer
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €899.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1037772747}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/boden-grabenfraesen/328/traktorfraese-jansen-tbf-125-bodenfraese-heckfraese-ackerfraese-1-25-m?c=1000181780"
                        title="Jansen TBF-125 tractor tiller, tiller, rear tiller, tiller, 1.25 m"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/66/dd/ed/1777020_01zzR0od8A633eX_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/f5/7b/63/1777020_01zzR0od8A633eX_285x285.jpg"
                                alt="Jansen TBF-125 tractor tiller, tiller, rear tiller, tiller, 1.25 m"
                                title="Jansen TBF-125 tractor tiller, tiller, rear tiller, tiller, 1.25 m"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/boden-grabenfraesen/328/traktorfraese-jansen-tbf-125-bodenfraese-heckfraese-ackerfraese-1-25-m?c=1000181780"
                        className="product--title"
                        title="Jansen TBF-125 tractor tiller, tiller, rear tiller, tiller, 1.25 m"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Jansen TBF-125 tractor tiller, tiller, rear tiller,
                            tiller, 1.25 m
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €1,890.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1044470775}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/330/holzspalter-jansen-hs-12l53e-12-t-53cm-liegend-elektromotor-230v?c=1000181780"
                        title="Log splitter Jansen HS-12L53E, 12 t, 53cm, lying, electric motor 230V"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/c8/0e/ce/1325202_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/d0/0e/22/1325202_01_285x285.jpg"
                                alt="Log splitter Jansen HS-12L53E, 12 t, 53cm, lying, electric motor 230V"
                                title="Log splitter Jansen HS-12L53E, 12 t, 53cm, lying, electric motor 230V"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/330/holzspalter-jansen-hs-12l53e-12-t-53cm-liegend-elektromotor-230v?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-12L53E, 12 t, 53cm, lying, electric motor 230V"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-12L53E, 12 t, 53cm, lying,
                            electric motor 230V
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €1,299.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1009843207}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/10/holzspalter-jansen-hs-20ds63-20-t-60-cm-benzinmotor-doppelspalter?c=1000181780"
                        title="Log splitter Jansen HS-20DS63, 20 t, 60 cm, petrol engine, double splitter"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/6d/3a/b6/1325105_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/0f/a8/97/1325105_01_285x285.jpg"
                                alt="Log splitter Jansen HS-20DS63, 20 t, 60 cm, petrol engine, double splitter"
                                title="Log splitter Jansen HS-20DS63, 20 t, 60 cm, petrol engine, double splitter"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/10/holzspalter-jansen-hs-20ds63-20-t-60-cm-benzinmotor-doppelspalter?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-20DS63, 20 t, 60 cm, petrol engine, double splitter"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-20DS63, 20 t, 60 cm, petrol
                            engine, double splitter
                          </font>
                        </font>
                      </a>
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
                                  €1,699.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1009861122}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/brennholzverarbeitung/holzrueckewagen/19/holzrueckewagen-jansen-hrw-15-holzanhaenger-mit-ladekran?c=1000181780"
                        title="Jansen HRW-15 timber forwarder, timber trailer with loading crane"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/31/40/ec/1325120_01n22l7cO4rkDwA_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/a0/ea/3f/1325120_01n22l7cO4rkDwA_285x285.jpg"
                                alt="Jansen HRW-15 timber forwarder, timber trailer with loading crane"
                                title="Jansen HRW-15 timber forwarder, timber trailer with loading crane"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/brennholzverarbeitung/holzrueckewagen/19/holzrueckewagen-jansen-hrw-15-holzanhaenger-mit-ladekran?c=1000181780"
                        className="product--title"
                        title="Jansen HRW-15 timber forwarder, timber trailer with loading crane"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Jansen HRW-15 timber forwarder, timber trailer with
                            loading crane
                          </font>
                        </font>
                      </a>
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
                                  €7,990.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1032480401}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/207/hydraulischer-heckmulcher/maehbalken-jansen-hms-80-180-maehwerk/balken?c=1000181780"
                        title="Hydraulic rear mulcher/cutter bar Jansen HMS-80(180) mower/bar"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/2d/42/08/1755003_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/6f/2b/67/1755003_01_285x285.jpg"
                                alt="Hydraulic rear mulcher/cutter bar Jansen HMS-80(180) mower/bar"
                                title="Hydraulic rear mulcher/cutter bar Jansen HMS-80(180) mower/bar"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/207/hydraulischer-heckmulcher/maehbalken-jansen-hms-80-180-maehwerk/balken?c=1000181780"
                        className="product--title"
                        title="Hydraulic rear mulcher/cutter bar Jansen HMS-80(180) mower/bar"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hydraulic rear mulcher/cutter bar Jansen HMS-80(180)
                            mower/bar
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €5,290.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1034227352}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/front-heckschaufeln/236/greifschaufel-jansen-gs-200-frontlader-silageschaufel-krokodilschaufel?c=1000181780"
                        title="Grabbing shovel Jansen GS-200, front loader, silage shovel, crocodile shovel"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/4a/68/53/1518010_01dHHASeNt8ajEZ_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/d9/36/3d/1518010_01dHHASeNt8ajEZ_285x285.jpg"
                                alt="Grabbing shovel Jansen GS-200, front loader, silage shovel, crocodile shovel"
                                title="Grabbing shovel Jansen GS-200, front loader, silage shovel, crocodile shovel"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/front-heckschaufeln/236/greifschaufel-jansen-gs-200-frontlader-silageschaufel-krokodilschaufel?c=1000181780"
                        className="product--title"
                        title="Grabbing shovel Jansen GS-200, front loader, silage shovel, crocodile shovel"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Grabbing shovel Jansen GS-200, front loader, silage
                            shovel, crocodile shovel
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,199.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1035019752}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/erdbohrgeraete/259/hydraulik-erdbohrgeraet-jansen-hbg-2000-minibagger-traktor-frontlader?c=1000181780"
                        title="Hydraulic earth drilling rig Jansen HBG-2000, mini excavator, tractor, front loader"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/40/45/82/1175050_01WYQTMVymucg9y_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/29/44/ae/1175050_01WYQTMVymucg9y_285x285.jpg"
                                alt="Hydraulic earth drilling rig Jansen HBG-2000, mini excavator, tractor, front loader"
                                title="Hydraulic earth drilling rig Jansen HBG-2000, mini excavator, tractor, front loader"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/erdbohrgeraete/259/hydraulik-erdbohrgeraet-jansen-hbg-2000-minibagger-traktor-frontlader?c=1000181780"
                        className="product--title"
                        title="Hydraulic earth drilling rig Jansen HBG-2000, mini excavator, tractor, front loader"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hydraulic earth drilling rig Jansen HBG-2000, mini
                            excavator, tractor, front loader
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €799.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1019240438}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/95/holzspalter-jansen-hs-20ds63e-elektromotor-20-t-60-cm-doppelspalter?c=1000181780"
                        title="Log splitter Jansen HS-20DS63E electric motor, 20 t, 60 cm, double splitter"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/31/ac/6b/1325106_01ZWW0BNxoVlGn0_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/7e/61/22/1325106_01ZWW0BNxoVlGn0_285x285.jpg"
                                alt="Log splitter Jansen HS-20DS63E electric motor, 20 t, 60 cm, double splitter"
                                title="Log splitter Jansen HS-20DS63E electric motor, 20 t, 60 cm, double splitter"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/95/holzspalter-jansen-hs-20ds63e-elektromotor-20-t-60-cm-doppelspalter?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-20DS63E electric motor, 20 t, 60 cm, double splitter"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-20DS63E electric motor, 20 t,
                            60 cm, double splitter
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star-empty" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €1,699.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1027866239}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/brennholzverarbeitung/holzrueckewagen/145/holzrueckewagen-jansen-hrw-15pro-verzinkt-holzanhaenger-mit-ladekran?c=1000181780"
                        title="Logging trailer Jansen HRW-15pro, galvanized, timber trailer with loading crane"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/bd/98/81/1325133_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/64/22/f7/1325133_01_285x285.jpg"
                                alt="Logging trailer Jansen HRW-15pro, galvanized, timber trailer with loading crane"
                                title="Logging trailer Jansen HRW-15pro, galvanized, timber trailer with loading crane"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/brennholzverarbeitung/holzrueckewagen/145/holzrueckewagen-jansen-hrw-15pro-verzinkt-holzanhaenger-mit-ladekran?c=1000181780"
                        className="product--title"
                        title="Logging trailer Jansen HRW-15pro, galvanized, timber trailer with loading crane"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Logging trailer Jansen HRW-15pro, galvanized, timber
                            trailer with loading crane
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €8,990.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1028873823}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/boden-grabenfraesen/152/bodenfraese-fuer-motorgeraetetraeger-jansen-mgt-420-und-mgt-600e?c=1000181780"
                        title="Ground milling machine for Jansen MGT-420 and MGT-600E motorized equipment carriers"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/31/25/25/1056002_01eZtwHDjyitp0i_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/8a/f6/5a/1056002_01eZtwHDjyitp0i_285x285.jpg"
                                alt="Ground milling machine for Jansen MGT-420 and MGT-600E motorized equipment carriers"
                                title="Ground milling machine for Jansen MGT-420 and MGT-600E motorized equipment carriers"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/boden-grabenfraesen/152/bodenfraese-fuer-motorgeraetetraeger-jansen-mgt-420-und-mgt-600e?c=1000181780"
                        className="product--title"
                        title="Ground milling machine for Jansen MGT-420 and MGT-600E motorized equipment carriers"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Ground milling machine for Jansen MGT-420 and
                            MGT-600E motorized equipment carriers
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €399.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1032480403}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/208/hydraulischer-heckmulcher/maehbalken-jansen-hms-100-180-maehwerk/balken?c=1000181780"
                        title="Hydraulic rear mulcher/cutter bar Jansen HMS-100(180) mower/bar"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/d3/fc/8d/1755004_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/ed/7d/99/1755004_01_285x285.jpg"
                                alt="Hydraulic rear mulcher/cutter bar Jansen HMS-100(180) mower/bar"
                                title="Hydraulic rear mulcher/cutter bar Jansen HMS-100(180) mower/bar"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/208/hydraulischer-heckmulcher/maehbalken-jansen-hms-100-180-maehwerk/balken?c=1000181780"
                        className="product--title"
                        title="Hydraulic rear mulcher/cutter bar Jansen HMS-100(180) mower/bar"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hydraulic rear mulcher/cutter bar Jansen
                            HMS-100(180) mower/bar
                          </font>
                        </font>
                      </a>
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
                                  €5,390.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1034227367}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/front-heckschaufeln/237/greifschaufel-jansen-gs-220-frontlader-silageschaufel-krokodilschaufel?c=1000181780"
                        title="Grabbing shovel Jansen GS-220, front loader, silage shovel, crocodile shovel"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/15/g0/02/1518020_0175egv8LleOAyt_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/2e/10/4b/1518020_0175egv8LleOAyt_285x285.jpg"
                                alt="Grabbing shovel Jansen GS-220, front loader, silage shovel, crocodile shovel"
                                title="Grabbing shovel Jansen GS-220, front loader, silage shovel, crocodile shovel"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/front-heckschaufeln/237/greifschaufel-jansen-gs-220-frontlader-silageschaufel-krokodilschaufel?c=1000181780"
                        className="product--title"
                        title="Grabbing shovel Jansen GS-220, front loader, silage shovel, crocodile shovel"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Grabbing shovel Jansen GS-220, front loader, silage
                            shovel, crocodile shovel
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,349.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1034233117}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/erdbohrgeraete/239/hydraulik-erdbohrgeraet-jansen-hbg-5000-m.-euroaufnahme-inkl.-2-bohrer?c=1000181780"
                        title="Hydraulic earth drilling rig Jansen HBG-5000 with Euro mount including 2 drills"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/11/df/9b/1175040_016vMUCimUCBiMC_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/10/b2/a2/1175040_016vMUCimUCBiMC_285x285.jpg"
                                alt="Hydraulic earth drilling rig Jansen HBG-5000 with Euro mount including 2 drills"
                                title="Hydraulic earth drilling rig Jansen HBG-5000 with Euro mount including 2 drills"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/erdbohrgeraete/239/hydraulik-erdbohrgeraet-jansen-hbg-5000-m.-euroaufnahme-inkl.-2-bohrer?c=1000181780"
                        className="product--title"
                        title="Hydraulic earth drilling rig Jansen HBG-5000 with Euro mount including 2 drills"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hydraulic earth drilling rig Jansen HBG-5000 with
                            Euro mount including 2 drills
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,390.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1024045802}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/boden-grabenfraesen/118/bodenfraese-fuer-motorgeraetetraeger-jansen-mgt-270?c=1000181780"
                        title="Ground milling machine for motor equipment carrier Jansen MGT-270"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/d6/34/be/1055008_01lHivXZsTkaVdb_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/a0/44/5c/1055008_01lHivXZsTkaVdb_285x285.jpg"
                                alt="Ground milling machine for motor equipment carrier Jansen MGT-270"
                                title="Ground milling machine for motor equipment carrier Jansen MGT-270"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/boden-grabenfraesen/118/bodenfraese-fuer-motorgeraetetraeger-jansen-mgt-270?c=1000181780"
                        className="product--title"
                        title="Ground milling machine for motor equipment carrier Jansen MGT-270"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Ground milling machine for motor equipment carrier
                            Jansen MGT-270
                          </font>
                        </font>
                      </a>
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
                                  €399.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1025502012}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/brennholzverarbeitung/holzrueckewagen/136/holzrueckewagen-jansen-hrw-30-holzanhaenger-mit-ladekran?c=1000181780"
                        title="Jansen HRW-30 timber forwarder, timber trailer with loading crane"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/dd/e1/c3/1325132_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/24/11/5e/1325132_01_285x285.jpg"
                                alt="Jansen HRW-30 timber forwarder, timber trailer with loading crane"
                                title="Jansen HRW-30 timber forwarder, timber trailer with loading crane"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/brennholzverarbeitung/holzrueckewagen/136/holzrueckewagen-jansen-hrw-30-holzanhaenger-mit-ladekran?c=1000181780"
                        className="product--title"
                        title="Jansen HRW-30 timber forwarder, timber trailer with loading crane"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Jansen HRW-30 timber forwarder, timber trailer with
                            loading crane
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star-half" />
                          <i className="icon--star-empty" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €6,990.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1032408471}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/203/hydraulischer-frontmulcher-jansen-hmm-130-schlegelmulcher-maehwerk?c=1000181780"
                        title="Hydraulic front mulcher Jansen HMM-130, flail mulcher, mower"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/6a/63/ec/1755000_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/81/16/1c/1755000_01_285x285.jpg"
                                alt="Hydraulic front mulcher Jansen HMM-130, flail mulcher, mower"
                                title="Hydraulic front mulcher Jansen HMM-130, flail mulcher, mower"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/203/hydraulischer-frontmulcher-jansen-hmm-130-schlegelmulcher-maehwerk?c=1000181780"
                        className="product--title"
                        title="Hydraulic front mulcher Jansen HMM-130, flail mulcher, mower"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hydraulic front mulcher Jansen HMM-130, flail
                            mulcher, mower
                          </font>
                        </font>
                      </a>
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
                                  €2,849.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1034227373}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/front-heckschaufeln/238/greifschaufel-jansen-gs-240-frontlader-silageschaufel-krokodilschaufel?c=1000181780"
                        title="Grabbing shovel Jansen GS-240, front loader, silage shovel, crocodile shovel"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/43/0d/f2/1518030_01AKvzZfAxoibh5_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/56/db/75/1518030_01AKvzZfAxoibh5_285x285.jpg"
                                alt="Grabbing shovel Jansen GS-240, front loader, silage shovel, crocodile shovel"
                                title="Grabbing shovel Jansen GS-240, front loader, silage shovel, crocodile shovel"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/front-heckschaufeln/238/greifschaufel-jansen-gs-240-frontlader-silageschaufel-krokodilschaufel?c=1000181780"
                        className="product--title"
                        title="Grabbing shovel Jansen GS-240, front loader, silage shovel, crocodile shovel"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Grabbing shovel Jansen GS-240, front loader, silage
                            shovel, crocodile shovel
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,499.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1037438337}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/308/holzspalter-jansen-hs-20ds63k-benzin-elektromotor-20-t-60-cm-doppelspalter?c=1000181780"
                        title="Log splitter Jansen HS-20DS63K petrol + electric motor, 20 t, 60 cm, double splitter"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/b6/38/8f/1325205_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/99/27/a0/1325205_01_285x285.jpg"
                                alt="Log splitter Jansen HS-20DS63K petrol + electric motor, 20 t, 60 cm, double splitter"
                                title="Log splitter Jansen HS-20DS63K petrol + electric motor, 20 t, 60 cm, double splitter"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/308/holzspalter-jansen-hs-20ds63k-benzin-elektromotor-20-t-60-cm-doppelspalter?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-20DS63K petrol + electric motor, 20 t, 60 cm, double splitter"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-20DS63K petrol + electric
                            motor, 20 t, 60 cm, double splitter
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,199.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1009941853}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/26/holzspalter-jansen-hs-22a62-22-t-62cm-benzinmotor-stehend-liegend?c=1000181780"
                        title="Log splitter Jansen HS-22A62, 22 t, 62cm, petrol engine, standing+lying"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/14/16/62/1325101_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/ae/c4/d7/1325101_01_285x285.jpg"
                                alt="Log splitter Jansen HS-22A62, 22 t, 62cm, petrol engine, standing+lying"
                                title="Log splitter Jansen HS-22A62, 22 t, 62cm, petrol engine, standing+lying"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/26/holzspalter-jansen-hs-22a62-22-t-62cm-benzinmotor-stehend-liegend?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-22A62, 22 t, 62cm, petrol engine, standing+lying"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-22A62, 22 t, 62cm, petrol
                            engine, standing+lying
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €1,899.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1032408478}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/205/hydraulischer-frontmulcher-jansen-hmm-170-schlegelmulcher-maehwerk?c=1000181780"
                        title="Hydraulic front mulcher Jansen HMM-170, flail mulcher, mower"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/05/be/fa/1755000_01QPekBBmVo0x6R_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/06/26/53/1755000_01QPekBBmVo0x6R_285x285.jpg"
                                alt="Hydraulic front mulcher Jansen HMM-170, flail mulcher, mower"
                                title="Hydraulic front mulcher Jansen HMM-170, flail mulcher, mower"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/205/hydraulischer-frontmulcher-jansen-hmm-170-schlegelmulcher-maehwerk?c=1000181780"
                        className="product--title"
                        title="Hydraulic front mulcher Jansen HMM-170, flail mulcher, mower"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hydraulic front mulcher Jansen HMM-170, flail
                            mulcher, mower
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,949.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1033920800}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/boden-grabenfraesen/227/wendepflug-fuer-motorgeraetetraeger-jansen-mgt-800d?c=1000181780"
                        title="Reversible plow for motor equipment carrier Jansen MGT-800D"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/c3/39/34/1057004_015M3zLefbSaqeN_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/fe/20/45/1057004_015M3zLefbSaqeN_285x285.jpg"
                                alt="Reversible plow for motor equipment carrier Jansen MGT-800D"
                                title="Reversible plow for motor equipment carrier Jansen MGT-800D"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/boden-grabenfraesen/227/wendepflug-fuer-motorgeraetetraeger-jansen-mgt-800d?c=1000181780"
                        className="product--title"
                        title="Reversible plow for motor equipment carrier Jansen MGT-800D"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Reversible plow for motor equipment carrier Jansen
                            MGT-800D
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €349.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1043819299}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/334/frontmulcher-jansen-bmm-130-schlegelmulcher-benzin-maehwerk?c=1000181780"
                        title="Front mulcher Jansen BMM-130, flail mulcher, gasoline, mower"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/e1/1f/ab/1755002_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/5e/f9/3c/1755002_01_285x285.jpg"
                                alt="Front mulcher Jansen BMM-130, flail mulcher, gasoline, mower"
                                title="Front mulcher Jansen BMM-130, flail mulcher, gasoline, mower"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/334/frontmulcher-jansen-bmm-130-schlegelmulcher-benzin-maehwerk?c=1000181780"
                        className="product--title"
                        title="Front mulcher Jansen BMM-130, flail mulcher, gasoline, mower"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Front mulcher Jansen BMM-130, flail mulcher,
                            gasoline, mower
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,990.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1020840414}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/98/holzspalter-jansen-hs-22a62e-elektromotor-22t-62cm-stehend-liegend?c=1000181780"
                        title="Log splitter Jansen HS-22A62E electric motor, 22t, 62cm, standing+lying"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/6c/56/26/1325104_01vUptck9sdySWt_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/21/87/86/1325104_01vUptck9sdySWt_285x285.jpg"
                                alt="Log splitter Jansen HS-22A62E electric motor, 22t, 62cm, standing+lying"
                                title="Log splitter Jansen HS-22A62E electric motor, 22t, 62cm, standing+lying"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/98/holzspalter-jansen-hs-22a62e-elektromotor-22t-62cm-stehend-liegend?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-22A62E electric motor, 22t, 62cm, standing+lying"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-22A62E electric motor, 22t,
                            62cm, standing+lying
                          </font>
                        </font>
                      </a>
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
                                  €1,899.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1030630808}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/astsaegen/173/astsaege-nur-kopf-jansen-as-600k-astschere-traktor-1750-mm-breite?c=1000181780"
                        title="Pruning saw (head only) Jansen AS-600K, pruning shears, tractor, 1750 mm width"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/be/ee/0c/1775037_02HlIBz9WcXfaW6_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/59/d5/b8/1775037_02HlIBz9WcXfaW6_285x285.jpg"
                                alt="Pruning saw (head only) Jansen AS-600K, pruning shears, tractor, 1750 mm width"
                                title="Pruning saw (head only) Jansen AS-600K, pruning shears, tractor, 1750 mm width"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/astsaegen/173/astsaege-nur-kopf-jansen-as-600k-astschere-traktor-1750-mm-breite?c=1000181780"
                        className="product--title"
                        title="Pruning saw (head only) Jansen AS-600K, pruning shears, tractor, 1750 mm width"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Pruning saw (head only) Jansen AS-600K, pruning
                            shears, tractor, 1750 mm width
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €3,490.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1033920801}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/boden-grabenfraesen/228/pflug-fuer-motorgeraetetraeger-jansen-mgt-800d?c=1000181780"
                        title="Plow for motor equipment carrier Jansen MGT-800D"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/15/f5/e7/1057005_01kKgob0TkhX0fc_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/9a/b1/53/1057005_01kKgob0TkhX0fc_285x285.jpg"
                                alt="Plow for motor equipment carrier Jansen MGT-800D"
                                title="Plow for motor equipment carrier Jansen MGT-800D"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/werkzeuge-maschinen/boden-grabenfraesen/228/pflug-fuer-motorgeraetetraeger-jansen-mgt-800d?c=1000181780"
                        className="product--title"
                        title="Plow for motor equipment carrier Jansen MGT-800D"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Plow for motor equipment carrier Jansen MGT-800D
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €249.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1023240083}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/boden-grabenfraesen/281/traktorfraese-jansen-tbf-180-bodenfraese-heckfraese-ackerfraese-1-80-m?c=1000181780"
                        title="Jansen TBF-180 tractor tiller, tiller, rear tiller, tiller, 1.80 m"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/d0/3b/51/1775024_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/4c/17/04/1775024_01_285x285.jpg"
                                alt="Jansen TBF-180 tractor tiller, tiller, rear tiller, tiller, 1.80 m"
                                title="Jansen TBF-180 tractor tiller, tiller, rear tiller, tiller, 1.80 m"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/boden-grabenfraesen/281/traktorfraese-jansen-tbf-180-bodenfraese-heckfraese-ackerfraese-1-80-m?c=1000181780"
                        className="product--title"
                        title="Jansen TBF-180 tractor tiller, tiller, rear tiller, tiller, 1.80 m"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Jansen TBF-180 tractor tiller, tiller, rear tiller,
                            tiller, 1.80 m
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,199.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1040586904}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/bagger/336/mikrobagger-jansen-mb-500-minibagger-benzin-komplett-set?c=1000181780"
                        title="Micro excavator Jansen MB-500, mini excavator, petrol, complete set"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/6f/3b/43/1517060_01yqn6f8uxBhsHX_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/be/e7/2b/1517060_01yqn6f8uxBhsHX_285x285.jpg"
                                alt="Micro excavator Jansen MB-500, mini excavator, petrol, complete set"
                                title="Micro excavator Jansen MB-500, mini excavator, petrol, complete set"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/bagger/336/mikrobagger-jansen-mb-500-minibagger-benzin-komplett-set?c=1000181780"
                        className="product--title"
                        title="Micro excavator Jansen MB-500, mini excavator, petrol, complete set"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Micro excavator Jansen MB-500, mini excavator,
                            petrol, complete set
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €5,890.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1032661698}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/209/hydraulischer-maehbalken-jansen-hmb-180-fingermaehbalken-heckenschere?c=1000181780"
                        title="Hydraulic cutter bar Jansen HMB-180, finger cutter bar, hedge trimmer"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/f7/d3/fd/1755005_01GlNmIHZptENkT_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/c0/35/7a/1755005_01GlNmIHZptENkT_285x285.jpg"
                                alt="Hydraulic cutter bar Jansen HMB-180, finger cutter bar, hedge trimmer"
                                title="Hydraulic cutter bar Jansen HMB-180, finger cutter bar, hedge trimmer"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/209/hydraulischer-maehbalken-jansen-hmb-180-fingermaehbalken-heckenschere?c=1000181780"
                        className="product--title"
                        title="Hydraulic cutter bar Jansen HMB-180, finger cutter bar, hedge trimmer"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Hydraulic cutter bar Jansen HMB-180, finger cutter
                            bar, hedge trimmer
                          </font>
                        </font>
                      </a>
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
                                  €3,890.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1032996241}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/214/manuelle-seitenverschiebung-f.-jansen-mulcher-maehwerke-schlegelmulcher?c=1000181780"
                        title="Manual side shift for Jansen mulchers, mowers, flail mulchers"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/5a/24/c7/1777000_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/28/ca/2b/1777000_01_285x285.jpg"
                                alt="Manual side shift for Jansen mulchers, mowers, flail mulchers"
                                title="Manual side shift for Jansen mulchers, mowers, flail mulchers"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/214/manuelle-seitenverschiebung-f.-jansen-mulcher-maehwerke-schlegelmulcher?c=1000181780"
                        className="product--title"
                        title="Manual side shift for Jansen mulchers, mowers, flail mulchers"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Manual side shift for Jansen mulchers, mowers, flail
                            mulchers
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €349.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1037438261}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/307/holzspalter-jansen-hs-22a62k-kombispalter-benzin-elektro-22t-62cm?c=1000181780"
                        title="Log splitter Jansen HS-22A62K combination splitter, petrol+electric, 22t, 62cm"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/57/94/9a/1325204_09_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/5c/e5/dd/1325204_09_285x285.jpg"
                                alt="Log splitter Jansen HS-22A62K combination splitter, petrol+electric, 22t, 62cm"
                                title="Log splitter Jansen HS-22A62K combination splitter, petrol+electric, 22t, 62cm"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/307/holzspalter-jansen-hs-22a62k-kombispalter-benzin-elektro-22t-62cm?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-22A62K combination splitter, petrol+electric, 22t, 62cm"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-22A62K combination splitter,
                            petrol+electric, 22t, 62cm
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,399.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1037483183}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/astsaegen/312/astsaege-nur-kopf-jansen-as-400k-astschere-traktor-900-mm-breite-3-blatt?c=1000181780"
                        title="Pruning saw (head only) Jansen AS-400K, pruning shears, tractor, 900 mm width, 3 blades"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/bc/71/11/1776001_01DqQUz8HlgfbZG_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/c1/3e/bc/1776001_01DqQUz8HlgfbZG_285x285.jpg"
                                alt="Pruning saw (head only) Jansen AS-400K, pruning shears, tractor, 900 mm width, 3 blades"
                                title="Pruning saw (head only) Jansen AS-400K, pruning shears, tractor, 900 mm width, 3 blades"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/astsaegen/312/astsaege-nur-kopf-jansen-as-400k-astschere-traktor-900-mm-breite-3-blatt?c=1000181780"
                        className="product--title"
                        title="Pruning saw (head only) Jansen AS-400K, pruning shears, tractor, 900 mm width, 3 blades"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Pruning saw (head only) Jansen AS-400K, pruning
                            shears, tractor, 900 mm width, 3 blades
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container"></div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €1,399.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1032691775}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/astsaegen/213/traktor-hecken-schere-jansen-ths-180-maehbalken-frontlader-180-cm?c=1000181780"
                        title="Tractor hedge scissors Jansen THS-180, cutter bar, front loader, 180 cm"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/7a/1b/ea/1775127_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/46/f5/41/1775127_01_285x285.jpg"
                                alt="Tractor hedge scissors Jansen THS-180, cutter bar, front loader, 180 cm"
                                title="Tractor hedge scissors Jansen THS-180, cutter bar, front loader, 180 cm"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/astsaegen/213/traktor-hecken-schere-jansen-ths-180-maehbalken-frontlader-180-cm?c=1000181780"
                        className="product--title"
                        title="Tractor hedge scissors Jansen THS-180, cutter bar, front loader, 180 cm"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Tractor hedge scissors Jansen THS-180, cutter bar,
                            front loader, 180 cm
                          </font>
                        </font>
                      </a>
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
                                  €2,449.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1009823959}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/schredder-haecksler/9/schredder-jansen-gts-13-gartenschredder-gartenhaecksler-15-ps?c=1000181780"
                        title="Shredder Jansen GTS-13, garden shredder, garden shredder, 15 HP"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/bb/f9/41/1775000_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/8f/1f/57/1775000_01_285x285.jpg"
                                alt="Shredder Jansen GTS-13, garden shredder, garden shredder, 15 HP"
                                title="Shredder Jansen GTS-13, garden shredder, garden shredder, 15 HP"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/schredder-haecksler/9/schredder-jansen-gts-13-gartenschredder-gartenhaecksler-15-ps?c=1000181780"
                        className="product--title"
                        title="Shredder Jansen GTS-13, garden shredder, garden shredder, 15 HP"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Shredder Jansen GTS-13, garden shredder, garden
                            shredder, 15 HP
                          </font>
                        </font>
                      </a>
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
                                  €1,299.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1009941850}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/25/holzspalter-jansen-hs-20h110-20t-110cm-benzinmotor-stehend?c=1000181780"
                        title="Log splitter Jansen HS-20H110, 20t, 110cm, petrol engine, standing"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/cb/51/56/1325103_01WicuHZjIIwmOF_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/8d/9d/1b/1325103_01WicuHZjIIwmOF_285x285.jpg"
                                alt="Log splitter Jansen HS-20H110, 20t, 110cm, petrol engine, standing"
                                title="Log splitter Jansen HS-20H110, 20t, 110cm, petrol engine, standing"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/25/holzspalter-jansen-hs-20h110-20t-110cm-benzinmotor-stehend?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-20H110, 20t, 110cm, petrol engine, standing"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-20H110, 20t, 110cm, petrol
                            engine, standing
                          </font>
                        </font>
                      </a>
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
                                  €2,299.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1030976142}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/bagger/184/minibagger-jansen-mb-1500-microbagger-benzin-schaufel-set-neu?c=1000181780"
                        title="Mini excavator Jansen MB-1500, micro excavator, petrol, shovel set NEW"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/b4/87/9c/1516000_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/32/43/eb/1516000_01_285x285.jpg"
                                alt="Mini excavator Jansen MB-1500, micro excavator, petrol, shovel set NEW"
                                title="Mini excavator Jansen MB-1500, micro excavator, petrol, shovel set NEW"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/bagger/184/minibagger-jansen-mb-1500-microbagger-benzin-schaufel-set-neu?c=1000181780"
                        className="product--title"
                        title="Mini excavator Jansen MB-1500, micro excavator, petrol, shovel set NEW"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Mini excavator Jansen MB-1500, micro excavator,
                            petrol, shovel set NEW
                          </font>
                        </font>
                      </a>
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
                                  €8,990.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1036250450}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/287/baggermulcher-jansen-bm-120-hydraulisch-minibagger-schlegelmulcher?c=1000181780"
                        title="Excavator mulcher Jansen BM-120, hydraulic, mini excavator, flail mulcher"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/f5/0b/41/1775060_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/eb/bf/bf/1775060_01_285x285.jpg"
                                alt="Excavator mulcher Jansen BM-120, hydraulic, mini excavator, flail mulcher"
                                title="Excavator mulcher Jansen BM-120, hydraulic, mini excavator, flail mulcher"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/287/baggermulcher-jansen-bm-120-hydraulisch-minibagger-schlegelmulcher?c=1000181780"
                        className="product--title"
                        title="Excavator mulcher Jansen BM-120, hydraulic, mini excavator, flail mulcher"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Excavator mulcher Jansen BM-120, hydraulic, mini
                            excavator, flail mulcher
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €3,499.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1024228012}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/124/holzspalter-jansen-hs-20h110e-elektro-20-t-110-cm-stehend?c=1000181780"
                        title="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/7a/e7/ae/1325109_01_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/e8/8a/cd/1325109_01_285x285.jpg"
                                alt="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                                title="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/124/holzspalter-jansen-hs-20h110e-elektro-20-t-110-cm-stehend?c=1000181780"
                        className="product--title"
                        title="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Log splitter Jansen HS-20H110E electric, 20 t, 110
                            cm, standing
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €2,299.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1030940348}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/181/schlegelmulcher-jansen-efg-105-cm-schlegelmaehwerk-mulcher-maehwerk?c=1000181780"
                        title="Flail mulcher Jansen EFG-105 cm, flail mower, mulcher, mower"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/28/50/c6/1775035_01AViS0QDxbBAkF_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/56/6b/e8/1775035_01AViS0QDxbBAkF_285x285.jpg"
                                alt="Flail mulcher Jansen EFG-105 cm, flail mower, mulcher, mower"
                                title="Flail mulcher Jansen EFG-105 cm, flail mower, mulcher, mower"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/maehwerke-mulcher/181/schlegelmulcher-jansen-efg-105-cm-schlegelmaehwerk-mulcher-maehwerk?c=1000181780"
                        className="product--title"
                        title="Flail mulcher Jansen EFG-105 cm, flail mower, mulcher, mower"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Flail mulcher Jansen EFG-105 cm, flail mower,
                            mulcher, mower
                          </font>
                        </font>
                      </a>
                      <div className="product--rating-container">
                        <span className="product--rating">
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                      </div>
                      <div className="product--price-info">
                        <div className="price--unit" title="Contents"></div>
                        <div className="product--price-outer">
                          <div className="product--price">
                            <span className="price--default is--nowrap">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  €1,499.00
                                </font>
                              </font>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product--box box--minimal"
                  data-page-index={1}
                  data-ordernumber={1031318374}
                >
                  <div className="box--content is--rounded">
                    <div className="product--badges"></div>
                    <div className="product--info">
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/front-heckschaufeln/190/dreipunkt-schaufel-jansen-dps-800-hydr.-heckschaufel-heckcontainer?c=1000181780"
                        title="Three-point shovel Jansen DPS-800 - hydr.  Rear bucket, rear container"
                        className="product--image"
                      >
                        <span className="image--element">
                          <span className="image--media">
                            <picture>
                              <source
                                srcSet="https://www.jansen-versand.de/media/image/69/9c/39/1517000_01Ntssq2jjd9U4w_285x285.webp"
                                type="image/webp"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://www.jansen-versand.de/media/image/94/7e/51/1517000_01Ntssq2jjd9U4w_285x285.jpg"
                                alt="Three-point shovel Jansen DPS-800 - hydr.  Rear bucket, rear container"
                                title="Three-point shovel Jansen DPS-800 - hydr.  Rear bucket, rear container"
                              />
                            </picture>
                          </span>
                        </span>
                      </a>
                      <a
                        href="https://www.jansen-versand.de/land-forstwirtschaft/front-heckschaufeln/190/dreipunkt-schaufel-jansen-dps-800-hydr.-heckschaufel-heckcontainer?c=1000181780"
                        className="product--title"
                        title="Three-point shovel Jansen DPS-800 - hydr.  Rear bucket, rear container"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Three-point shovel Jansen DPS-800 - hydr.{" "}
                          </font>
                          <font style={{ verticalAlign: "inherit" }}>
                            Rear bucket, rear container
                          </font>
                        </font>
                      </a>
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
                                  €1,599.00
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
