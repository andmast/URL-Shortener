import React, { useState, useEffect } from "react";
import axios from "axios";

const UrlList = () => {
  const dataBaseUrl = "http://localhost:5000/api/urls/";
  const [urls, setUrls] = useState([]);

  const fetchData = () => {
    axios
      .get(dataBaseUrl)
      .then(urlList => {
        setUrls(urlList.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {urls.map(url => {
        return (
          <div key={url._id}>
            <p>
              {url.longUrl} |{" "}
              <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
                {url.shortUrl}
              </a>
              | {url.date} | {url.visits}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UrlList;
