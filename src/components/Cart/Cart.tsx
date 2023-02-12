import React from 'react';
import classes from './Cart.module.css';
import Modal from '../../components/UI/Modal';
type Props = {
    onClose: () => void
}
const Cart: React.FC<Props> = ({ onClose }) => {
    const items: any = [{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }];
    const cartItems = <ul className={classes['cart-items']}>{items.map(item => <li>{item.name}</li>)}</ul>;
    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>close</button>
                <button className={classes.button
                }>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;