import React from "react";
import { Table } from "semantic-ui-react";

function UrlTableHeader() {
  return (
    <Table.Header>
      <Table.Row textAlign="center">
        <Table.HeaderCell>Long Url</Table.HeaderCell>
        <Table.HeaderCell>Short Url</Table.HeaderCell>
        <Table.HeaderCell>Date Created</Table.HeaderCell>
        <Table.HeaderCell>Number of visits</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
}

export default UrlTableHeader;
