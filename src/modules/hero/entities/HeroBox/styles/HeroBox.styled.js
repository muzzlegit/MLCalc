import styled from "@emotion/styled";

export const Container = styled.div(
  {
    padding: "8px",
    width: "140px",
    height: "362px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  props => ({
    backgroundColor: props.theme.colors.secondary,
  }),
);
export const ClickWrapper = styled.div({
  cursor: "pointer",
});
