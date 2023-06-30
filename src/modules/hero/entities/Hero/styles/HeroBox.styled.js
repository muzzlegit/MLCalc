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
    boxShadow: props.boxShadow === "active" && "0px 0px 8px 4px rgba(131, 151, 167, 0.7)",
  }),
);
export const ClickWrapper = styled.div({
  cursor: "pointer",
});
