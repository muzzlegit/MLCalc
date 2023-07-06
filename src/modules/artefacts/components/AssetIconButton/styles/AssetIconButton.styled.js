import styled from "@emotion/styled";

export const Container = styled.button(
  {
    position: "absolute",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  props => ({
    width: props.size,
    height: props.size,
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right,
  }),
);
export const Icon = styled.div({}, props => ({
  width: props.width,
  height: props.height,
  filter: `grayscale(${props.filter}) brightness(${props.filter})`,
  background: props.background,
}));
