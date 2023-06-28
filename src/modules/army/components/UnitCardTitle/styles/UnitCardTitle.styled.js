import styled from "@emotion/styled";

export const CardTitle = styled.p(
  {
    fontSize: "10px",
  },
  props => ({
    color: props.theme.colors.text,
  }),
);
