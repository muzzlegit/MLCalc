import styled from '@emotion/styled';

export const ModalBox = styled.div(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: 0,
    width: '240px',
    height: '320px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
    outline: '1px solid tomato',
  },
  // props => ({
  //   background: props.background,
  // }),
);
export const HeroBox = styled.div(
  {
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