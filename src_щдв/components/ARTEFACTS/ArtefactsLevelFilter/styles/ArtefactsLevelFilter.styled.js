import styled from '@emotion/styled';

export const FilterBox = styled.div(
  {
    padding: '8px',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '4px',
    backgroundColor: '#294b77',
    color: '#ddddbd',
  }
);
export const ButtonItem = styled.button(
  {
    minWidth: '20px',
    height: '20px',
    padding: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    color: '#ddddbd',
    '&:hover': {
      cursor: 'pointer'
    }
  },
    props => ({
    backgroundColor: props.checked ? '#111728' : '#294b77',
    borderColor: props.checked ? '#111728' : '#294b77',
    boxShadow: props.checked ? null : '0px 0px 1px 1px rgba(131, 151, 167, 1)',
  })
);
