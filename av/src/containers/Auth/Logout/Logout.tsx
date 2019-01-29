import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import * as actions from '../../../store/actions/index'

class Logout extends React.Component<{onLogout: any}> {
    componentDidMount() {
        this.props.onLogout();
    }

    render () {
        return <Redirect to="/"/>;
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);
