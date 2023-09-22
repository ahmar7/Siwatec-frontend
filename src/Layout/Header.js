import React,{useState} from "react";
import './style.css'
import {   Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isActive, setisActive] = useState(false);
    let activeToggle=()=>{
        if(isActive===true){
            setisActive(false)
        }
        else{
            setisActive(true)
        }
    }
  return (
    <>
      <header className="header-main">
        <div className="container header--navigation">
          <div className="logo-main block-group" role="banner">
            <div className="logo--shop block">
              <Link
                className="logo--link"
                to="/"
                title="Siwatec - go to the homepage"
              >
                <img
                  src="https://www.jansen-versand.de/themes/Frontend/CcBaseJansen/frontend/_public/src/img/logos/logo.svg"
                  alt="Siwatec - go to the homepage"
                />
              </Link>
            </div>
          </div>
          <div className="albert block">
            <img src="https://www.jansen-versand.de/themes/Frontend/CcBaseJansen/frontend/_public/src/img/albert.png" />
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
                href="tel:+49 5943 1881"
                data-role="button"
                className="tracking_tn"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    +12 5943 1881
                  </font>
                </font>
              </a>
              <div className="inner_text_style">
                <a href="mailto:info@jansen-versand.de">
                  <span>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        info@jansen-versand.de
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
                onClick={activeToggle}
              >
                <a
                  className="entry--link entry--trigger btn is--icon-left"
                  href="javascript:void(0)"
                  data-offcanvas="true"
                  data-offcanvasselector=".sidebar-main"
                  aria-label="menu"
                >
                  <i className="icon--menu" />
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>menu </font>
                  </font>
                </a>
              </li>
              <li
                className="navigation--entry entry--search"
                role="menuitem"
                data-search="true"
                aria-haspopup="true"
                data-minlength={3}
              >
                <a
                  className="btn entry--link entry--trigger"
                  href="#show-hide--search"
                  title="Show/close search"
                  aria-label="Show/close search"
                >
                  <i className="icon--search" />
                  <span className="search--display">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Seek</font>
                    </font>
                  </span>
                </a>
                <form
                  action="/search"
                  method="get"
                  className="main-search--form"
                >
                  <input
                    type="search"
                    name="sSearch"
                    className="main-search--field"
                    autoComplete="off"
                    autoCapitalize="off"
                    placeholder="Search term..."
                    maxLength={60}
                  />
                  <button
                    type="submit"
                    className="main-search--button"
                    aria-label="Seek"
                  >
                    <i className="icon--search" />
                    <span className="main-search--text">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Seek</font>
                      </font>
                    </span>
                  </button>
                  <div className="form--ajax-loader">&nbsp;</div>
                </form>
                <div
                  className="main-search--results"
                  style={{ display: "none" }}
                />
              </li>
            </ul>
          </nav>
          <div className="container--ajax-cart" data-collapse-cart="true" />
        </div>
      </header>
      <nav className="navigation-main">
        <div
          className="container js--menu-scroller"
          data-menu-scroller="true"
          data-listselector=".navigation--list.container"
          data-viewportselector=".navigation--list-wrapper"
        >
          <div className="navigation--list-wrapper">
            <ul
              className="navigation--list container js--menu-scroller--list"
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
