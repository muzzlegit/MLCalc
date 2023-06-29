import styled from "@emotion/styled";

export const Container = styled.div(
  {
    marginBottom: "8px",
    padding: "16px",
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    gap: "12px",
    borderRadius: "8px",
  },
  props => ({
    backgroundColor: props.theme.colors.primary,
  }),
);
export const Title = styled.h3(
  {
    padding: "4px 8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
    fontSize: "24px",
  },
  props => ({
    backgroundColor: props.theme.colors.secondary,
    color: props.theme.colors.text,
  }),
);
