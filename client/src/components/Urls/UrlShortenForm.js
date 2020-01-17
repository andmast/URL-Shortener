import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function UrlForm() {
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (longUrl) {
      console.log(longUrl);
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
