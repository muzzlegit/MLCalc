import styled from '@emotion/styled';

export const ButtonItem = styled.button({
  position: 'absolute',
  top: '70%',
  left: '7%',
  transform: 'translate(-50%, 50%)',
  maxWidth: '80px',
  padding: '2px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  color: '#ddddbd',
  borderColor: '#294b77',
  backgroundColor: '#294b77',
  boxShadow: '0px 0px 1px 1px rgba(131, 151, 167, 1)',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0px 0px 1px 1px rgba(131, 151, 167, 1)',
  },
});
