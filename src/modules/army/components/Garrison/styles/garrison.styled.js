import styled from "@emotion/styled";
import "animate.css";

export const Container = styled.div({
  display: "flex",
  gap: "4px",
  listStyle: "none",
  opacity: 1,
  transform: "opacity 2000ms linear",
  animation: "fadeIn",
  animationDuration: "2s",
});
