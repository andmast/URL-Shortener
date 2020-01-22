import React from "react";
import { Menu, Container, Icon } from "semantic-ui-react";

export default () => (
  <div>
    <Menu fixed="top" inverted size="massive">
      <Container>
        <Menu.Item header>Short.ly</Menu.Item>
        <Menu.Item>Home</Menu.Item>
      </Container>

      <Menu.Item>
        <Icon name="github" size="big" />
      </Menu.Item>
    </Menu>
  </div>
);
