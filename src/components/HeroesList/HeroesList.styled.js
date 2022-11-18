import styled from '@emotion/styled';

export const ModalBox = styled.ul(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: '16px',
    width: '240px',
    height: '320px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
    gap: '16px',
    backgroundColor: '#2c2e30'
  },
  // props => ({
  //   background: props.background,
  // }),
);
export const HeroBox = styled.li(
  {
    margin: 0,
    padding: 0,
    width: '81px',
    height: '99px',
    cursor: 'pointer',
    borderRadius: '2px',
    border: '1px solid #323435',
  },
  props => ({
    background: props.background,
  }),
);