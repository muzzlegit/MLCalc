import styled from '@emotion/styled';

export const BranchesBox = styled.ul(
  {
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    listStyle: 'none',
    borderRadius: '4px',
    backgroundColor: '#212425',
  }
);
export const BranchBox = styled.li(
  {
    margin: 0,
    padding: '12px 4px ',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    color: '#5794d1',
    borderRadius: '4px',
    backgroundColor: '#404346',
  }
);
export const SkillsBranch = styled.ul(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px'
  }
  );
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
  })
);
export const Skill = styled.div(
  {
    width:'58px',
    height: '53px'
  },
  props => ({
    background: props.background,
    filter: props.filter,
  })
);
export const ButtonAdd = styled.button(
  {
    color: 'green',
    padding: '4px',
    '&:hover': {
      cursor: 'pointer'
    }
  }
);
