import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/Constant";

const Header = () => {
  const [isActive, setisActive] = useState(false);

  const [isLoading, setisLoading] = useState(true);
  const [consult, setConsult] = useState();
  const [newConsult, setNewConsult] = useState();
  const [logo, setLogo] = useState();

  const [user, setUser] = useState({
    email: "",
    phone: "",
    address: "",
    availabilityFrom: "",
    availabilityTo: "",
  });
  let activeToggle = () => {
    if (isActive === true) {
      setisActive(false);
    } else {
      setisActive(true);
    }
  };
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
          email: data.findHeader.email,
          phone: data.findHeader.phone,
        });
        setLogo(data.findHeader.logo.url);
        setConsult(data.findHeader.consultImg.url);
      } else {
        toast.error("something went wrong, please try again later");
        console.log(res.status);
        return false;
      }
    } catch (e) {
      console.log("e: ", e);
      toast.error("something went wrong, please try again later");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getHeader();
  }, []);
  if (isLoading === true) {
    return <div></div>;
  }
  return (
    <>
      <header className="header-main">
        <div className="top-bar">
          <div className="container block-group">
            <nav className="top-bar--navigation block" role="menubar">
              <div className="langselect top-bar--language navigation--entry">
                <a href="#">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180">
                    <path d="M0 0h300v60H0V0z" />
                    <path fill="#D00" d="M0 60h300v60H0V60z" />
                    <path fill="#FFCE00" d="M0 120h300v60H0v-60z" />
                  </svg>
                </a>

                <a href="#">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180">
                    <path fill="#FFF" d="M0 0h299.843v179.98H0V0z" />
                    <path
                      fill="#CF142B"
                      d="M134.928 107.933v72.047h29.988v-72.047h134.928V71.952H164.916V0h-29.988v71.952H0v35.981h134.928z"
                    />
                    <path
                      fill="#00247D"
                      d="M174.915 58.259V0h97.08l-97.08 58.259zm0 63.461v58.26h97.08l-97.08-58.26zm-49.987 0v58.26H27.849l97.079-58.26zm0-63.461V0H27.849l97.079 58.259zM.001 16.73v43.261h72.087L.001 16.73zm299.842 0v43.261h-72.087l72.087-43.261zm0 146.519v-43.261h-72.087l72.087 43.261zm-299.842 0v-43.261h72.087L.001 163.249z"
                    />
                    <path
                      fill="#CF142B"
                      d="M299.843 0h-16.654L183.4 59.992h16.654L300 0M116.443 119.984H99.789L0 179.976h16.654l99.946-59.992M83.268 60.038h16.653L0 0v10.062l83.268 49.976zm133.255 59.924h-16.654L299.79 180v-10.062l-83.267-49.976z"
                    />
                  </svg>
                  <span>
                    <font style={{ verticalAlign: "inherit" }} />
                  </span>
                </a>
                <a href="#">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180">
                    <path fill="#21468B" d="M0 120h300v60H0z" />
                    <path fill="#AE1C28" d="M0 0h300v60H0z" />
                  </svg>
                  <span>
                    <font style={{ verticalAlign: "inherit" }} />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className=" container header--navigation">
          <div className="logo-main block-group" role="banner">
            <div className="logo--shop block">
              <Link
                className="logo--link"
                to="/"
                title="Siwatec - go to the homepage"
              >
                <img src={logo} alt="Siwatec - go to the homepage" />
              </Link>
            </div>
          </div>
          <div className="albert block">
            <img src={consult} />
            <div className="teaser-text">
              <span className="first">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Consulting
                      </font>
                    </font>
                  </font>
                </font>
              </span>
              <a
                href={`tel:${user.phone}`}
                data-role="button"
                className="tracking_tn"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>{user.phone}</font>
                </font>
              </a>
              <div className="inner_text_style">
                <a href={`mailto:${user.email}`}>
                  <span>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        {user.email}
                      </font>
                    </font>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <nav className="shop--navigation block-group">
            <ul className="navigation--list block-group" role="menubar">
              <li
                className="navigation--entry entry--menu-left"
                role="menuitem"
              >
                <a
                  onClick={activeToggle}
                  className="entry--link entry--trigger btn is--icon-left"
                  href="javascript:void(0)"
                  data-offcanvas="true"
                  data-offcanvasselector=".sidebar-main"
                  aria-label="Menü"
                >
                  <i class="fa-solid fa-bars"></i> Menu
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <nav className="navigation-main">
        <div
          className=" container js--menu-scroller"
          data-menu-scroller="true"
          data-listselector=".navigation--list.container"
          data-viewportselector=".navigation--list-wrapper"
        >
          <div className="navigation--list-wrapper">
            <ul
              className="navigation--list  container js--menu-scroller--list"
              role="menubar"
              itemScope="itemscope"
              itemType="https://schema.org/SiteNavigationElement"
              style={{ bottom: "0px", marginTop: "0px" }}
            >
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink to="/" className="navigation--link" itemProp="url">
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Home</font>
                    </font>
                  </span>
                </NavLink>
              </li>
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink
                  className="navigation--link"
                  to="/imprint"
                  itemProp="url"
                >
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>imprint</font>
                    </font>
                  </span>
                </NavLink>
              </li>

              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink
                  className="navigation--link"
                  to="/miscellaneous"
                  aria-label="Miscellaneous"
                  itemProp="url"
                >
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Miscellaneous
                      </font>
                    </font>
                  </span>
                </NavLink>
              </li>
              <li
                className="navigation--entry js--menu-scroller--item"
                role="menuitem"
              >
                <NavLink
                  className="navigation--link"
                  to="/landForstwirtschaft"
                  aria-label="Miscellaneous"
                  itemProp="url"
                >
                  <span itemProp="name">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Land-Forstwirtschaft
                      </font>
                    </font>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="advanced-menu"
            data-advanced-menu="true"
            data-hoverdelay={450}
          >
            <div className="menu--container">
              <div className="button-container">
                <NavLink to="/" className="button--category">
                  <i className="icon--arrow-right" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Home</font>
                  </font>
                </NavLink>
                <span className="button--close">
                  <i className="icon--cross" />
                </span>
              </div>
            </div>
            <div className="menu--container">
              <div className="button-container">
                <NavLink
                  to="/imprint"
                  className="button--category"
                  title="To the tools & machines category"
                >
                  <i className="icon--arrow-right" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Imprint</font>
                  </font>
                </NavLink>
                <span className="button--close">
                  <i className="icon--cross" />
                </span>
              </div>
            </div>
            <div className="menu--container">
              <div className="button-container">
                <NavLink to="/miscellaneous" className="button--category">
                  <i className="icon--arrow-right" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Miscellaneous
                    </font>
                  </font>
                </NavLink>
                <span className="button--close">
                  <i className="icon--cross" />
                </span>
              </div>
            </div>
            <div className="menu--container">
              <div className="button-container">
                <NavLink to="/landForstwirtschaft" className="button--category">
                  <i className="icon--arrow-right" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Land-Forstwirtschaft
                    </font>
                  </font>
                </NavLink>
                <span className="button--close">
                  <i className="icon--cross" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="">
        <div className="">
          <aside
            className={
              isActive
                ? "sidebar-main off-canvas is--left is--active is--inactive active-cavy is--open"
                : "sidebar-main off-canvas is--left is--active is--inactive is--open"
            }
          >
            <div className="navigation--smartphone">
              <ul className="navigation--list ">
                <li
                  onClick={activeToggle}
                  className="navigation--entry entry--close-off-canvas"
                >
                  <a href="javascript:void(0)" className="navigation--link">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Close menu
                      </font>
                    </font>
                    <i className="icon--arrow-right" />
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="sidebar--categories-wrapper"
              data-subcategory-nav="true"
              data-maincategoryid={3}
              data-categoryid={0}
              data-fetchurl
            >
              <div className="shop-sites--container is--rounded">
                <ul
                  className="shop-sites--navigation sidebar--navigation navigation--list is--drop-down is--level0"
                  role="menu"
                >
                  <li className="navigation--entry" role="menuitem">
                    <NavLink
                      className="navigation--link"
                      to="/"
                      data-categoryid={3}
                    >
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Home</font>
                      </font>
                    </NavLink>
                  </li>
                  <li className="navigation--entry" role="menuitem">
                    <NavLink className="navigation--link" to="/imprint">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Imprint
                        </font>
                      </font>
                    </NavLink>
                  </li>
                  <li className="navigation--entry" role="menuitem">
                    <a className="navigation--link" to="/miscellaneous">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Miscellaneous
                        </font>
                      </font>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Header;
