import styled from "@emotion/styled";

export const Container = styled.div(
  {
    width: "fit-content",
    height: "fit-content",
  },
  props => ({}),
);

export const Select = styled.select(
  {
    padding: "0 2px",
    borderRadius: "4px",
    textAlign: "center",
    fontSize: "14px",
  },
  props => ({
    color: props.theme.colors.secondary,
    backgroundColor: props.theme.colors.text,
  }),
);
export const Option = styled.option(
  {
    fontSize: "14px",
  },
  props => ({
    color: props.theme.colors.secondary,
  }),
);
