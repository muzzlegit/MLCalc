import styled from "@emotion/styled";

export const CardImage = styled.div(
  {
    position: "relative",
    width: "74px",
    height: "100px",
    cursor: "pointer",
  },
  props => ({
    color: props.theme.colors.text,
  }),
);
export const FrameImg = styled.div(
  {
    position: "absolute",
    zIndex: "10",
    width: "100%",
    height: "100%",
  },
  props => ({
    background: props.background,
    filter: props.filter,
    color: props.theme.colors.text,
  }),
);
export const UnitImg = styled.div(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "5",
    width: "68px",
    height: "82px",
  },
  props => ({
    background: props.background,
    filter: props.filter,
    color: props.theme.colors.text,
  }),
);
