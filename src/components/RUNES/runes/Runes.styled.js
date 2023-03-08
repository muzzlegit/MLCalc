import styled from '@emotion/styled';

export const Wrap = styled.div(
  {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'tomato'
  }
);
export const RuneWrap = styled.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px'
  }
);
export const RuneImg = styled.div(
  {
    width: '36px',
    height: '52px', 
    backgroundColor: 'grey'
  },
  props => ({
    background: props.background,
  }),
);
export const RuneInput = styled.input(
  {
    width: '40px',
    height: '20px',
    textAlign: 'center'
  }
);
