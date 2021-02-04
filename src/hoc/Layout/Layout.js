import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from '../Layout/Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

     sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    drawerHandler = () => {
        this.setState((prevState) => {
            {
                return { showSideDrawer: !prevState.showSideDrawer }
            }
        });
    }

    render(props) {
        return (
            <Auxiliary>
                <Toolbar drawerHandlerClicked={this.drawerHandler}/>
                <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}


export default Layout
