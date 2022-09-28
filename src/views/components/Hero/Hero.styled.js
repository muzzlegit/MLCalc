import styled from '@emotion/styled';

export const HeroBox = styled.div(
  {
    width: '96px',
    height: '115px',
    cursor: 'pointer',
    outline: '1px solid tomato'
  },
  props => ({
    background: props.background,
  }),
);
export const HeroImg = styled.div(
  {}

);