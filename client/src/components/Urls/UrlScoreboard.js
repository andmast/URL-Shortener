import React from "react";

function UrlScoreBoard(props) {
  const { urls } = props;
  return <div>{JSON.stringify(urls)}</div>;
}

export default UrlScoreBoard;
