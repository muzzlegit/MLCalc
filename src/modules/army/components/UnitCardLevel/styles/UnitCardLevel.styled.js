import styled from "@emotion/styled";

export const Container = styled.div(
  {
    width: "100%",
    display: "flex",
    alignItems: "end",
    gap: "8px",
  },
  props => ({
    background: props.background,
  }),
);
export const Level = styled.p(
  {
    fontSize: "12px",
  },
  props => ({
    color: props.theme.colors.ligth,
  }),
);
export const PropertyIcon = styled.div(
  {
    width: "22px",
    height: "22px",
  },
  props => ({
    background: props.background,
  }),
);
