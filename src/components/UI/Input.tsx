import React from 'react';
import classes from './Input.module.css';
type Props = {
    label: string,
    input: any
}
const Input: React.FC<Props> = ({ label, input }) => {
    return (
        <div className={classes.input}>
            <label htmlFor="">{label}</label>
            <input {...input} />
        </div>
    )
}

export default Input;