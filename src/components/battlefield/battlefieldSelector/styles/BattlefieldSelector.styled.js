import styled from "@emotion/styled";
import theme from "constants/theme";

export const SelectorBox = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
});
export const SelectorLabel = styled.label({
  color: theme.colors.text,
});
export const Select = styled.select({
  padding: "0 4px",
  border: `1px solid ${theme.colors.text}`,
  borderRadius: "4px",
  color: theme.colors.secondary,
  backgroundColor: theme.colors.text,
});
export const Option = styled.option({
  color: theme.colors.secondary,
});
