import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
});

export const Label = styled.label(
  {
    marginRight: "8px",
  },
  props => ({
    color: props.theme.colors.text,
  }),
);
