import React, { useEffect, useState } from "react";
import { getSingleLandProductApi } from "../../Api/Services";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Content = () => {
  let { id } = useParams();
  const [logo, setLogo] = useState();

  const [user, setUser] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    youtubeLink: "",
    remarks: "",
  });
  const getProductDeails = async () => {
    try {
      const updateHeader = await getSingleLandProductApi(id);
      console.log("updateHeader: ", updateHeader.product);
      if (updateHeader.success) {
        setUser({
          name: updateHeader.product.name,
          price: updateHeader.product.price,
          description: updateHeader.product.description,
          stock: updateHeader.product.stock,
          youtubeLink: updateHeader.product.youtubeLink,
          remarks: updateHeader.product.remarks,
        });
        setLogo(updateHeader.product.image.url);
        console.log(updateHeader);

        // return toast.success(updateHeader.msg);
      } else {
        // toast.error(updateHeader.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
    }
  };
  useEffect(() => {
    getProductDeails();
  }, []);
  return (
    <div className="content--wrapper">
      <div
        className="content product--details"
        itemScope
        itemType="https://schema.org/Product"
        data-ajax-wishlist="true"
        data-compare-ajax="true"
        data-ajax-variants-container="true"
      >
        <header className="product--header">
          <div className="product--info">
            <h1 className="product--title" itemProp="name">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>{user.name}</font>
              </font>
            </h1>

            <div className="product--rating-container">
              <a
                href="#product--publish-comment"
                className="product--rating-link"
                rel="nofollow"
                title="give an appraisal"
              >
                <span
                  className="product--rating"
                  itemProp="aggregateRating"
                  itemScope
                  itemType="https://schema.org/AggregateRating"
                >
                  <meta itemProp="ratingValue" content={10} />
                  <meta itemProp="worstRating" content="0.5" />
                  <meta itemProp="bestRating" content={10} />
                  <meta itemProp="ratingCount" content={2} />
                  <i className="icon--star" />
                  <i className="icon--star" />
                  <i className="icon--star" />
                  <i className="icon--star" />
                  <i className="icon--star" />
                  <span className="rating--count-wrapper">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>( </font>
                    </font>
                    <span className="rating--count">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>2</font>
                      </font>
                    </span>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}> )</font>
                    </font>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </header>
        <div className="product--detail-upper block-group">
          <div
            className="product--image-container image-slider product--image-zoom"
            data-image-slider="true"
            data-image-gallery="true"
            data-maxzoom={0}
            data-thumbnails=".image--thumbnails"
          >
            <div className="image-slider--container">
              <div
                className="image-slider--slide"
                style={{
                  transition: "none 0s ease 0s",
                  transform: "translateX(0%)",
                }}
              >
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/26/b9/10/1325109_01_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/e8/8a/cd/1325109_01_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/85/0f/7a/1325109_01.jpg"
                    data-img-webp-original="https://www.jansen-versand.de/media/image/32/69/34/1325109_01.webp"
                    data-alt="Holzspalter Jansen HS-20H110E Elektro, 20 t, 110 cm, stehend"
                  >
                    <span className="image--media">
                      <picture>
                        <img
                          src={logo}
                          alt="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/82/dd/68/1325109_02_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/53/8f/81/1325109_02_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/17/58/67/1325109_02.jpg"
                    data-alt="Holzspalter Jansen HS-20H110E Elektro, 20 t, 110 cm, stehend"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/ca/29/51/1325109_02_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://www.jansen-versand.de/media/image/b8/d3/8b/1325109_02_638x638.jpg"
                          alt="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/e3/3e/e4/1325109_03_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/a3/5a/cf/1325109_03_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/d4/72/4a/1325109_03.jpg"
                    data-alt="Holzspalter Jansen HS-20H110E Elektro, 20 t, 110 cm, stehend"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/67/af/63/1325109_03_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://www.jansen-versand.de/media/image/10/24/28/1325109_03_638x638.jpg"
                          alt="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/dd/7d/56/1325109_04_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/e9/5e/5a/1325109_04_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/59/cf/f8/1325109_04.jpg"
                    data-alt="Holzspalter Jansen HS-20H110E Elektro, 20 t, 110 cm, stehend"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/4a/ec/ac/1325109_04_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://www.jansen-versand.de/media/image/65/6d/07/1325109_04_638x638.jpg"
                          alt="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/cc/87/c4/1325109_05_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/e1/07/16/1325109_05_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/79/8c/bd/1325109_05.jpg"
                    data-alt="Holzspalter Jansen HS-20H110E Elektro, 20 t, 110 cm, stehend"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/64/49/ae/1325109_05_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://www.jansen-versand.de/media/image/bb/fb/d0/1325109_05_638x638.jpg"
                          alt="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/96/b0/24/1325109_06_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/21/4e/5d/1325109_06_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/ee/6f/69/1325109_06.jpg"
                    data-alt="Holzspalter Jansen HS-20H110E Elektro, 20 t, 110 cm, stehend"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/05/26/60/1325109_06_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://www.jansen-versand.de/media/image/c9/84/g0/1325109_06_638x638.jpg"
                          alt="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="image--box image-slider--item">
                  <span
                    className="image--element"
                    data-img-large="https://www.jansen-versand.de/media/image/b3/ab/92/1325109_07_1280x1280.jpg"
                    data-img-small="https://www.jansen-versand.de/media/image/96/05/49/1325109_07_285x285.jpg"
                    data-img-original="https://www.jansen-versand.de/media/image/f7/7c/6a/1325109_07.jpg"
                    data-alt="Holzspalter Jansen HS-20H110E Elektro, 20 t, 110 cm, stehend"
                  >
                    <span className="image--media">
                      <picture>
                        <source
                          srcSet="https://www.jansen-versand.de/media/image/ef/08/92/1325109_07_638x638.webp"
                          type="image/webp"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://www.jansen-versand.de/media/image/41/2c/13/1325109_07_638x638.jpg"
                          alt="Log splitter Jansen HS-20H110E electric, 20 t, 110 cm, standing"
                          itemProp="image"
                        />
                      </picture>
                    </span>
                  </span>
                </div>
                <div className="js--img-zoom--lens">&nbsp;</div>
              </div>
              <a className="force--3d arrow is--left is--hidden" />
              <a className="force--3d arrow is--right" />
            </div>

            <div className="js--img-zoom--flyout" style={{}}>
              <div className="js--img-zoom--title" />
            </div>
          </div>
          <div className="product--buybox block">
            <div
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
              className="buybox--inner"
            >
              <div className="product--price price--default">
                <span className="price--content content--default">
                  <meta itemProp="price" content="2318.32" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>€2,318.32</font>
                  </font>
                </span>
                <p
                  className="product--tax"
                  data-content
                  data-modalbox="true"
                  data-targetselector="a"
                  data-mode="ajax"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      including VAT{" "}
                    </font>
                  </font>
                  <a
                    title="Shipping"
                    href="https://www.jansen-versand.de/versandinformationen"
                    style={{ textDecoration: "underline" }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        plus shipping costs
                      </font>
                    </font>
                  </a>
                </p>
              </div>
              <div className="right-text2-price">
                <div className="delivery-large">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Availability:
                    </font>
                  </font>
                </div>
                <div className="delivery-content">
                  <div className="product--delivery">
                    <link
                      itemProp="availability"
                      href="http://schema.org/InStock"
                    />
                    <p className="delivery--information">
                      <span className="delivery--text delivery--text-available">
                        <i className="delivery--status-icon delivery--status-available" />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {user.stock} stocks available
                          </font>
                        </font>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="product--configurator"></div>

              <nav className="product--actions"></nav>
            </div>
            <a
              href="#videoOutro"
              className="youtube bottombuybox"
              data-modalbox="true"
              data-mode="local"
              data-width={800}
              data-height={505}
              data-content="<div class='youtubewrapper'><iframe width='800' height='505' src='//www.youtube-nocookie.com/embed/sNUngiZvyrc' frameborder='0' allowfullscreen=''></iframe></div>"
            >
              <i className="icon--arrow-right5" />
              <span className="content">
                <span className="large">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Watch product video
                    </font>
                  </font>
                </span>
                <span className="byline">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      More information about the product
                    </font>
                  </font>
                </span>
              </span>
              <i className="icon--arrow-right6" />
            </a>
          </div>
        </div>
        <div className="tab-menu--product js--tab-menu">
          <div className="tab--navigation">
            <a
              href="#"
              className="tab--link has--content is--active"
              title="Description"
              data-tabname="description"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Description</font>
              </font>
            </a>
          </div>
          <div className="tab--container-list">
            <div className="tab--container no--off-canvas tab--container-desc has--content is--active">
              <div className="tab--content">
                <div className="buttons--off-canvas">
                  <a href="#" title="Close menu" className="close--off-canvas">
                    <i className="icon--arrow-left" />
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Close menu
                      </font>
                    </font>
                  </a>
                </div>
                <div className="content--description">
                  <div className="product--description" itemProp="description">
                    <div className="deutsch">
                      <font face="arial">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {user.description}
                          </font>
                        </font>

                        <br />
                        <br />
                        <br />
                        <u>
                          <b>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Remark:
                              </font>
                            </font>
                          </b>
                        </u>
                        <p>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              {user.remarks}
                            </font>
                          </font>
                        </p>
                      </font>
                    </div>
                  </div>
                  <div className="youtubeouter" id="videoOutro">
                    <div className="youtubewrapper">
                      <iframe
                        width={560}
                        height={315}
                        src={user.youtubeLink}
                        frameBorder={0}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab--container has--content">
              <div className="tab--header">
                <a href="#" className="tab--title" title="reviews">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Reviews </font>
                  </font>
                </a>
                <span className="product--rating-count">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>2</font>
                  </font>
                </span>
              </div>
              <div className="tab--preview">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Read, write and discuss reviews...
                  </font>
                </font>
                <a href="#" className="tab--link" title="more">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>more</font>
                  </font>
                </a>
              </div>
              <div id="tab--product-comment" className="tab--content">
                <div className="buttons--off-canvas">
                  <a href="#" title="Close menu" className="close--off-canvas">
                    <i className="icon--arrow-left" />
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Close menu
                      </font>
                    </font>
                  </a>
                </div>
                <div
                  className="content--product-reviews"
                  id="detail--product-reviews"
                >
                  <div className="review--form-container">
                    <div
                      id="product--publish-comment"
                      className="content--title"
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Write a review
                        </font>
                      </font>
                    </div>
                    <div className="alert is--warning is--rounded">
                      <div className="alert--icon">
                        <i className="icon--element icon--warning" />
                      </div>
                      <div className="alert--content">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Reviews will be released after verification.
                          </font>
                        </font>
                      </div>
                    </div>
                    <form
                      method="post"
                      action="https://www.jansen-versand.de/land-forstwirtschaft/holzspalter/124/holzspalter-jansen-hs-20h110e-elektro-20-t-110-cm-stehend?action=rating&c=1000181780#detail--product-reviews"
                      className="content--form review--form"
                    >
                      <input
                        name="sVoteName"
                        type="text"
                        defaultValue
                        className="review--field"
                        aria-label="Your name*"
                        placeholder="Your name*"
                      />
                      <input
                        name="sVoteMail"
                        type="email"
                        defaultValue
                        className="review--field"
                        aria-label="Your email address"
                        placeholder="Your email address*"
                        required="required"
                        aria-required="true"
                      />
                      <input
                        name="sVoteSummary"
                        type="text"
                        defaultValue
                        id="sVoteSummary"
                        className="review--field"
                        aria-label="Summary*"
                        placeholder="Summary**"
                        required="required"
                        aria-required="true"
                      />

                      <textarea
                        name="sVoteComment"
                        placeholder="your opinion"
                        cols={3}
                        rows={2}
                        className="review--field"
                        aria-label="your opinion"
                        defaultValue={""}
                      />
                      <div className>
                        <div
                          className="captcha--placeholder"
                          data-captcha="true"
                          data-src="/widgets/Captcha/getCaptchaByName/captchaName/honeypot"
                          data-errormessage="Bitte füllen Sie das Captcha-Feld korrekt aus."
                          data-haserror="true"
                        >
                          <span className="c-firstname-confirmation">
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Please enter the character string in the text
                                field below
                              </font>
                            </font>
                          </span>
                          <input
                            type="text"
                            name="first_name_confirmation"
                            defaultValue
                            className="c-firstname-confirmation"
                            aria-label="Your name*"
                            autoComplete="captcha-no-autofill"
                          />
                        </div>
                        <input
                          type="hidden"
                          name="captchaName"
                          defaultValue="honeypot"
                        />
                      </div>
                      <p className="review--notice">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            The fields marked with a ** are mandatory.
                          </font>
                        </font>
                      </p>
                      <p className="privacy-information">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            I have{" "}
                          </font>
                          <font style={{ verticalAlign: "inherit" }}>
                            read the{" "}
                          </font>
                        </font>
                        <a
                          title="Privacy Policy"
                          href="https://www.jansen-versand.de/datenschutz"
                          target="_blank"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              data protection regulations .
                            </font>
                          </font>
                        </a>
                        <font style={{ verticalAlign: "inherit" }} />
                      </p>
                      <div className="review--actions">
                        <button
                          type="submit"
                          className="btn is--primary"
                          name="Submit"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Save
                            </font>
                          </font>
                        </button>
                      </div>
                      <input
                        type="hidden"
                        name="__csrf_token"
                        defaultValue="YtVE6gqb9tScHpGRu2DUyChkQ8Ficz"
                      />
                    </form>
                  </div>
                  <div className="content--title">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Customer evaluation for "Log splitter Jansen HS-20H110E
                        electric, 20 t, 110 cm, standing"
                      </font>
                    </font>
                  </div>
                  <div className="comment_container vote417" data-vodeid={417}>
                    <div
                      className="review--entry"
                      itemProp="review"
                      itemScope
                      itemType="https://schema.org/Review"
                    >
                      <div className="entry--header">
                        <span
                          className="product--rating"
                          itemProp="reviewRating"
                          itemScope
                          itemType="https://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content={5} />
                          <meta itemProp="worstRating" content="0.5" />
                          <meta itemProp="bestRating" content={5} />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                        <strong className="content--label">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              From:
                            </font>
                          </font>
                        </strong>
                        <span className="content--field" itemProp="author">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Boatman Hans-Willi
                            </font>
                          </font>
                        </span>
                        <strong className="content--label">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              At the:
                            </font>
                          </font>
                        </strong>
                        <meta itemProp="datePublished" content="2018-11-29" />
                        <span className="content--field">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              November 29, 2018
                            </font>
                          </font>
                        </span>
                      </div>
                      <div className="entry--content">
                        <h4 className="content--title" itemProp="name">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              I was pleasantly surprised by the splitter. After
                              being careless, the double nipple on the cylinder
                              broke. I then drove to the place of business and
                              wanted to buy new double nipples.{" "}
                            </font>
                            <font style={{ verticalAlign: "inherit" }}>
                              But you get double nipples as a goodwill gesture.{" "}
                            </font>
                            <font style={{ verticalAlign: "inherit" }}>
                              Very good service, thank you very much
                            </font>
                          </font>
                        </h4>
                        <p
                          className="content--box review--content"
                          itemProp="reviewBody"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              I was pleasantly surprised by the splitter. After
                              being careless, the double nipple on the cylinder
                              broke. I then drove to the place of business and
                              wanted to buy new double nipples.{" "}
                            </font>
                          </font>
                          <br />
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              But you get double nipples as a goodwill gesture.{" "}
                            </font>
                          </font>
                          <br />
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Very good service, thank you very much.{" "}
                            </font>
                          </font>
                          <br />
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Always recommended.
                            </font>
                          </font>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="comment_container vote220" data-vodeid={220}>
                    <div
                      className="review--entry is--last"
                      itemProp="review"
                      itemScope
                      itemType="https://schema.org/Review"
                    >
                      <div className="entry--header">
                        <span
                          className="product--rating"
                          itemProp="reviewRating"
                          itemScope
                          itemType="https://schema.org/Rating"
                        >
                          <meta itemProp="ratingValue" content={5} />
                          <meta itemProp="worstRating" content="0.5" />
                          <meta itemProp="bestRating" content={5} />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                          <i className="icon--star" />
                        </span>
                        <strong className="content--label">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              From:
                            </font>
                          </font>
                        </strong>
                        <span className="content--field" itemProp="author">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Jürgen Keller
                            </font>
                          </font>
                        </span>
                        <strong className="content--label">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              At the:
                            </font>
                          </font>
                        </strong>
                        <meta itemProp="datePublished" content="2016-02-02" />
                        <span className="content--field">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              02/02/2016
                            </font>
                          </font>
                        </span>
                      </div>
                      <div className="entry--content">
                        <h4 className="content--title" itemProp="name">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              i like it.!!{" "}
                            </font>
                            <font style={{ verticalAlign: "inherit" }}>:)</font>
                          </font>
                        </h4>
                        <p
                          className="content--box review--content"
                          itemProp="reviewBody"
                        >
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              SUPER POWERFUL LOG SPLITTER.!!{" "}
                            </font>
                            <font style={{ verticalAlign: "inherit" }}>
                              The technicians on the phone helped me a lot with
                              the assembly.{" "}
                            </font>
                            <font style={{ verticalAlign: "inherit" }}>
                              It just took me a little longer to assemble it, it
                              took half a day...{" "}
                            </font>
                          </font>
                          <br />
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              I can only recommend it...!!!
                            </font>
                          </font>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Verification of the authenticity of customer reviews
                        </font>
                      </font>
                    </strong>
                    <br />
                    <br />
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Every consumer review is checked for authenticity before
                        it is published, ensuring that reviews only come from
                        consumers who have actually purchased/used the products
                        reviewed.
                      </font>
                    </font>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
