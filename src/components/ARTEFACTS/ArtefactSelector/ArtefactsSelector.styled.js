import styled from '@emotion/styled';

export const SelectorsBox = styled.div(
  {
    position: 'relative',
    padding: '8px 20px',
    height: '600px',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    gap: '40px',
    borderRadius: '4px',
    backgroundColor: '#111728',
  }
);
export const SelectedArtefactWrap = styled.div(
  { 
    position: 'absolute',
    transform: 'translate( 50%, -50% )',
    height: '135px',
    width: '135px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
    boxShadow: '0px 0px 4px 4px rgba(221, 221, 189, .5)',
  },
  props => ({
    background: props.background,
    top: props.top,
    right: props.right,
  }),
);
export const SelectedArtefact = styled.div(
  { 
    height: '62px',
    width: '62px',
  },
  props => ({
    background: props.background,
  })
);
export const PerfectIcon = styled.div(
  {
    position: 'absolute',
    top: '28px',
    right: '16px',
    transform: 'translate(50%, -50%)',
    height: '26px',
    width: '25px',
  },
  props => ({
    background: props.background,
    filter: props.filter === 'true' ? null : 'grayscale(100%) brightness(70%)',

  })
);
export const ArtefactsListWrap = styled.div(
  { 
    position: 'absolute',
    transform: 'translate( 50%, -50% )',
    padding: '4px',
    height: '360px',
    width: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '4px',
    backgroundColor: '#294b77',
  },
  props => ({
    top: props.top,
    right: props.right,
  })
);
export const ArtefactsList = styled.ul(
  { 
    padding: '4px',
    height: '340px',
    width: '90px',
    overflowY: 'scroll',
    borderRadius: '4px',

  }
);
export const ArtefactBackgraund = styled.li(
  { 
    marginBottom: '6px',
    height: '62px',
    width: '62px',
    borderRadius: '6px',
    backgroundColor: '#89abad',
    // border: '1px solid #89abad',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 0px 2px 2px rgba(131, 151, 167, 1)',
    }
  }
);
export const ArtefactImg = styled.div(
  { 
    height: '62px',
    width: '62px',
    borderRadius: '6px',
    backgroundColor: '#111728',
  },
  props => ({
    background: props.background,
  })
);
