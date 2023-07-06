import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "8px",
  width: "auto",
  height: "305px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "8px",
  overflowY: "auto",
});
export const ArtefactImg = styled.div(
  {
    minWidth: "61px",
    minHeight: "61px",
    cursor: "pointer",
  },
  props => ({
    // filter: `drop-shadow(1px 1px 2px rgba(0,0,0,0.5))`,
    filter: `drop-shadow(1px 1px 2px rgba(255,255,255,0.5))`,
    background: props.background,
  }),
);
