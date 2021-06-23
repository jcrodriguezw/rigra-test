import styled from 'styled-components';

export const ProductDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 1em;
  border: 1px solid #dddddd;
  width: 100%;
  margin: 0.5em 0;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 70px;
  align-items: center;
  text-align: left;
`;
