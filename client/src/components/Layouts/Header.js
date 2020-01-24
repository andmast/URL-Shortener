import React from "react";
import { Menu, Container, Icon } from "semantic-ui-react";

export default () => (
  <Menu fixed="top" size="massive">
    <Container>
      <Menu.Item header>Short.ly</Menu.Item>
      <Menu.Item>Home</Menu.Item>
    </Container>

    <Menu.Item>
      <a
        href="https://github.com/andmast/url-shortener"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" size="big" color="black" />
      </a>
    </Menu.Item>
  </Menu>
);
