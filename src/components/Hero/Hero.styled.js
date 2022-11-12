import styled from '@emotion/styled';

export const HeroBox = styled.div(
  {
    width: '96px',
    height: '115px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: '1px solid tomato'
  },
  props => ({
    background: props.background,
  }),
);
export const HeroBoxImg = styled.div(
  {
    width: '82px',
    height: '99px'
  },
  props => ({
    background: props.background,
  }),
);