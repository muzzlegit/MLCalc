import styled from '@emotion/styled';
import theme from 'constants/theme';

export const Input = styled.input(
  {
    padding: '2px',
    width: '90%',
    height: '14px',
    border: '1px solid #294b77',
    borderRadius: '2px',
    fontSize: '12px',
  },
  props => ({
    color: theme.colors.text,
    backgroundColor: theme.colors.primary,
  }),
);
