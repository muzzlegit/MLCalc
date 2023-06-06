import styled from "@emotion/styled";

export const Container = styled.div(
  {
    padding: "16px",
    width: "auto",
    borderRadius: "8px",
  },
  props => ({
    backgroundColor: props.theme.colors.primary,
  }),
);
