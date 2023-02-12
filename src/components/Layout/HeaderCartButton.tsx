import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
type Props = {
    onClick: () => void
}
const HeaderCartButton: React.FC<Props> = ({ onClick }) => {
    return (
        <button className={classes.button} onClick={onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton;