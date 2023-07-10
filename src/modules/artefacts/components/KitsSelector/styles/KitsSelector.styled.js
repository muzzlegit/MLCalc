import styled from "@emotion/styled";

export const Container = styled.div(
  {
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: "4px",
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
export const AncientIcon = styled.button(
  {
    width: "21px",
    height: "21px",
  },
  props => ({
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);

export const PerfectIcon = styled.button(
  {
    width: "21px",
    height: "24px",
  },
  props => ({
    filter: `grayscale(${props.filter}) brightness(${props.filter})`,
    background: props.background,
  }),
);
