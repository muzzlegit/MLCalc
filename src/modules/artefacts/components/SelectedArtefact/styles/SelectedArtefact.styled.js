import styled from "@emotion/styled";

export const Container = styled.div({
  paddingBottom: "8px",
  width: "140px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "8px",
  overflow: "hidden",
});
export const ArtefactBg = styled.div(
  {
    position: "relative",
    width: "100%",
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

export const ApplyBtn = styled.button(
  {
    padding: "2px 4px",
    // width: "21px",
    // height: "25px",
    fontSize: "12px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "4px",
  },
  props => ({
    color: props.theme.colors.text,
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);
