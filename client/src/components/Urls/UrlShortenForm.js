import React, { useState } from "react";
import { Header, Input, Form, Segment } from "semantic-ui-react";

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
    <Segment inverted>
      <Form onSubmit={handleSubmit} style={{ margin: "5em" }}>
        <Input
          placeholder="Submit your url"
          value={longUrl}
          onChange={e => setLongUrl(e.target.value)}
          fluid
          action={{
            color: "green",
            labelPosition: "right",
            icon: "send",
            content: "Shorten",
            size: "massive"
          }}
        />
      </Form>
    </Segment>
  );
}

export default UrlForm;
