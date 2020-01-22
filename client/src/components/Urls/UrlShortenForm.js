import React, { useState } from "react";
import { Input, Form, Segment, Message } from "semantic-ui-react";

import axios from "axios";
import validUrL from "valid-url";

function UrlForm() {
  const dataBaseUrl = "http://localhost:5000/api/urls/shorten";
  const [longUrl, setLongUrl] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (validUrL.isUri(longUrl)) {
      console.log("posting long url");
      axios
        .post(dataBaseUrl, {
          longUrl: longUrl
        })
        .then(res => {
          setErrors("");
          console.log(res);
        })
        .catch(err => {
          setErrors("API Server Down");
          console.log(err);
        });
    } else {
      setErrors("Please provide Valid Url with HTTP(S)");
    }
  };

  return (
    <Segment size="massive" inverted>
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
        {errors && <Message header="Error!" content={errors} color="red" />}
      </Form>
    </Segment>
  );
}

export default UrlForm;
