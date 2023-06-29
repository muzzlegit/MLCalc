import styled from "@emotion/styled";

export const Container = styled.ul(
  {
    display: "flex",
    gap: "4px",
    listStyle: "none",
    opacity: 1,
    transform: "opacity 2000ms linear",
  },
  props => ({
    pointerEvents: props.isActive === "active" ? true : "none",
    opacity: props.isActive === "active" ? 1 : 0.3,
  }),
);
