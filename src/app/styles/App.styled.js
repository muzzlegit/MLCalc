import styled from "@emotion/styled";

export const Container = styled.div(
  {
    margin: "8px auto 0 auto",
    padding: "16px",
    width: "fit-content",
    borderRadius: "16px",
  },
  props => ({
    backgroundColor: props.theme.colors.secondary,
  }),
);
