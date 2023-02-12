import React, { useReducer } from "react";
import CartContext from "./cart-context";
type Props = {
    children: React.ReactNode
}
const defaultCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}
const CartProvider: React.FC<Props> = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandeler = item => {
        dispatchCartAction({ type: 'ADD', item: item });
    }
    const removeItemFromCartHandeler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandeler,
        removeItem: removeItemFromCartHandeler,
    }
    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;