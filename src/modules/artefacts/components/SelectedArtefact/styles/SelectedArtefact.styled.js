import styled from "@emotion/styled";

export const Container = styled.div({
  width: "140px",
  height: "fit-content",
  overflow: "hidden",
});

export const ArtefactBg = styled.div(
  {
    position: "relative",
    width: "140px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  props => ({
    filter: `drop-shadow(5px 5px 10px ${props.theme.colors[props.ancient]})`,
    background: `radial-gradient(circle, ${
      props.theme.colors[props.background]
    } 0%,  transparent 60%)`,
  }),
);
export const ArtefactImg = styled.div(
  {
    width: "61px",
    height: "61px",
  },
  props => ({
    filter: `drop-shadow(1px 1px 6px ${props.theme.colors.blackOpacity})`,
    background: props.background,
  }),
);

export const AncientIcon = styled.button(
  {
    position: "absolute",
    zIndex: 3,
    top: "8px",
    left: "8px",
    width: "21px",
    height: "21px",
  },
  props => ({
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);

export const PerfectIcon = styled.button(
  {
    position: "absolute",
    zIndex: 3,
    top: "8px",
    right: "8px",
    width: "21px",
    height: "24px",
  },
  props => ({
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);

export const RuneIcon = styled.div(
  {
    position: "absolute",
    zIndex: 3,
    bottom: "8px",
    left: "8px",
    width: "16px",
    height: "23px",
  },
  props => ({
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);

export const SharpeningIcon = styled.div(
  {
    position: "absolute",
    zIndex: 3,
    bottom: "8px",
    left: "8px",
    width: "21px",
    height: "25px",
  },
  props => ({
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);

export const ApplyBtn = styled.button(
  {
    padding: "2px 4px",
    fontSize: "12px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "4px",
  },
  props => ({
    color: props.theme.colors.text,
    boxShadow: !!props.isActive ? "2px 2px 10px rgba(0, 0, 0, .1), -1px -1px 6px #fffb" : "none",
    filter: !!props.isActive ? "none" : `grayscale(70%) brightness(70%)`,
  }),
);
