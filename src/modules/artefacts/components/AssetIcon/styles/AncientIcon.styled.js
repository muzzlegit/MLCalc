import styled from "@emotion/styled";

export const Container = styled.div(
  {
    position: "absolute",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  props => ({
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right,
  }),
);
export const Icon = styled.div(
  {
    width: "21px",
    height: "21px",
  },
  props => ({
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);
