import React from "react";
import { Header, Icon } from "semantic-ui-react";

export const Head = () => {
  return (
    <div style={{ ...styles.headContainer }}>
      <Header as="h3" textAlign="left">
        <Icon circular name="caret right" />
        Hello, this is my portfolio :)
      </Header>
    </div>
  );
};
const styles = {
  headContainer: {
    paddingTop: "2rem",
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "dotted rgb(188, 180, 214)"
  }
};
