import Link from 'next/link';
import {useQuery} from '@apollo/client';

import { OrderCompletedContainer } from './OrderCompleted.styles';
import OrderCompletedIcon from '../../assets/Complete';
import {ORDERS} from '../../graphql/queries';
import { useEffect } from 'react';

export default function OrderCompleted():JSX.Element {
  const {data: { orders }} = useQuery(ORDERS)

  if(!orders.length) return (
    <OrderCompletedContainer>
      <h2>No tienes ordenes</h2>
    </OrderCompletedContainer>
  )

  const lastOrder = orders.length - 1

  const orderId = orders[lastOrder].id

  const finishedOrder = `Your order ${orderId} has been registered`

  return (
    <OrderCompletedContainer>
      <div>
        <h2>Thank you</h2>
        <p>{finishedOrder}</p>

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
