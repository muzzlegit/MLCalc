import styled from '@emotion/styled';

export const ModalBox = styled.div(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: 0,
    width: '606px',
    height: '530px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: '1px solid tomato',
  },
  props => ({
    background: props.background,
  }),
);
export const HeroWindow = styled.div(
  {
    position: 'absolute',
    top: '97px',
    left: '79px',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: 0,
    width: '82px',
    height: '99px',
    cursor: 'pointer',
    outline: '1px solid tomato',
  },
  props => ({
    background: props.background,
  }),
);