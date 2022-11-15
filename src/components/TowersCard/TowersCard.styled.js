import styled from '@emotion/styled';

export const TowerBox = styled.div(
  {
    display: 'flex',
    minWidth: '78px',
    height: '92px',
    backgroundColor: 'red'
  }
);
export const TowerImgBox = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '34px',
    height: '41px',
    backgroundColor: 'blue',
    cursor: 'pointer'
  },
  props => ({
    background: props.background,
  }),
  
);