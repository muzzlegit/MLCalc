import styled from "@emotion/styled";

export const TowerSelectorBox = styled.div({
  padding: "4px",
  width: "300px",
});
export const SelectorsWrap = styled.div(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    transition: "opacity 200ms linear",
  },
  props => ({
    pointerEvents: props.isActive === "active" ? true : "none",
    opacity: props.isActive === "active" ? 1 : 0.4,
  }),
);
export const SelectorsBox = styled.div({});
export const TowersBox = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const TowerBox = styled.div({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  "&:hover": {
    cursor: "pointer",
  },
});
export const Tower = styled.div(
  {
    color: "transparent",
    height: "38px",
  },
  props => ({
    width: props.width,
    background: props.background,
    filter: props.filter,
  }),
);
export const LevelBox = styled.ul({
  width: "100%",
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const Level = styled.li(
  {
    height: "26px",
    width: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  props => ({
    color: props.color,
    filter: props.filter,
    background: props.background,
  }),
);
export const AddButton = styled.button(
  {
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "box-shadow 300ms linear",
    "&:hover": {
      boxShadow: "0px 0px 4px 4px rgba(0,255,0,.4)",
      transition: "box-shadow 200ms linear",
    },
  },
  props => ({
    background: props.theme.colors.secondary,
  }),
);
export const RemoveButton = styled.button({
  height: "30px",
  width: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "box-shadow 200ms linear",
  "&:hover": {
    boxShadow: "0px 0px 4px 4px rgba(187, 10, 1, .5)",
    transition: "box-shadow 200ms linear",
  },
});
export const ButtonImg = styled.div(
  {
    height: "13px",
    width: "13px",
  },
  props => ({
    background: props.background,
    filter: props.filter,
  }),
);
export const Input = styled.input({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "18px",
  height: "16px",
  fontSize: "12px",
  textAlign: "center",
  border: "1px solid #212425",
});
