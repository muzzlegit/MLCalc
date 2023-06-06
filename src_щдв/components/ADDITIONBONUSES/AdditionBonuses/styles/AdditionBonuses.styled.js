import styled from "@emotion/styled";

export const Wrap = styled.div(
  {
    padding: "8px",
    display: "flex",
    // flexDirection: 'column',
    justifyContent: "start",
    alignItems: "center",
    gap: "8px",
    borderRadius: "4px",
    backgroundColor: "#294b77",
    color: "#ddddbd",
  },
  props => ({
    boxShadow: props.boxShadow ? "0px 0px 3px 3px #0641f3" : null,
  }),
);
export const PlayerBox = styled.div({
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "flex-start",
  gap: "8px",
  border: "1px solid #ddddbd",
  borderRadius: "8px",
});
export const SelectorBox = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
});
export const SelectorLabel = styled.label({
  color: "#ddddbdd",
});
export const Select = styled.select({
  padding: "0 4px",
  border: "1px solid #ddddbd",
  borderRadius: "4px",
  color: "#111728",
  backgroundColor: "#89abad",
});
export const Option = styled.option(props => ({
  color: props.color,
}));
export const InputWrap = styled.div({
  display: "flex",
  gap: "8px",
});
export const BonusInput = styled.input({
  width: "36px",
  height: "16px",
  textAlign: "center",
  borderRadius: "4px",
  backgroundColor: "#ddddbd",
});
export const BonusSpan = styled.span({
  width: "18px",
});
// export const ButtonsBox = styled.div(
//   {
//     display: 'flex',
//     justifyItems: 'center',
//     alignItems: 'center',
//     gap: '16px',
//   }
// );
export const ButtonItem = styled.button({
  minWidth: "20px",
  height: "20px",
  padding: "2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  color: "#ddddbd",
  borderColor: "#294b77",
  backgroundColor: "#294b77",
  boxShadow: "0px 0px 1px 1px rgba(131, 151, 167, 1)",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "0px 0px 3px 3px rgba(131, 151, 167, 1)",
  },
});
