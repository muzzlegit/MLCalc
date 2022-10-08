import styled from '@emotion/styled';

export const ModalBox = styled.div(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: '40px 30px 24px 30px',
    width: '546px',
    height: '466px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
   
    outline: '1px solid tomato',
  },
  props => ({
    background: props.background,
  }),
);
export const HeroBox = styled.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '8px 0 0 8px',
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
export const HeroDoll = styled.div(
  {
    position: 'relative',
    margin: 0,
    padding: 0,
    width: '263px',
    height: '100%',
    display: 'block',
    outline: '1px solid tomato',
  }
);