import styled from 'styled-components';
import { Card, Button } from '@material-ui/core';

export const CarHeader = styled.div`
  display: flex;
  align-items: flex-end;
  height: 55px;
  justify-content: center;

  & > span {
    margin-left: 1em;
  }
`;

export const CardDetail = styled(Card)`
  padding: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  height: 160px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
