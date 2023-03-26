import styled from '@emotion/styled'

export const TowerSelectorBox = styled.div(
    { 
      marginLeft: '8px',
      padding: '4px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      borderRadius: '8px',
      border: '1px solid #383c3d',
      backgroundColor: '#111728',
    }
);
export const SelectorsWrap = styled.div(
  {
    position: 'relative',
  }
);
export const TowersBox = styled.div(
  { 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
);
export const TowerBox = styled.div(
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    '&:hover': {
      cursor: 'pointer',
    }
  }
);
export const Tower = styled.div(
  {
    color: 'transparent',
    height: '38px'
  },
props => ({
  width: props.width,
  background: props.background,
  filter: props.filter
})
);
export const LevelBox = styled.ul(
  {
    width: '100%',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',    
  
  }
);
export const Level = styled.li(
  {
    height: '26px',
    width: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  props => ({
    color: props.color,
    filter: props.filter,
    background: props.background,
  })
);
export const AddButton = styled.button(
  {
    position: 'absolute',
    top: '40%',
    right: '0',
    transform: 'translate(50%, -50%)',
    height: '30px',
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '1px solid #4a5153',
    backgroundColor: '#212425',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 0px 4px 4px rgba(0,255,0,.4)',
      backgroundColor: '#4a5153',
    }
  }
);
export const RemoveButton = styled.button(
  {
    position: 'absolute',
    top: '40%',
    left: '0',
    transform: 'translate(-50%, -50%)',
    height: '30px',
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '1px solid #4a5153',
    backgroundColor: '#212425',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 0px 4px 4px rgba(187, 10, 1, .5)',
      backgroundColor: '#4a5153',
    }
  }
);
export const ButtonImg = styled.div(
  {
    height: '13px',
    width: '13px',
  },
  props => ({
    background: props.background,
    filter: props.filter,
  })
);
export const Input = styled.input(
  {    
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '18px',
    height: '16px',
    fontSize: '12px',
    textAlign: 'center',
    border: '1px solid #212425'
  }
);