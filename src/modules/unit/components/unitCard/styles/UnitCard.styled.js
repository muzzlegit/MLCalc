import styled from "@emotion/styled";
import theme from "constants/theme";

export const UnitCardBox = styled.div({
  padding: "2px",
  width: "140px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  borderRadius: "4px",
  backgroundColor: theme.colors.secondary,
});
export const UnitPicture = styled.div({
  position: "relative",
  width: "74px",
  height: "100px",
  "&:hover": {
    cursor: "pointer",
  },
});
export const UnitFrame = styled.div(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    width: "100%",
    height: "100%",
  },
  props => ({
    background: props.background,
    filter: props.filter ? null : "grayscale(60%) brightness(70%)",
  }),
);
export const UnitImg = styled.div(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "68px",
    height: "82px",
  },
  props => ({
    background: props.background,
    filter: props.filter ? null : "grayscale(60%) brightness(70%)",
  }),
);
export const UnitName = styled.div({
  fontSize: "12px",
  color: theme.colors.text,
});
export const UnitPropertiesWrap = styled.div({
  padding: "8px",
  width: "90%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "flex-start",
  gap: "8px",
});
export const PropertyBox = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
});
export const UnitProperty = styled.p`
  color: ${props => theme.colors[props.color]};
  font-size: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  &::before {
    content: "";
    margin-right: 8px;
    display: inline-block;
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.background};
  }
`;
export const PropertyRate = styled.p(
  {
    fontSize: "10px",
  },
  props => ({
    color: theme.colors[props.color],
  }),
);
