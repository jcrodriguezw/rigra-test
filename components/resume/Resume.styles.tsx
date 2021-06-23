import styled from 'styled-components';

export const ProductDetail = styled.p<{highlighted: boolean, bold: boolean}>`
  display: flex;
  justify-content: space-between;
  background: ${({ highlighted }) => highlighted && '#FFE200'};

  & > span {
    font-weight: ${({ bold }) => bold && '700'};
  }

  & > span:nth-of-type(2) {
    color: ${({ bold }) => bold && 'red'};
  }
`;
