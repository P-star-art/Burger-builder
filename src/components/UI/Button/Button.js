import React from 'react'
import classes from '../Button/Button.module.css';

const Button = (props) => {
    return (
        <button
            onClick={props.clicked}
            className={[classes.Button, classes[props.btnType]].join(' ')}>{props.children}
        </button>
    )
}

export default Button
