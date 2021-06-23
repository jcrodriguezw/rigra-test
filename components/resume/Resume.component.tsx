import { ProductDetail } from './Resume.styles';
import {IResumeProps} from '../../interfaces/interfaces'

export default function Resume({ price, shippingCost, taxes, total }:IResumeProps): JSX.Element {
  const shoppingCarResume = [
    {
      id: 1,
      item: 'Products',
      price: `$ ${price || '0,00'}`,
    },
    {
      id: 2,
      item: 'Shipping Cost',
      price: `$ ${shippingCost || '0,00'}`,
    },
    {
      id: 3,
      item: 'Taxes',
      price: `$ ${taxes || '0,00'}`,
    },
    {
      id: 4,
      item: 'Total',
      price: `$ ${total || '0,00'}`,
    },
  ];

  return (
    <>
      {shoppingCarResume.map((detail) => {
        const highlighted = detail.item === 'Shipping Cost';
        const bold = detail.item === 'Total';

        return (
          <ProductDetail key={detail.id} highlighted={highlighted} bold={bold}>
            <span>{detail.item}</span>
            <span>{detail.price}</span>
          </ProductDetail>
        );
      })}
    </>
  )
}
