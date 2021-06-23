import styled from 'styled-components';
import { TextField, Card, Button } from '@material-ui/core';

export const ShoppingCarContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em;
`;

export const ShoppingWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 360px);
  column-gap: 4em;
`;

export const ProductsFinder = styled.div`
  display: grid;
  row-gap: 2em;
`;

export const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    width: 100%;
    height: 48px;
    padding: 0 1em;
  }
`;

export const CardItemsWrapper = styled(Card)<{hasProducts: boolean}>`
  height: 480px;
  box-shadow: 0 1px 3px grey;
  display: ${({ hasProducts }) => (hasProducts ? 'block' : 'flex')};
  justify-content: center;
  align-items: center;
  text-align: center;

  &.MuiCard-root {
    overflow-y: auto;
  }

  svg {
    font-size: 60px;
  }
`;
