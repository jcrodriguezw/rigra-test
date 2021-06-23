import { Button } from '@material-ui/core';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/client';

import Resume from '../resume/Resume.component';
import { CarHeader, CardDetail } from './ShoppingResume.styles';
import { IShoppingResumeProps } from '../../interfaces/interfaces'
import {ADD_ORDER} from '../../graphql/Mutations';
import {ORDERS} from '../../graphql/queries'

const BUY_NOW = 'Buy now and get it';

const useStyles = makeStyles(() => ({
  styledButton: {
    color: '#ffffff',
    background: 'orange',
    width: '100%',

    "&:hover": {
      background: 'rgba(255,165,0,0.8)'
    }
  },
}));


export default function ShoppingResume({ car }:IShoppingResumeProps):JSX.Element {
  const router = useRouter();
  const classes = useStyles();

  const [addOrder] = useMutation(ADD_ORDER);
  const {data: { orders }} = useQuery(ORDERS)

  let price = 0;
  const TAX = 18;
  const SHIPPING = 10;

  car?.forEach((item) => {
    const cost = item.price * item.count;

    price = price + cost;
  });

  const shippingCost = (price * SHIPPING) / 100;
  const taxes = (price * TAX) / 100;
  const total = price + shippingCost;

  function shippingDate() {
    const currentDay = moment().format('dddd');
    let shippingDay = moment().add(1, 'days');

    if (currentDay === 'Friday') {
      shippingDay = moment().add(3, 'days');
    }

    if (currentDay === 'Saturday') {
      shippingDay = moment().add(2, 'days');
    }

    return shippingDay.format('DD/MM/YY');
  }

  async function onHandleSubmit() {
    if (total < 50)
      return (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          total must be higher to $ 50
        </Alert>
      );

      const str = 0 + orders.length + 1
      const newStr = str.toString()
      const pad = "P0000"
      const id = pad.substring(0, pad.length - newStr.length) + newStr
      
      const response = await addOrder({ 
        update: cache => {
          cache.writeQuery({
            query: ORDERS,
            data: {
              orders: [
                ...orders,
                {
                  id,
                  total,
                }
              ]
            }
          })
        }
      }) 

      if(response){
        router.push('/completed');
      }

  }

  const disabledCompleteButton = !car.length || total < 50;

  return (
    <article>
      <CarHeader>
        <AirportShuttleIcon />
        <span>
          {BUY_NOW} <strong>{shippingDate()}</strong>
        </span>
      </CarHeader>

      <CardDetail>
        <Resume
          price={price}
          shippingCost={shippingCost}
          taxes={taxes}
          total={total}
        />
      </CardDetail>

      <Button
        variant="contained"
        color="primary"
        disabled={disabledCompleteButton}
        onClick={() => onHandleSubmit()}
        className={classes.styledButton}
      >
        Complete Order
      </Button>
    </article>
  );
}
