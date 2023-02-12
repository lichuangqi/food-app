import React from 'react';
import classes from './CartItem.module.css';

type Props = {
    name: string,
    price: number,
    amount: number,
    onAdd:()=>void,
    onRemove: ()=> void
}

const CartItem:React.FC<Props> = ({name,price,amount,onAdd,onRemove}) => {
  const curprice = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{curprice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;