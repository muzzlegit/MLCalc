import styled from "@emotion/styled";

export const PropertyBox = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
export const PropertyIcon = styled.div(
  {
    width: "16px",
    height: "16px",
  },
  props => ({
    background: props.background,
  }),
);
export const PropertyValue = styled.p(
  {
    fontSize: "10px",
  },
  props => ({
    color: props.color ?? props.theme.colors.text,
  }),
);
