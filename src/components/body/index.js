import React from "react";
import { Container } from "semantic-ui-react";
export const Body = ({ children }) => {
  return <Container style={{ ...styles.container }}>{children}</Container>;
};
const styles = {
  container: {
    border: "solid"
  }
};
