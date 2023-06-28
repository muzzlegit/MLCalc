import styled from "@emotion/styled";

export const Container = styled.div(
  {
    padding: "8px",
    width: "140px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
  },
  props => ({
    backgroundColor: props.theme.colors.secondary,
    boxShadow: props.boxShadow === "active" && "0px 0px 8px 4px rgba(131, 151, 167, 0.7)",
  }),
);

export const PropertyesContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "8px",
});
