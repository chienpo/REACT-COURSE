import React from 'react';
import { connect } from "react-redux";

import FilterAppBar from '../../components/Navigation/AppBar/FilterAppBar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

interface ILayoutState {
    showSideDrawer: boolean;
}

interface IProps {
    children: any;
    isAuthenticated: any;
    isAuth: boolean;
}

class Layout extends React.Component<IProps, ILayoutState> {

    render () {
        return (
            <>
                {/*TODO: path sidedrawer inside navigation*/}
                <FilterAppBar />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                />
                <main>
                    {this.props.children}
                </main>
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);
