import styled from "@emotion/styled";

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
