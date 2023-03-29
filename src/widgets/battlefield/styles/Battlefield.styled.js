import styled from "@emotion/styled";
import theme from "constants/theme";

export const BattlefieldWrap = styled.div({
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  borderRadius: "8px",
  backgroundColor: theme.colors.primary,
});
