import React from 'react';
import classes from './MealItem.module.css';
interface Props {
    name: string,
    description: string,
    price: number
}
const MealItem: React.FC<Props> = ({ name, description, price }) => {
    const fee = `$${price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{fee}</div>
            </div>
            <div>

            </div>
        </li>
    )
}

export default MealItem;