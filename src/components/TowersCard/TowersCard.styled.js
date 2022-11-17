import styled from '@emotion/styled';

export const TowerBox = styled.div(
  {
    height: '100%',
    display: 'flex'
  }
);
export const TowerImgBox = styled.div(
  {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '34px',
    height: '41px',
    backgroundColor: 'blue',
    cursor: 'pointer',
  },
  props => ({
    background: props.background,
  }),
  
);