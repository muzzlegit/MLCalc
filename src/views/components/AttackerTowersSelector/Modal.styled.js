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
export const TowerBox = styled.div(
  {   
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',

  },

props => ({
  background: props.background
})
)
export const Tower = styled.div(
  {   
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    outline: '1px solid green',
    color: 'transparent'
  },

props => ({
  background: props.background
})
)
;