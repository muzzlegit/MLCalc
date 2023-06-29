import styled from "@emotion/styled";

export const Container = styled.ul(
  {
    display: "flex",
    gap: "4px",
    listStyle: "none",
    opacity: 1,
    transition: "opacity 400ms linear",
  },
  props => ({
    pointerEvents: props.isActive === "active" ? true : "none",
    opacity: props.isActive === "active" ? 1 : 0.3,
  }),
);
