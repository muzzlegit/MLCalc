import styled from '@emotion/styled';

export const BranchesBox = styled.div(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    listStyle: 'none',
    backgroundColor: 'brown',
    outline: '1px solid tomato',
  },
  // props => ({
  //   background: props.background,
  // }),
);
export const BranchBox = styled.li(
  {
    margin: 0,
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    outline: '1px solid tomato',
  },
  // props => ({
  //   background: props.background,
  // }),
);
export const ButtonAdd = styled.button(
  {
    marginTop: '10px',
    padding: '4px',
  }
);