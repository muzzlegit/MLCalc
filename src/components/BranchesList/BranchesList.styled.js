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
    backgroundColor: '#111728',
  }
);
export const BranchBox = styled.li(
  {
    padding: '12px 4px ',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    color: 'rgba(221, 221, 189, 0.5)',
    borderRadius: '4px',
    border: '1px solid #294b77',
    backgroundColor: '#294b77',
    '&:hover': {
      color: '#ddddbd',
      border: '1px solid #ddddbd'
    }
  }
);
export const SkillsBranch = styled.ul(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
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
    padding: '4px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#8397a7',
    color: '#111728',
    scale: '1',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#ddddbd',
      scale: '1.1',
    }
  }
);
