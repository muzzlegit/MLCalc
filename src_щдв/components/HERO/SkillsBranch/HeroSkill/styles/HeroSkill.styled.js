import styled from '@emotion/styled';

export const SkillBox = styled.li(
  {
    position: 'relative',
    width: '82px',
    height: '63px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  props => ({
    background: props.background
  }),
);
export const Skill = styled.div(
  {
    width:'58px',
    height: '53px'
  },
  props => ({
    background: props.background,
    filter: props.filter,
  }),
);
export const LevelButton = styled.button(
  {
    position: 'absolute',
    bottom: '-25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: '1px 2px',
    width: '30px',
    height: '16px',
    lineHeight: 0,
    border: '1px solid darkgray',
    borderRadius: '3px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  props => ({
    background: props.background
  }),
);