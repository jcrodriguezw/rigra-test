import Link from 'next/link';

import { OrderCompletedContainer } from './OrderCompleted.styles';
import OrderCompletedIcon from '../../assets/Complete';

export default function OrderCompleted():JSX.Element {
  return (
    <OrderCompletedContainer>
      <div>
        <h2>Thank you</h2>
        <p>Your order P0001 has been registered</p>

        <p>
          <Link href="/">Continue shopping</Link>
        </p>

        <div>
          <OrderCompletedIcon />
        </div>
      </div>
    </OrderCompletedContainer>
  );
}
