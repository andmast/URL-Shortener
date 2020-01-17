import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import validUrL from "valid-url";

function UrlForm() {
  const dataBaseUrl = "http://localhost:5000/api/url/shorten";
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (validUrL.isUri(longUrl)) {
      console.log("posting long url");
      axios
        .post(dataBaseUrl, {
          longUrl: longUrl
        })
        .then(res => console.log(res));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Submit your url"
        variant="outlined"
        value={longUrl}
        onChange={e => setLongUrl(e.target.value)}
      />
      <Button size="medium" variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
  );
}

export default UrlForm;
