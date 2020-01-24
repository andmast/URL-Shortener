import React, { useState } from "react";
import { Input, Form, Segment, Message } from "semantic-ui-react";

import axios from "axios";
import validUrL from "valid-url";

function UrlForm(props) {
  const { handleNewUrl } = props;
  const dataBaseUrl = "http://localhost:5000/api/urls/shorten";
  const [longUrl, setLongUrl] = useState("");
  const [errors, setErrors] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  // Posting longURL to API and handleNewUrl going back to add newly created shortly link to list
  const handleSubmit = e => {
    e.preventDefault();
    if (validUrL.isUri(longUrl)) {
      console.log("posting long url");
      axios
        .post(dataBaseUrl, {
          longUrl: longUrl
        })
        .then(res => {
          setShortUrl(res.data.shortUrl);
          setErrors("");
          handleNewUrl(res.data);
          setLongUrl("");
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
    <Segment inverted>
      <Form onSubmit={handleSubmit} style={{ margin: "5em" }}>
        <Input
          placeholder="Submit your url"
          value={longUrl}
          onChange={e => setLongUrl(e.target.value)}
          fluid
          action={{
            color: "orange",
            labelPosition: "right",
            icon: "send",
            content: "Shorten",
            size: "big"
          }}
        />
        {shortUrl && (
          <Message
            header="Success! Your Shortly link is ..."
            content={
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            }
            color="green"
          />
        )}
        {errors && <Message header="Error!" content={errors} color="red" />}
      </Form>
    </Segment>
  );
}

export default UrlForm;
