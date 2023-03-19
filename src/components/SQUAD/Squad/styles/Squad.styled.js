import styled from '@emotion/styled'

export const SquadBox = styled.div(
    {  
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        listStyle: 'none',
    },

props => ({
    background: props.background
  })
)
;
export const UnitsBox = styled.ul(
    {   
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
)
;