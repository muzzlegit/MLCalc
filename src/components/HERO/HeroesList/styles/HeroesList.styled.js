import styled from '@emotion/styled';
import 'animate.css';
export const ListBox = styled.ul(
  {
    padding: '32px 16px',
    width: '240px',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
    gap: '16px',
    borderRadius: '4px',
    backgroundColor: '#111728'
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
    backgroundColor: '#294b77',
    transition: 'backgroundColor 3000ms ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#111728',
    }
  }
);
export const HeroBox = styled.div(
  {
    width: '81px',
    height: '99px', 
    animation: 'fadeIn',
    animationDuration: '1.5s',
  },
  props => ({
    background: props.background,
  }),
);