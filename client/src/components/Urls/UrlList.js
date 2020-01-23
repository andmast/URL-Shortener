import React from "react";
import { Table, Segment, Message } from "semantic-ui-react";
import UrlTableRow from "./UrlTableRow";
import UrlTableHeader from "./UrlTableHeader";

function UrlList(props) {
  const { urls, loading } = props;

  return (
    <Segment loading={loading}>
      <Table celled>
        <UrlTableHeader />
        <Table.Body>
          {urls ? (
            urls.map(url => {
              return <UrlTableRow url={url} key={url._id} />;
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
    </Segment>
  );
}

export default UrlList;
