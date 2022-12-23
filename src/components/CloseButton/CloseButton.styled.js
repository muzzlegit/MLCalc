import styled from '@emotion/styled';

export const ButtonBox = styled.div(
  {
    position: 'absolute',
    top: '0',
    right: '0',
    transform: 'translate(100%, -100%)',
    // transform: 'translate(50%, -50%)',
    width: '26px',
    height: '26px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#294b77',
      boxShadow: '0px 0px 4px 4px rgba(221, 221, 189, .5)',
    }
  },
  props => ({
    top: props.top,
    right: props.right,
  })
);
export const ButtonImg = styled.div(
  {
    width: '14px',
    height: '14px',
  },
  props => ({
    background: props.background
  })
);