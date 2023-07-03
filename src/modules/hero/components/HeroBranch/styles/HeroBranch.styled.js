import styled from "@emotion/styled";

export const Container = styled.ul({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
});
export const BranchCell = styled.li(
  {
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
