import styled from '@emotion/styled'

export const SquadBox = styled.ul(
    {   
        margin: 0,
        padding: 0,
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: '690px',
        listStyle: 'none',
    },

props => ({
    background: props.background
  })
)
;