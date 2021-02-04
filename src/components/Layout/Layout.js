import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from '../Layout/Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    <Auxiliary>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
)


export default Layout
