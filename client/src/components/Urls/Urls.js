import React from "react";
import UrlsShortenForm from "./UrlShortenForm";
import UrlList from "./UrlList";
import { Segment, Divider, Header, Icon } from "semantic-ui-react";

function Urls() {
  return (
    <Segment inverted>
      <UrlsShortenForm />
      <Divider horizontal>
        <Header as="h4" inverted>
          <Icon name="list alternate" inverted />
          Short.ly Urls Created
        </Header>
      </Divider>
      <UrlList />
    </Segment>
  );
}

export default Urls;
