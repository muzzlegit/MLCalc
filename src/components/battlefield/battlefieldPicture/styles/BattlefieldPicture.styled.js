import styled from "@emotion/styled";
import theme from "constants/theme";

export const ImagesBox = styled.div({
  position: "relative",
  width: "162px",
  height: "128px",
});
export const BattlefieldImg = styled.div(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "162px",
    height: "128px",
  },
  props => ({
    background: props.background,
  }),
);
export const StructureImg = styled.div(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80px",
    height: "100px",
  },
  props => ({
    background: props.background,
  }),
);
