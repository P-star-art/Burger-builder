import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <button>Hamburger</button>
            <Logo />
            <nav className={classes.DesktopOnly}> 
                <NavigationItems />
            </nav>
       </header>
    )
}

export default Toolbar;