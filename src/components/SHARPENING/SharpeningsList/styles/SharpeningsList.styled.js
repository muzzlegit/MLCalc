import styled from '@emotion/styled';


export const SharpeningBox = styled.ul(
  {    
    // minWidth: '400px',
    // padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '6px'
  }
);
export const SharpeningItem = styled.li(
  {    
    // minWidth: '400px',
    // padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px'
  }
);
export const SharpeningImg = styled.div(
  {
    width: '36px',
    height: '32px',
  },
    props => ({
    background: props.background
  })
);
export const SharpeningButton = styled.button(
  {
    minWidth: '20px',
    height: '20px',
    padding: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    color: '#bb0a01',
    borderColor: '#294b77',
    backgroundColor: '#294b77',
    boxShadow: '0px 0px 1px 1px rgba(131, 151, 167, 1)',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 0px 3px 3px rgba(131, 151, 167, 1)',
    }
  }
);