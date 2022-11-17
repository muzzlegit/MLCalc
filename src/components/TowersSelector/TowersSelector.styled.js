import styled from '@emotion/styled'

export const TowerSelectorBox = styled.div(
    {   
      margin: 0,
      padding: '4px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      borderRadius: '2px',
      border: '1px solid #383c3d',
      backgroundColor: '#2d3031'

    }
)
export const TowersBox = styled.div(
  { 
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'space-around',    
    color: 'white'
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