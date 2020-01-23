import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Segment, Message } from "semantic-ui-react";

function UrlList() {
  const dataBaseUrl = "http://localhost:5000/api/urls/";
  const [urls, setUrls] = useState([]);

  const fetchData = () => {
    axios
      .get(dataBaseUrl)
      .then(urlList => {
        setUrls(urlList.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Segment>
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Long Url</Table.HeaderCell>
              <Table.HeaderCell>Short Url</Table.HeaderCell>
              <Table.HeaderCell>Date Created</Table.HeaderCell>
              <Table.HeaderCell>Number of visits</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {urls.length > 0 ? (
              urls.map(url => {
                return (
                  <Table.Row>
                    <Table.Cell>{url.longUrl}</Table.Cell>
                    <Table.Cell>
                      <a
                        href={url.shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {url.shortUrl}
                      </a>
                    </Table.Cell>
                    <Table.Cell>{url.date}</Table.Cell>
                    <Table.Cell>{url.visits}</Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <Message header="Error!" content="Server Down" color="red" />
            )}
          </Table.Body>
        </Table>
      </Container>
    </Segment>
  );
}

export default UrlList;
