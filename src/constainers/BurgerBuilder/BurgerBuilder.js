import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 2,
            salad: 2,
            cheese: 2,
            bacon: 2
        }
    }
    render() {
        return (
            <Auxiliary>
                <Burger ingredients = {this.state.ingredients} />
                <div>Build Controls</div>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder
