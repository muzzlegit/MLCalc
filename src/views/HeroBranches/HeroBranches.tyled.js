import styled from '@emotion/styled';

export const BranchesBox = styled.div(
  {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    gap: '12px'
  }
);
export const Branchwrap = styled.div(
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