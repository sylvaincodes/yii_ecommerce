import * as React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FunctionComponent<IContainerProps> = ({ children }) => {
  return <div className="container min-w-full ">{children}</div>;
};

export default Container;
