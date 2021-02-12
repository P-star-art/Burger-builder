import React, { Component } from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from '../CheckoutSummary/CheckoutSummary.module.css';

class CheckoutSummary extends Component {
    render(props) {
        return (
            <div className={classes.CheckoutSummary}>
                <h1>We hope it tastes well !!!</h1>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Burger ingredients={this.props.ingredients} />
                </div>
                <Button clicked={this.props.checkoutCancelled} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.checkoutContinued} btnType='Success'>CONTINUE</Button>
            </div>
        )
    }
}

export default CheckoutSummary
