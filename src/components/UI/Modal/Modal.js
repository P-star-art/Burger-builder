import classes from '../Modal/Modal.module.css'
import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
    return (
        <Auxiliary>
            <div
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                className={classes.Modal}>
                {props.children}
            </div>
            <Backdrop show={props.show} clicked={props.modalClosed} />
        </Auxiliary>
    )
}

export default Modal
