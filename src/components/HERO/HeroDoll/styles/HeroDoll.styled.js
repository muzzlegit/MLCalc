import styled from '@emotion/styled';
import 'animate.css';
export const Wrap = styled.div(
  {
    position: 'relative',
    padding: '4px',
    width: '600px',
    height: '600px',
    display: 'flex',
    gap: '30px',
    // backgroundColor:'#212425',
    outline: '1px solid tomato',
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
    width: '96px',
    height: '115px',
    backgroundColor: '#294b77',
    boxShadow: '0px 0px 4px 4px rgba(255,255,255,.4)',
    borderRadius: '2px',
    '&:hover': {
      cursor: 'pointer'
    },
  }
);
export const HeroBox = styled.div(
  {
    width: '100%',
    height: '100%',
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
    boxShadow: props.shadow ? '0px 0px 4px 4px rgba(255,255,255,.4)' : null,
  }),
);