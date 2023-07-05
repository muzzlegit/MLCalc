import styled from "@emotion/styled";

export const Container = styled.ul(
  {
    padding: "4px 4px 12px 4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "canter",
    alignItems: "start",
    gap: "16px",
    borderRadius: "8px",
  },
  props => ({
    backgroundColor: "rgba(41, 75, 119, 0.6)",
  }),
);
export const BranchCell = styled.li(
  {
    position: "relative",
    width: "82px",
    height: "63px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  props => ({
    background: props.background,
  }),
);
export const SkillImg = styled.div({ width: "56px", height: "56px" }, props => ({
  background: props.background,
}));
export const SkillBtn = styled.button(
  {
    position: "absolute",
    bottom: "-23%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0,
    padding: "1px 2px",
    width: "30px",
    height: "16px",
    lineHeight: 0,
    border: "1px solid darkgray",
    borderRadius: "3px",
    fontSize: "12px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  props => ({
    backgroundColor: props.backgroundColor,
  }),
);
