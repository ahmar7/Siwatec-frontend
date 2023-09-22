import React from 'react';

const Sidebar = () => {
    return (
      <aside className="sidebar-main is--left is--inactive" style={{}}>
      
        <div
          className="sidebar--categories-wrapper"
          data-subcategory-nav="true"
          data-maincategoryid={3}
          data-categoryid={3}
          data-fetchurl="/widgets/listing/getCustomPage/pageId/3"
          style={{ display: "block" }}
        >
          
         
          <div className="shop-sites--container is--rounded">
            <div className="shop-sites--headline navigation--headline">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>information</font>
              </font>
            </div>
            <ul
              className="shop-sites--navigation sidebar--navigation navigation--list is--drop-down is--level0"
              role="menu"
            >
              <li className="navigation--entry is--active" role="menuitem">
                <a
                  className="navigation--link is--active"
                  href="https://www.jansen-versand.de/impressum"
                  title="imprint"
                  data-categoryid={3}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/3"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>imprint</font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/widerrufsbelehrung"
                  title="Right of withdrawal"
                  data-categoryid={8}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/8"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Right of withdrawal
                    </font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/bestellung-bezahlung"
                  title="Order & Payment"
                  data-categoryid={46}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/46"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Order &amp; Payment
                    </font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/versandinformationen"
                  title="Shipping Information"
                  data-categoryid={6}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/6"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Shipping Information
                    </font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/agb"
                  title="Conditions"
                  data-categoryid={4}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/4"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Conditions</font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/kontaktformular"
                  title="Contact"
                  data-categoryid={1}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/1"
                  target="_self"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Contact</font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/media/pdf/rk_ergaenzende_agbs_zum_ratenkauf_by-easycredit_2023.pdf"
                  title="Terms and conditions easyCredit installment purchase"
                  data-categoryid={79}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/79"
                  target="_blank"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Terms and conditions easyCredit installment purchase
                    </font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/datenschutz"
                  title="data protection"
                  data-categoryid={7}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/7"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      data protection
                    </font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/batterieverordnung"
                  title="Battery regulation"
                  data-categoryid={47}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/47"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Battery regulation
                    </font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/anfahrt"
                  title="Directions"
                  data-categoryid={52}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/52"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Directions</font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/ersatzteile-reklamationen"
                  title="Spare parts & complaints"
                  data-categoryid={108}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/108"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Spare parts &amp; complaints
                    </font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/haeufig-gestellte-fragen-faq"
                  title="Frequently Asked Questions (FAQ)"
                  data-categoryid={2}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/2"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Frequently Asked Questions (FAQ)
                    </font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="javascript:openCookieConsentManager()"
                  title="Cookie settings"
                  data-categoryid={104}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/104"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Cookie settings
                    </font>
                  </font>
                </a>
              </li>
              <li className="navigation--entry" role="menuitem">
                <a
                  className="navigation--link"
                  href="https://www.jansen-versand.de/inbetriebnahme-der-maschine"
                  title="Commissioning the machine"
                  data-categoryid={105}
                  data-fetchurl="/widgets/listing/getCustomPage/pageId/105"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Commissioning the machine
                    </font>
                  </font>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar--usps">
          <div className="head">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Why Jansen shipping
              </font>
            </font>
          </div>
          <ul>
            <li>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Experience since 1984
                </font>
              </font>
            </li>
            <li>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Spare parts permanently available
                </font>
              </font>
            </li>
            <li>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Own master workshop
                </font>
              </font>
            </li>
            <li>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Large exhibition hall
                </font>
              </font>
            </li>
            <li>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Specialized dealer
                </font>
              </font>
            </li>
          </ul>
        </div>
      </aside>
    );
}

export default Sidebar;
