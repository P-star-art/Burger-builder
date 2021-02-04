import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggler clicked={props.drawerHandlerClicked}/>
            <Logo />
            <nav className={classes.DesktopOnly}> 
                <NavigationItems />
            </nav>
       </header>
    )
}

export default Toolbar;