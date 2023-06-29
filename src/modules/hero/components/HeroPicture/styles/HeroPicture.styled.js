import styled from "@emotion/styled";

export const Container = styled.div(
  {
    position: "relative",
    width: "96px",
    height: "114px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  props => ({
    background: props.background,
  }),
);
export const HeroImg = styled.div(
  {
    width: "82px",
    height: "100px",
  },
  props => ({
    background: props.background,
  }),
);
export const Light = styled.div(
  {
    position: "absolute",
    top: "9px",
    left: "7px",
    zIndex: "1",
    width: "82px",
    height: "100px",
    transition: "background-color 400ms linear",
  },
  props => ({
    background:
      props.isHover === "isHover"
        ? "none"
        : "radial-gradient(circle, rgba(255, 255, 255, .7) 0%, #111728 85%);",
    backgroundColor: props.isHover === "isHover" ? "rgba(255, 0, 0, 0.3)" : "none",
  }),
);
