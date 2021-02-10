import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import axios from 'axios';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        constructor() {
         super()
            axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req;
            })

            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            })
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render(props) {
            return (
                <Auxiliary>
                    <Modal modalClosed={this.errorConfirmedHandler} show={this.state.error} >{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            )
        }
    }
}

export default withErrorHandler;