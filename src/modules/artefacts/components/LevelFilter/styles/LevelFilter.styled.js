import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
});
export const LevelBtn = styled.button(
  {
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid white",
    borderRadius: "4px",
  },
  props => ({
    backgroundColor: props.theme.colors.primary,
    fontSize: props.isActive === "true" ? "12px" : "16px",
    boxShadow:
      props.isActive === "true"
        ? "inset 1px 1px 3px rgba(0, 0, 0, .1), inset -1px -1px 3px rgba(255, 255, 255, 0.5)"
        : "2px 2px 10px rgba(0, 0, 0, .1), -1px -1px 6px #fffb",
    color: props.isActive === "true" ? props.theme.colors.text : props.theme.colors.secondary,
  }),
);
