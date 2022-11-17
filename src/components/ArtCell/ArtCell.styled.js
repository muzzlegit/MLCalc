import styled from '@emotion/styled';

export const ArtefactWrap = styled.div(
  {    
    width: '61px',
    height: '61px'
  },
  props => ({
    backgroundColor: props.backgroundColor,
  })
);
export const ArtefactImg = styled.div(
  {  
    width: '100%',
    height: '100%'
  },
  props => ({
    background: props.background,
  })
);