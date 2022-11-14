import styled from '@emotion/styled';

export const UnitCardBox = styled.div(
  {    
    marginTop: '15px',
    width: '74px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px'

  }
);
export const UnitFrameWrap = styled.div(
  {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  }
);
export const UnitFrame = styled.div(
  {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  props => ({
    background: props.background,
    height: `${ props.height  === 4 ? `100px` : `92px` }`
  }),
);
export const UnitImg = styled.div(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    width: '68px',
    height: '82px'
  },
  props => ({
    background: props.background,
  }),
);
export const PropertiesWrap = styled.div(
  {
    marginBottom: '4px',
    padding: '2px',
    width: '90%',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '8px',
    borderRadius: '4px',
    backgroundColor: '#4a5153'
  }
);
export const UnitCardInput = styled.input(
  {
    width: '90%',
    height: '16px',
    fontSize: '12px'
  }
);
export const UnitProperty = styled.p`
  min-width: 50px;
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: start;
  align-items: center;

  &::before {
    content: '';
    margin-right: 8px;
    display: inline-block;
    width: 18px;
    height: 16px;
    background: ${props => props.background};
  }
`;

export const AddValue = styled.span(
  {
    marginLeft: '4px'
  },
  props => ({
    color: props.color,
  })
);