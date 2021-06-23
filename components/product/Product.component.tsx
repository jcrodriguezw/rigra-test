import Image from 'next/image';

import {
  ProductDetailWrapper,
  ProductImage,
  ProductDetail,
} from './Product.styles';
import {IProductProps} from '../../interfaces/interfaces';

export default function Product({ product, checkProduct, productCount }:IProductProps): JSX.Element {
  return (
    <div key={product.id}>
      <ProductDetailWrapper>
        <ProductImage>
          <Image
            src={product.image}
            alt={product.name}
            width={80}
            height={90}
          />
        </ProductImage>

        <ProductDetail>
          <div>
            <p>{product.name}</p>
            <p>$ {product.price}</p>
          </div>

          {checkProduct(product)}
        </ProductDetail>
      </ProductDetailWrapper>
      {productCount(product)}
    </div>
  );
}
