import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const { name, description, svn_url, stargazers_count, languages_url } = value;
  return (
    <div className="col-md-6">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <p className="card-text" style={{ minHeight: "100px", overflow: "auto" }}>{description} </p>
          <a
            href={`${svn_url}/archive/master.zip`}
            className="btn btn-outline-secondary mr-3"
          >
            <i className="fab fa-github" /> Clone Project
          </a>
          <a
            href={svn_url}
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i className="fab fa-github" /> Repo
          </a>
          <hr />
          <Language value={languages_url}></Language>
          <p className="card-text">
            <span className="text-dark card-link mr-4">
              <i className="fab fa-github" /> Stars{" "}
              <span className="badge badge-dark">{stargazers_count}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Language = ({ value }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(
    (e) => {
      axios
        .get(value)
        .then((response) => {
          return setData(response.data);
        })
        .catch((error) => {
          return console.error(error.message);
        })
        .finally(() => {
        });
    },
    [value]
  );

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.map((language) => (
        <p key={language} className="badge badge-light card-link">
          {language}: {Math.trunc((data[language] / total_count) * 1000) / 10} %
        </p>
      ))}
    </div>
  );
};

export default ProjectCard;
