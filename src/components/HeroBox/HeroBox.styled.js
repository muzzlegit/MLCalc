import styled from '@emotion/styled';

export const HeroWrap = styled.div(
  {
    width: '96px',
    height: '115px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  props => ({
    background: props.background,
  }),
);
export const HeroImg = styled.div(
  {
    width: '82px',
    height: '99px'
  },
  props => ({
    background: props.background,
  }),
);