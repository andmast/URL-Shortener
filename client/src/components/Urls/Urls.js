import React from "react";
import UrlsShortenForm from "./UrlShortenForm";
import UrlList from "./UrlList";

function Urls() {
  return (
    <div className="Urls">
      <UrlsShortenForm />
      <UrlList />
    </div>
  );
}

export default Urls;
