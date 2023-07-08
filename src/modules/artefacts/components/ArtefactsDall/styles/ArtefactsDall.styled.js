import styled from "@emotion/styled";

export const Container = styled.ul({
  position: "relative",
  width: "284px",
  height: "510px",
  listStyle: "none",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "8px",
});
export const ContainerItem = styled.li(
  {
    position: "absolute",
    width: "68px",
    height: "75px",
  },
  props => ({
    top: props.top,
    left: props.left,
  }),
);
export const Cell = styled.div(
  {
    width: "68px",
    height: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  props => ({
    filter: !!props.isSet && `drop-shadow(-1px -1px 2px ${props.theme.colors.text})`,
    background: props.background,
  }),
);
export const ArtefactImg = styled.div(
  {
    width: "61px",
    height: "61px",
  },
  props => ({
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);
export const ArtefactBg = styled.div(
  {
    position: "absolute",
    top: "6px",
    left: "3px",
    width: "61px",
    height: "61px",
  },
  props => ({
    backgroundColor: props.theme.colors[props.backgroundColor],
  }),
);

export const DeleteIcon = styled.button(
  {
    position: "absolute",
    zIndex: 3,
    bottom: "-4px",
    right: "-4px",
    width: "21px",
    height: "21px",
  },
  props => ({
    ":hover": {
      scale: "1.05",
      filter: `drop-shadow(1px 1px 2px red)`,
    },

    background: props.background,
  }),
);

export const AncientIcon = styled.button(
  {
    position: "absolute",
    zIndex: 3,
    top: "-8px",
    left: "-8px",
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
    top: "-8px",
    right: "-8px",
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
    bottom: "-8px",
    left: "-8px",
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
    bottom: "-8px",
    right: "-8px",
    width: "21px",
    height: "25px",
  },
  props => ({
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);
