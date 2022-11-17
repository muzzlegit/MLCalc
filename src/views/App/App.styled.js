import styled from '@emotion/styled'

export const AppBox = styled.div(
    {   
      margin: '20px auto',
      padding: '6px',
      width: '688px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start-flex',
      gap: '12px',
      outline: '1px solid tomato'
    }
);
export const CenterBox = styled.div(
  {   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px'
  }
);
export const LeftBox = styled.div(
  {   

    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'start-flex',
    gap: '16px'
  }
);