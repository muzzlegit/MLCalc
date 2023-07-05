import styled from "@emotion/styled";

export const Container = styled.div(
  {
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
  },
  props => ({
    pointerEvents: props.isActive === "active" ? true : "none",
    opacity: props.isActive === "active" ? 1 : 0.3,
  }),
);

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
    textAlign: "center",
  },
  props => ({
    color: props.theme.colors.secondary,
    backgroundColor: props.theme.colors.text,
  }),
);
export const Option = styled.option({}, props => ({
  color: props.theme.colors.secondary,
}));
