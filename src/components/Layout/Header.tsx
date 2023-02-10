import React, { Fragment } from 'react';
import headerImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
const Header: React.FC = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={headerImg} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    )
}

export default Header;