import styled from '@emotion/styled';

export const Wrap = styled.div(
  {
    width: '100%',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    borderRadius: '4px',
    backgroundColor: '#294b77',
  },
  props => ({
    boxShadow: props.boxShadow ? '0px 0px 3px 3px #0641f3' : null,
})
);
export const RunesBox = styled.div(
  {
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    borderRadius: '4px',
    backgroundColor: '#294b77',
  }
);
export const RuneWrap = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
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
    filter: props.filter === 'true' ? null : 'grayscale(100%) brightness(70%)',
  }),
);
export const RuneInput = styled.input(
  {
    width: '40px',
    height: '20px',
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#ddddbd',
  }
);
export const ButtonsBox = styled.div(
  {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    gap: '16px',
  }
);
export const ButtonItem = styled.button(
  {
    minWidth: '20px',
    height: '20px',
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
      boxShadow: '0px 0px 3px 3px rgba(131, 151, 167, 1)',
    }
  }
);