import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
type Props = {
    onClick: () => void
}
const HeaderCartButton: React.FC<Props> = ({ onClick }) => {
    const [btnIsHighlighted, setBtnIsHightlighted] = useState<boolean>(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item: any) => {
        return curNumber + item.amount
    }, 0);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHightlighted(true)
        const timer = setTimeout(() => {
            setBtnIsHightlighted(false)
        }, 300)
        return () => {
            clearTimeout(timer);
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;