import styled from '@emotion/styled'

export const TowersButtonBox = styled.button(
    {   
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48px',
        height: '53px',
        cursor: 'pointer',
        border: 'none'
    },

props => ({
    background: props.background
  })
);