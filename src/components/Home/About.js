import React, { useState, useEffect } from "react";
import { getAboutApi } from "../../Api/Services";
import { toast } from "react-toastify";

const About = () => {
  const [about, setAbout] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const getAbout = async () => {
    try {
      const getAbout = await getAboutApi();

      if (getAbout.success) {
        setAbout(getAbout.About);
      } else {
        toast.error(getAbout.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);
  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="panel has--border is--rounded startdesc">
      <h1 className="panel--title">
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>{about.heading}</font>
        </font>
      </h1>

      <div className="panel--body is--wide no-pad">
        <p className="MsoNormal">
          <span style={{ fontSize: "medium" }}>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                {about.paragraph}
              </font>
            </font>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
