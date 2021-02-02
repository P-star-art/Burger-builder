import classes from '../Modal/Modal.module.css'
import React from 'react'

const Modal = (props) => {
    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    )
}

export default Modal
