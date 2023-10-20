import React, { useState, useEffect } from "react";
import axios from "axios";
import Pdf from "../docs/resume.pdf";
import configuration from "../data/configuration";
const {
  aboutHeading,
  aboutDescription,
  showInstagramProfilePic,
  instagramLink,
  instagramUsername,
  instagramQuery,
} = configuration

const AboutMe = () => {
  const [instagramProfilePic, setInstagramProfilePic] = useState("");
  const [showInstagram, setShowInstagram] = useState(showInstagramProfilePic);
  const [resumeURL] = useState(Pdf);

  useEffect(() => {
    if (showInstagram) {
      handleRequest();
    }
  }, [showInstagram]);

  const handleRequest = (e) => {
    axios
      .get(instagramLink + instagramUsername + instagramQuery)
      .then((response) => {
        // handle success
        // console.log(response.data.graphql);
        return setInstagramProfilePic(
          response.data.graphql.user.profile_pic_url_hd
        );
      })
      .catch((error) => {
        // handle error
        setShowInstagram(false);
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          {showInstagram && (
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={instagramProfilePic}
                alt="profilepicture"
              />
            </div>
          )}
          <div className={`col-lg-${showInstagram ? "7" : "12"}`}>
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">{aboutDescription}</p>
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
