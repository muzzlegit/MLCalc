import styled from '@emotion/styled';

export const Wrap = styled.div(
  {
    position: 'relative',
    padding: '4px',
    width: '600px',
    height: '600px',
    display: 'flex',
    gap: '30px',
    // backgroundColor:'#212425',
    // outline: '1px solid tomato',
  }
);
export const DollWrap = styled.div(
  {
    padding: '4px',
    width: '50%',
    // height: '100%',
    // outline: '1px solid tomato',
  }
);
export const BranchesWrap = styled.div(
  {
    padding: '4px',
    width: '50%',
    // height: '100%',
    // outline: '1px solid tomato',
  }
);
export const HeroWrap = styled.div(
  {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '82px',
    height: '99px',
    backgroundColor: '#212425',
    borderRadius: '2px',
    boxShadow: '0px 0px 1px 1px rgba(255,255,255,.2)',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 0px 4px 4px rgba(255,255,255,.4)',
    },
  }
);
export const HeroBox = styled.div(
  {
    width: '100%',
    height: '100%'
  },
  props => ({
    background: props.background,
  }),
);
export const ArttefactWrap = styled.div(
  {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '73px',
    height: '83px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  props => ({
    top: props.top,
    left: props.left,
    background: props.background,
  }),
);