import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from '../ContactData/ContactData.module.css';
import axios from '../../../axios-orders';
import Loader from '../../../components/UI/Loader/Loader';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true })

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Pranav',
                address: {
                    street: 'Daman',
                    zipCode: '396210',
                    country: 'India'
                },
                email: 'pfbf@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({ loading: false });
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Loader />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
