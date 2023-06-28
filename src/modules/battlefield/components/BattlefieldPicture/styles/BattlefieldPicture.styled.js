import styled from "@emotion/styled";

export const BattlefieldBox = styled.div(
  {
    position: "relative",
    width: "162px",
    height: "127px",
  },
  props => ({
    background: props.background,
  }),
);
export const StructureBox = styled.div(
  {
    position: "absolute",
    top: "-50%",
    left: "25%",
    transform: "translate(0, 70%)",
    width: "80px",
    height: "100px",
  },
  props => ({
    background: props.background,
  }),
);
