import styled from '@emotion/styled';

export const Backdrop  = styled.div(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 4,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    opacity: 1,
    transition: 'opacity 3800ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  props => ({
    background: props.background,
  }),
);
export const ModalBox  = styled.div(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: '8px',
  }
);