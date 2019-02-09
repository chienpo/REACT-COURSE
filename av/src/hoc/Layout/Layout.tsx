import React from 'react';
import { connect } from "react-redux";

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
                {/*Somehow trow auth in props*/}
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
