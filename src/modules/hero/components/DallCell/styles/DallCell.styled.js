import styled from "@emotion/styled";

export const Container = styled.div(
  {
    position: "absolute",
    width: "68px",
    height: "74px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  props => ({
    top: props.top,
    left: props.left,
    background: props.background,
  }),
);
