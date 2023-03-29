import styled from "@emotion/styled";
import theme from "constants/theme";

export const Container = styled.div({
  margin: "10px auto",
  padding: "12px",
  width: "auto",
  display: "inline-flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  borderRadius: "8px",
  backgroundColor: theme.colors.secondary,
});
