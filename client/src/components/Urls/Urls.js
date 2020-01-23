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
      urlList: [],
      newUrl: false
    };
    this.handleNewUrl = this.handleNewUrl.bind(this);
  }

  handleNewUrl() {
    this.setState();
  }

  componentDidMount() {
    const dataBaseUrl = "http://localhost:5000/api/urls/";
    axios
      .get(dataBaseUrl)
      .then(urlList => {
        console.log(urlList.data);
        this.setState({ urlList: urlList.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { urlList } = this.state;
    const top5urls = urlList.sort((a, b) => b.visits - a.visits).slice(0, 5);
    return (
      <Segment inverted>
        <UrlsShortenForm />
        <UrlScoreBoard urls={top5urls} />
        <Divider horizontal>
          <Header as="h4" inverted>
            <Icon name="list alternate" inverted />
            Short.ly Urls Created
          </Header>
        </Divider>
        <UrlList urlList={urlList} />
      </Segment>
    );
  }
}

export default Urls;
