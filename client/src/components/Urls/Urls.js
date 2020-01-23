import React from "react";
import axios from "axios";
import UrlsShortenForm from "./UrlShortenForm";
import UrlList from "./UrlList";
import UrlScoreBoard from "./UrlScoreboard";
import { Segment, Divider, Header, Icon } from "semantic-ui-react";

class Urls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      loading: true
    };
    this.handleNewUrl = this.handleNewUrl.bind(this);
  }

  handleNewUrl(newUrl) {
    const oldUrls = this.state.urls;
    const newUrls = [...oldUrls, newUrl];
    this.setState({ urls: newUrls });
  }

  componentDidMount() {
    const dataBaseUrl = "http://localhost:5000/api/urls/";
    axios
      .get(dataBaseUrl)
      .then(urls => {
        console.log(urls.data);
        this.setState({ urls: urls.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { urls, loading } = this.state;
    const top5urls = urls.sort((a, b) => b.visits - a.visits).slice(0, 5);
    return (
      <Segment inverted>
        <UrlsShortenForm handleNewUrl={this.handleNewUrl} />
        <Divider horizontal>
          <Header as="h4" inverted>
            <Icon name="sort amount down" inverted />
            Top 5 Visited Short.ly Links
          </Header>
        </Divider>
        <UrlScoreBoard urls={top5urls} loading={loading} />
        <Divider horizontal>
          <Header as="h4" inverted>
            <Icon name="list alternate" inverted />
            Short.ly Urls Created
          </Header>
        </Divider>
        <UrlList urls={urls} loading={loading} />
      </Segment>
    );
  }
}

export default Urls;
