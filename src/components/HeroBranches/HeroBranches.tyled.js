import styled from '@emotion/styled';

export const BranchesBox = styled.div(
  {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    gap: '12px'
  }
);
export const BranchWrap = styled.div(
  {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px'
  },
  props => ({
    marginTop: props.marginTop,
  }),
);
export const ButtonsWrap = styled.div(
  {
    display: 'flex',
    gap: '12px'
  }
);
export const Button = styled.button(
  {
    height: '18px',
    width: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 0px 4px 4px rgba(255,255,255,.4)'
    }
  },
  props => ({
    filter: props.filter,
    background: props.background,
  }),
);