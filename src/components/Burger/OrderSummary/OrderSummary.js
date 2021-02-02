import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredient)
        .map(igKey => {
            return <li><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredient[igKey]}</li>
        })

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
               {ingredientSummary}
            </ul>
        </Auxiliary>
    );
}

export default OrderSummary
