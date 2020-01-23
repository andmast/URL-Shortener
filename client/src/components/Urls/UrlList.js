import React from "react";
import { Container, Table, Segment, Message } from "semantic-ui-react";

function UrlList(props) {
  const { urlList } = props;

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
            {urlList.length > 0 ? (
              urlList.map(url => {
                return (
                  <Table.Row key={url._id}>
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
              <Table.Row>
                <Table.Cell>
                  <Message header="Error!" content="Server Down" color="red" />
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Container>
    </Segment>
  );
}

export default UrlList;
