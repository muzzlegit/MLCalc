import styled from '@emotion/styled'

export const SquadBox = styled.div(
    {   
        marginBottom: '12px',
        padding: 0,
        // width: '100px',
        // height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        listStyle: 'none',
        outline: '1px solid tomato'
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