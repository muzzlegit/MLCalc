import styled from '@emotion/styled';

export const SelectorsBox = styled.div(
  {
    height: '600px',
    width: '500px',
    borderRadius: '4px',
    backgroundColor: '#111728',
  }
);
export const SelectedArtefact = styled.div(
  { 
    position: 'relative',
    height: '62px',
    width: '62px',
    backgroundColor: '#8397a7',
    outline: '1px solid tomato'
  },
  props => ({
    background: props.background,
  }),
);
export const SelectButton = styled.button(
  { 
    position: 'absolute',
    bottom: '0',
    rigth: '0',
    transform: 'translate(100%, 50%)',
    height: '20px',
    width: '20px',
    border: '1px solid #ddddbd',
    borderRadius: '50%',
    backgroundColor: '#8397a7'
  },
  props => ({
    background: props.background,
  }),
);
export const ArtefactsList = styled.ul(
  { 
    padding: '4px',
    // height: '240px',
    width: '72px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
    border: '1px solid #ddddbd',
    borderRadius: '4px',
    backgroundColor: '#8397a7'
  }
);
export const ArtefactImg = styled.li(
  { 
    height: '62px',
    width: '62px',
    border: '1px solid #ddddbd',
    backgroundColor: '#8397a7',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  props => ({
    background: props.background,
  }),
);
