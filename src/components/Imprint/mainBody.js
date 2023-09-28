import React from "react";
import Sidebar from "./Sidebar";
import { getInformationApi } from "../../Api/Services";
import { useState, useEffect } from "react";

const MainBody = () => {
  const [information, setInformation] = useState([]);
  const [why, setWhy] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const getAbout = async () => {
    try {
      const getinfo = await getInformationApi();

      if (getinfo.success) {
        setInformation(getinfo.data.information);
        setWhy(getinfo.data.why);
        console.log("getinfo.data.why: ", getinfo.data.why);
      } else {
      }
    } catch (error) {
      console.log("error: ", error);
      // toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisLoading(false);
      //
    }
  };
  console.log(why);

  useEffect(() => {
    getAbout();
  }, []);
  if (isLoading) {
    return <div></div>;
  }
  return (
    <>
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
          </div>
        </div>
        <div className="sidebar--usps">
          <div className="head">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>{why.heading}</font>
            </font>
          </div>
          <ul>
            {why.lists.map((item, key) => {
              return (
                <li key={key}>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      {item.list}
                    </font>
                  </font>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <div className="content--wrapper">
        <div className="custom-page--content content block">
          <div className="content--custom">
            {information.map((item, key) => {
              return (
                <div>
                  <h3>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        {item.heading}
                      </font>
                    </font>
                    <br />
                  </h3>
                  <p>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        {item.description}
                      </font>
                    </font>
                    <br />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
