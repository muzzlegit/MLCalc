import styled from "@emotion/styled";
import theme from "constants/theme";

export const SelectorBox = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
});
export const SelectorLabel = styled.label({
  color: "#ddddbdd",
});
export const Select = styled.select({
  padding: "0 4px",
  border: `1px solid ${theme.colors.text}`,
  borderRadius: "4px",
  color: "#111728",
  backgroundColor: "#89abad",
});
export const Option = styled.option(props => ({
  color: props.color,
}));
