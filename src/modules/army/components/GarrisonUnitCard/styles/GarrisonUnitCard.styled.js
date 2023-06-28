import styled from "@emotion/styled";

export const Container = styled.div(
  {
    position: "relative",
    padding: "4px",
    width: "120px",
    height: "170px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.4)",
  },
  props => ({
    backgroundColor: props.theme.colors.secondary,
    boxShadow: props.boxShadow === "active" && "0px 0px 8px 4px rgba(131, 151, 167, 0.7)",
  }),
);
export const OnClickWrap = styled.div({
  cursor: "pointer",
});
export const BlockClickWrap = styled.div({
  pointerEvents: "none",
});
export const UnitWrap = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});

export const PropertyesContainer = styled.div(
  {
    padding: "4px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "8px",
    cursor: "pointer",
  },
  props => ({
    backgroundColor: props.theme.colors.secondary,
  }),
);
