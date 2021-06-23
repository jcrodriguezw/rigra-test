import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import Product from '../product/Product.component';
import {
  ProductCountActions,
  StyledAddCircleIcon,
  DeleteAction,
  DeleteButton,
} from './ProductList.styles';
import {IProduct, IProductListProps} from '../../interfaces/interfaces';

const EMPTY = 'Your cart is empty';
const EMPTY_CHOSEN_BUY = "Seems like you haven't chosen what to buy...";


export default function ProductList({filterProduct, car, search, setCar}:IProductListProps):JSX.Element {

  function onHandleAddToCar(product:IProduct) {
    const inserted = insertedProduct(product);

    if (!inserted) {
      const insertProduct = {
        ...product,
        count: 1,
      };

      return setCar([...car, insertProduct]);
    }
  }

  const checkProduct = (product:IProduct) => {
    const inserted = insertedProduct(product);

    function onHandleRemoveFromCar() {
      const newCar = car?.filter((item) => item.id !== product.id);

      setCar(newCar);
    }

    if (inserted) {
      return (
        <div>
          <DeleteAction>
            <span>1</span>
          </DeleteAction>
          <DeleteButton onClick={() => onHandleRemoveFromCar()}>
            delete
          </DeleteButton>
        </div>
      );
    }

    return <StyledAddCircleIcon onClick={() => onHandleAddToCar(product)} />;

  };

  const insertedProduct = (product:IProduct): any =>
    car.find((item) => item.id === product.id);

  function countActions(product:IProduct, action:string) {
    const inserted = insertedProduct(product);

    const index = car.indexOf(inserted);

    let updateProduct;

    switch (action) {
      case 'INCREASE':
        updateProduct = {
          ...inserted,
          count: inserted.count + 1,
        };
        break;

      case 'DIMINISH':
        updateProduct = {
          ...inserted,
          count: inserted.count - 1,
        };
        break;
      default:
        break;
    }

    const newCar = car.slice();

    newCar[index] = updateProduct;

    setCar(newCar);
  }

  const productCount = (product:IProduct) => {
    const inserted = insertedProduct(product);

    if (!inserted) return;

    return (
      <ProductCountActions>
        <span onClick={() => countActions(product, 'DIMINISH')}>-</span>
        <span>{inserted?.count}</span>
        <span onClick={() => countActions(product, 'INCREASE')}>+</span>
      </ProductCountActions>
    );

  };

  if (!search) {
    if (!car.length) {
      return (
        <div>
          <ShoppingBasketIcon />
          <h2>{EMPTY}</h2>
          <p>{EMPTY_CHOSEN_BUY}</p>
        </div>
      );
    }

    return (
      <>
        {car?.map((product) => (
          <Product
            key={product.id}
            product={product}
            checkProduct={checkProduct}
            productCount={productCount}
          />
        ))}
      </>
    )
  }

  return (
    <>
      {filterProduct?.map((product) => (
        <Product
          key={product.id}
          product={product}
          checkProduct={checkProduct}
          productCount={productCount}
        />
      ))}
    </>
  )
}