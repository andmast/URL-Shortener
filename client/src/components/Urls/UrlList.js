import React, { useState, useEffect } from "react";
import axios from "axios";

const UrlList = () => {
  const dataBaseUrl = "http://localhost:5000/api/urls/";
  const [urls, setUrls] = useState([]);

  const fetchData = () => {
    axios
      .get(dataBaseUrl)
      .then(urlList => {
        console.log(urlList);
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
      <p>
        {urls.map(url => {
          return (
            <div key={url._id}>
              <p>
                {url.longUrl} | {url.shortUrl} | {url.date}
              </p>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default UrlList;
