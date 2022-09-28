import styled from '@emotion/styled';

export const Branch = styled.ul(
  {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: 0,
    width: '84px',
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none'
  },
  props => ({
    top: props.top,
    left: props.left,   
  }),
);
export const SkillBox = styled.li(
  {
    position: 'relative',
    margin: 0,
    padding: 0,
    width: '84px',
    height: '65px',
    outline: '1px solid tomato',
  },
  props => ({
    background: props.background
  }),
);
export const Skill = styled.div(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: 0,
    width:'58px',
    height: '53px'
  },
  props => ({
    background: props.background,
    filter: props.filter,
  }),
);