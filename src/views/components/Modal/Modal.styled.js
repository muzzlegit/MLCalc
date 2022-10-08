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
