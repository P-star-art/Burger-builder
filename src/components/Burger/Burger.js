import React from 'react';
import classes from '../Burger/Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    const updatedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                })
        })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {updatedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}


export default Burger;
