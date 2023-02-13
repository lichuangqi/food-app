import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';
type Props = {
    onCancel: () => void
    onConfirm: (userData: any) => void
}

const isEmpty = value => value.trim() === '';
const isFiveCharts = value => value.trim().length === 5;

const Checkout: React.FC<Props> = ({ onCancel, onConfirm }) => {
    const [formInputsValidaity, setFormInputsValidity] = useState<any>({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })
    const nameInputRef = useRef<any>();
    const streetInputRef = useRef<any>();
    const postalCodeInputRef = useRef<any>();
    const cityInputRef = useRef<any>();
    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = isFiveCharts(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        })

        const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredPostalCodeIsValid && enteredStreetIsValid;

        if (!formIsValid) {
            return;
        }
        // submit the cart data
        onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode
        });
    };
    const nameControlClasses = `${classes.control} ${formInputsValidaity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputsValidaity.street ? '' : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} ${formInputsValidaity.postalCode ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputsValidaity.city ? '' : classes.invalid}`;
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsValidaity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputsValidaity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef} />
                {!formInputsValidaity.postalCode && <p>Please enter a valid postalCode!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputsValidaity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;