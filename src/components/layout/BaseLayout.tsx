import * as React from "react";
import NavBar from "../navbar";

interface Props {
  children: React.ReactChild;
}

const BaseLayout: React.FC<Props> = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default BaseLayout;
