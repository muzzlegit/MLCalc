import styled from "@emotion/styled";
import theme from "constants/theme";

export const PlayerWrap = styled.div({
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  borderRadius: "8px",
  backgroundColor: theme.colors.primary,
});
export const PlayerTitle = styled.p({
  padding: "4px 6px",
  height: "24px",
  fontSize: "20px",
  color: theme.colors.text,
  borderRadius: "4px",
  boxShadow: "0px 0px 8px 4px rgba(131, 151, 167, 0.7)",
});
