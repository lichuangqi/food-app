import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
interface Props {
    name: string,
    description: string,
    price: number,
    id: number
}
const MealItem: React.FC<Props> = ({ name, description, price, id }) => {
    const cartCtx = useContext(CartContext);
    const fee = `$${price.toFixed(2)}`;
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        });
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{fee}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;