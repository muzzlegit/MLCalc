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
  }),
);
export const CardTitle = styled.h3(
  {
    fontSize: "10px",
  },
  props => ({
    color: props.theme.colors.text,
  }),
);
export const CardImage = styled.div(
  {
    position: "relative",
    width: "74px",
    height: "100px",
    cursor: "pointer",
  },
  props => ({
    color: props.theme.colors.text,
  }),
);
export const FrameImg = styled.div(
  {
    position: "absolute",
    zIndex: "10",
    width: "100%",
    height: "100%",
  },
  props => ({
    background: props.background,
    filter: props.filter,
    color: props.theme.colors.text,
  }),
);
export const UnitImg = styled.div(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "5",
    width: "68px",
    height: "82px",
  },
  props => ({
    background: props.background,
    filter: props.filter,
    color: props.theme.colors.text,
  }),
);
export const Input = styled.input(
  {
    padding: "2px 4px",
    width: "100%",
    height: "16px",

    textAlign: "center",
    fontSize: "12px",
    borderRadius: "4px",
    outline: "none",
  },
  props => ({
    background: props.background,
    filter: props.filter,
    color: props.theme.colors.secondary,
  }),
);
export const PropertyesContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "8px",
});
