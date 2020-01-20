import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";

import axios from "axios";
import validUrL from "valid-url";

function UrlForm() {
  const dataBaseUrl = "http://localhost:5000/api/urls/shorten";
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (validUrL.isUri(longUrl)) {
      console.log("posting long url");
      axios
        .post(dataBaseUrl, {
          longUrl: longUrl
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ margin: "5em 10em 0em", width: "70%", height: "40%" }}
    >
      <Input
        placeholder="Submit your url"
        value={longUrl}
        onChange={e => setLongUrl(e.target.value)}
        fluid
      />
      <Button type="submit">Send</Button>
    </form>
  );
}

export default UrlForm;
