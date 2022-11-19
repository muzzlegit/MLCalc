import styled from '@emotion/styled'

export const AppBox = styled.div(
    {   
      margin: '20px auto',
      padding: '8px',
      // width: '688px',
      width: 'auto',
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      borderRadius: '4px',
      backgroundColor: '#4a5153',

    }
);
export const PlayerBox = styled.div(
  {  
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    borderRadius: '4px',
    backgroundColor: '#212425',
  }
);
export const PlayerTitle = styled.p(
  { 
    padding: '4px',
    height: '24px',
    fontSize: '20px',
    color: 'pink',
    borderRadius: '4px',
    boxShadow: '0px 0px 4px 4px rgba(255,255,255,.3)',
  }
);
export const SelectorsBox = styled.div(
  {   
    width: '100%',
    display: 'flex',
    gap: '20px'
  }
);
