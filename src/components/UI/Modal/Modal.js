import classes from '../Modal/Modal.module.css'
import React, {Component} from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
   }

    render(props) {
        return (<Auxiliary>
            <div
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                className={classes.Modal}>
                {this.props.children}
            </div>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        </Auxiliary>);
    }
}

export default Modal
