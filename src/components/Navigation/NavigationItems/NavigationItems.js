import React from 'react'
import classes from '../NavigationItems/NavigationItems.module.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <div>
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/" exact>Burger Builder</NavigationItem>
                <NavigationItem link="/orders">Orders</NavigationItem>
            </ul>
        </div>
    )
}

export default NavigationItems
