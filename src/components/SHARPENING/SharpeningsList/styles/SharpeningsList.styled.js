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
    padding: '2px 6px',
  }
);