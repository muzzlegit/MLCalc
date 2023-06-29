import styled from "@emotion/styled";

export const Container = styled.div(
  {
    padding: "4px",
    display: "grid",
    gridTemplateColumns: "1fr 310px 1fr",
    justifyItems: "center",
    columnGap: "12px",
    borderRadius: "8px",
  },
  props => ({
    background: props.theme.colors.secondary,
  }),
);
export const Cell = styled.div({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
