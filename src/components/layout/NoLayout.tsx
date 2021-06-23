import * as React from "react";

interface Props {
  children: React.ReactChild;
}

const BaseLayout: React.FC<Props> = (props) => {
  return (
    <>
      {props.children}
    </>
  );
};

export default BaseLayout;
