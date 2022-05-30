import styled from '@emotion/styled';

export const ArticleBox = styled.article(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    outline: '1px solid tomato',
  },
  props => ({
    background: props.background,
  }),
);
export const UnitImg = styled.div(
  {
    position: 'absolute',
    top: '50%',
    translate: '0 -50%',
    zIndex: '-1',
    width: '68px',
    height: '82px',
    backgroundColor: 'aquamarine',
    cursor: 'pointer',
  },
  props => ({
    background: props.background,
    filter: props.filter,
  }),
);
export const UnitImgBox = styled.div(
  {
    position: 'relative',
    zIndex: '999',
    marginBottom: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '78px',
    height: '92px',

    outline: '1px solid tomato',
  },
  props => ({
    background: props.background,
  }),
);
export const ArticleInput = styled.input({
  width: '74px',
  height: '10px',
  fontSize: '12px',
});
export const UnitLevel = styled.p`
  min-width: 50px;
  padding: 3px;
  margin-bottom: 10px;

  &::before {
    content: '';
    display: inline-block;
    width: 22px;
    height: 22px;
    background: ${props => props.background};
  }
`;
export const UnitAttack = styled.p`
  min-width: 50px;
  padding: 3px;
  margin-bottom: 10px;

  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => props.background};
  }
`;
export const UnitDefense = styled.p`
  min-width: 50px;
  padding: 3px;
  margin-bottom: 10px;

  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => props.background};
  }
`;
export const UnitHealth = styled.p`
  min-width: 50px;
  padding: 3px;
  margin-bottom: 10px;

  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => props.background};
  }
`;
