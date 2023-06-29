import styled from "@emotion/styled";

export const Container = styled.div(
  {
    marginBottom: "8px",
    padding: "16px",
    width: "auto",
    borderRadius: "8px",
  },
  props => ({
    backgroundColor: props.theme.colors.primary,
  }),
);
export const SelectorsBox = styled.div({
  marginTop: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
});
export const GarrisonBox = styled.div({
  marginTop: "8px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
});
