import styled from '@emotion/styled';

export const UnitCardBox = styled.div(
  {
    width: '74px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: '1px solid tomato',
    zIndex: '1'
  }
);
export const UnitFrame = styled.div(
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: '1px solid blue',
  },
  props => ({
    background: props.background,
    height: props.height
  }),
);
export const UnitImg = styled.div(
  {
    width: '68px',
    height: '82px',
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
