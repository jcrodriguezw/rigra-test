import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export const ProductCountActions = styled.div`
  width: 180px;
  height: 48px;
  background: orange;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  
  & > span:first-child {
    cursor: pointer
  }

  & > span:last-child {
    cursor: pointer
  }
  
`;

export const StyledAddCircleIcon = styled(AddCircleIcon)`
  width: 48px;
  height: 48px;
  color: orange;
  cursor: pointer;
`;

export const DeleteAction = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: orange;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DeleteButton = styled.span`
  font-size: 16px;
  cursor: pointer;
  line-height: 2;
`;
