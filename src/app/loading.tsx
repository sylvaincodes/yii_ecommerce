"use client";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
`;

const LoaderCss = styled.div`
  position: absolute;
  padding: 10px;
  border: 6px solid black;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  top: 30%;
  left: 50%;
  padding: 1rem;
  z-index: 9999;
`;

const loading = () => {
  return (
    <div
      style={{
        opacity: 0.5,
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: "0",
        zIndex: "999",
        background: "black",
      }}
    >
      <LoaderCss />
    </div>
  );
};

export default loading;
