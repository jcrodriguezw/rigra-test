import { useState } from 'react';
import {useQuery} from '@apollo/client'

import {PRODUCTS} from '../../graphql/queries'
import ProductList from '../productList/ProductList.component';
import ShoppingResume from '../shoppingResume/ShoppingResume.component';
import {
  ShoppingCarContainer,
  ShoppingWrapper,
  ProductsFinder,
  StyledTextField,
  CardItemsWrapper,
} from './ShoppingCar.styles';
import { IProduct } from '../../interfaces/interfaces'

export default function ShoppingCar(): JSX.Element {
  const [car, setCar] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string>('');
  const {data: dataProduct } = useQuery(PRODUCTS)

  const filterProduct = dataProduct.products?.filter((product:IProduct) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <ShoppingCarContainer>
        <ShoppingWrapper>
        <ProductsFinder>
          <StyledTextField
            id="outlined-basic"
            label="Search Products"
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
          />
          <CardItemsWrapper hasProducts={Boolean(car.length || search)}>
            <ProductList
              car={car}
              setCar={setCar}
              search={search}
              filterProduct={filterProduct}
            />
          </CardItemsWrapper>
        </ProductsFinder>

        <ShoppingResume car={car} />
      </ShoppingWrapper>
    </ShoppingCarContainer>
  )
}