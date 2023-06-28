import styled from "@emotion/styled";

export const SelectorBox = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
});
export const Label = styled.label(props => ({
  color: props.theme.colors.text,
}));
export const Select = styled.select(
  {
    padding: "2px 8px",
    height: "24px",
    borderRadius: "8px",
  },
  props => ({
    color: props.theme.colors.secondary,
    backgroundColor: props.theme.colors.text,
  }),
);
