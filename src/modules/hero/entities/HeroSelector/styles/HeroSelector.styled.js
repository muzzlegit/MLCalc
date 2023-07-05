import styled from "@emotion/styled";

export const Container = styled.div(
  {
    position: "relative",
    padding: "8px",
    height: "460px",
    width: "310px",
    borderRadius: "8px",
  },
  props => ({
    "::before": {
      content: '""',
      position: "absolute",
      bottom: "25%",
      left: "35%",
      zIndex: 1,
      height: "100px",
      width: "82px",
      opacity: 0.15,
      scale: "2.5",
      background: props.background,
    },
    backgroundColor: props.theme.colors.secondary,
  }),
);

export const BranchesBox = styled.div({
  position: "absolute",
  top: "56%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  gap: "8px",
  zIndex: 2,
});
