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
export const ArtefactImg = styled.div(
  {
    width: "61px",
    height: "61px",
  },
  props => ({
    background: props.background,
  }),
);
export const ArtefactBg = styled.div(
  {
    position: "absolute",
    top: "8px",
    left: "3px",
    width: "61px",
    height: "61px",
  },
  props => ({
    backgroundColor: props.theme.colors[props.backgroundColor],
  }),
);
