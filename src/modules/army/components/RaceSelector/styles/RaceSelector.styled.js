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
export const Select = styled.select(
  {
    padding: "0 4px",
    borderRadius: "4px",
  },
  props => ({
    color: props.theme.colors.secondary,
    backgroundColor: props.theme.colors.text,
  }),
);
export const Option = styled.option({}, props => ({
  color: props.theme.colors.secondary,
}));
