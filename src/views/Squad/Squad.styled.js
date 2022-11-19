import styled from '@emotion/styled'

export const SquadBox = styled.div(
    {  
        // width: '100px',
        // height: '100px',
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