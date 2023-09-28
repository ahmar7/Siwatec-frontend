import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSocialFeatureApi, getSocialLinkApi } from "../Api/Services";
import { toast } from "react-toastify";

const Footer = () => {
  const [socialLinks, setsocialLinks] = useState([]);
  const [socialFeature, setsocialFeature] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const SocialLinks = async () => {
    try {
      const getSocial = await getSocialLinkApi();
      console.log("getSocial: ", getSocial);

      if (getSocial.success) {
        setsocialLinks(getSocial.data);
      } else {
        toast.error(getSocial.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    }
    try {
      const getSocialFeature = await getSocialFeatureApi();

      if (getSocialFeature.success) {
        setsocialFeature(getSocialFeature.data.feature);
      } else {
        toast.error(getSocialFeature.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    SocialLinks();
  }, []);
  if (isLoading) {
    return <div></div>;
  }
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer--columns block-group">
          <div className="footer--column column--menu block">
            <div className="column--headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Quicl Links</font>
              </font>
            </div>
            <nav className="column--navigation column--content">
              <ul className="navigation--list" role="menu">
                <li className="navigation--entry" role="menuitem">
                  <Link
                    className="navigation--link"
                    to="/"
                    title="Right of withdrawal"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>HOME</font>
                    </font>
                  </Link>
                </li>
                <li className="navigation--entry" role="menuitem">
                  <Link
                    className="navigation--link"
                    to="/imprint"
                    title="Right of withdrawal"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>IMPRINT</font>
                    </font>
                  </Link>
                </li>
                <li className="navigation--entry" role="menuitem">
                  <Link
                    className="navigation--link"
                    to="/miscellaneous"
                    title="Right of withdrawal"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        MISCELLANEOUS
                      </font>
                    </font>
                  </Link>
                </li>
                <li className="navigation--entry" role="menuitem">
                  <Link
                    className="navigation--link"
                    to="/landForstwirtschaft"
                    title="Right of withdrawal"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        LAND-FORSTWIRTSCHAFT
                      </font>
                    </font>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer--column column--social is--first block">
            <div className="column--headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Social Media/FAQs
                </font>
              </font>
            </div>
            <div className="column--content">
              <a
                href={socialLinks.col1.socialData.socialLink}
                title={socialLinks.col1.socialData.socialName}
                target="_blank"
                className="youtube"
                rel="nofollow noopener"
              >
                <div className="social-logos">
                  <img src={socialLinks.col1.socialLogo.url} alt="" />
                </div>
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      {socialLinks.col1.socialData.socialName}
                    </font>
                  </font>
                </span>
              </a>
              <a
                href={socialLinks.col2.socialData.socialLink}
                title={socialLinks.col2.socialData.socialName}
                target="_blank"
                className="youtube"
                rel="nofollow noopener"
              >
                <div className="social-logos">
                  <img src={socialLinks.col2.socialLogo.url} alt="" />
                </div>
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      {socialLinks.col2.socialData.socialName}
                    </font>
                  </font>
                </span>
              </a>
              <a
                href={socialLinks.col3.socialData.socialLink}
                title={socialLinks.col3.socialData.socialName}
                target="_blank"
                className="youtube"
                rel="nofollow noopener"
              >
                <div className="social-logos">
                  <img src={socialLinks.col3.socialLogo.url} alt="" />
                </div>
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      {socialLinks.col3.socialData.socialName}
                    </font>
                  </font>
                </span>
              </a>
              <a
                href={socialLinks.col4.socialData.socialLink}
                title={socialLinks.col4.socialData.socialName}
                target="_blank"
                className="youtube"
                rel="nofollow noopener"
              >
                <div className="social-logos">
                  <img src={socialLinks.col4.socialLogo.url} alt="" />
                </div>
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      {socialLinks.col4.socialData.socialName}
                    </font>
                  </font>
                </span>
              </a>
            </div>
          </div>
          <div className="footer--column column--workshop is--last block">
            <div className="column--headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  {socialFeature.featureTitle}
                </font>
              </font>
            </div>
            <div className="column--content">
              <img
                className="feature-img"
                src={socialFeature.featureImg.url}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer--bottom">
          <div className="footer--copyright left">
            <font
              style={{
                verticalAlign: "inherit",
                marginTop: "10px",
                display: "block",
              }}
            >
              <font style={{ verticalAlign: "inherit" }}>
                Copyright © 2023 Siwatech
              </font>
            </font>
          </div>

          <br className="cf" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
