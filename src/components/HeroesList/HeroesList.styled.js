import styled from '@emotion/styled';

export const ListBox = styled.ul(
  {
    padding: '16px',
    width: '240px',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
    gap: '16px',
    backgroundColor: '#2c2e30'
  }
);
export const HeroesBox = styled.li(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  }
);
export const HeroBoxWrap = styled.div(
  {
    width: '90px',
    height: '108px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: '#404346',
    '&:hover': {
      cursor: 'pointer'
    }
  }
);
export const HeroBox = styled.div(
  {
    width: '81px',
    height: '99px',
  },
  props => ({
    background: props.background,
  }),
);