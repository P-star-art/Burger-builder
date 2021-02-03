import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo />
            <NavigationItems />
       </header>
    )
}

export default Toolbar;