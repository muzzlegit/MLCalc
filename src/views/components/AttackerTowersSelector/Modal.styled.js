import styled from '@emotion/styled'

export const ModalBox = styled.div(
    {   
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '260px',
      height: '198px',
      backgroundColor: 'red'
    },

props => ({
    background: props.background
  })
)
export const TowersBox = styled.div(
  { 
    position: 'absolute',
    top: '47px',
    left: '34px',
    margin: 0,
    width: '189px',
    height: '119px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#d6caac'

  }
)
export const TowerBox = styled.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    cursor: 'pointer'
  }
)
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
)

export const LevelBox = styled.ul(
  {
    margin: 0,
    padding: 0,
    width: '100%',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
)
export const Level = styled.li(
  {
    width: '10px',
    cursor: 'pointer'
  },
  props => ({
    filter: props.filter
  })
)
;