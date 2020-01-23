import React from "react";
import { Table } from "semantic-ui-react";

function UrlTableRow(props) {
  const { url } = props;
  return (
    <Table.Row key={url._id}>
      <Table.Cell>{url.longUrl}</Table.Cell>
      <Table.Cell>
        <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
          {url.shortUrl}
        </a>
      </Table.Cell>
      <Table.Cell>{url.date}</Table.Cell>
      <Table.Cell>{url.visits}</Table.Cell>
    </Table.Row>
  );
}

export default UrlTableRow;
