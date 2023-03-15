import styled from '@emotion/styled';

export const Backdrop  = styled.div(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    opacity: 1,
    transition: 'opacity 3800ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  props => ({
    background: props.background,
  }),
);
export const ButtonsBox  = styled.div(
  {
    margin: 0,
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px'
  }
);
export const Center  = styled.div(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: '8px',
    zIndex: '9',
    backgroundColor: 'wheat',
    outline: '1px solid tomato'
  }
);