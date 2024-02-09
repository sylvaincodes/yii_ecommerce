import * as React from "react";

interface IContainerProps {
  children: React.ReactNode;
  my?: string;
  mx?: string;
  px?: string;
}

const Container: React.FC<IContainerProps> = ({ children, my, mx, px }) => {
  return (
    <div
      className={`container min-w-full 
    my-${my} mx-${mx} px-${px}`}
    >
      {children}
    </div>
  );
};

export default Container;
