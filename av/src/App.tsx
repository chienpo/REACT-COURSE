import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchEngine from './containers/SearchEngine/SearchEngine'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout';
import NewAdvertisement from "./containers/NewAdvertisement/NewAdvertisement";
import Advertisements from "./containers/Advertisements/Advertisements";
import * as actions from './store/actions/index';
import LoadAppLogo from './components/Logos/LoadAppLogo'

interface IAppProps {
    children: any;
    onTryAutoSignup: any;
    isAuthenticated: boolean;
}

interface IAppState {
  appIsLoading: boolean;
}

class App extends Component<IAppProps, IAppState> {
    state = {
        appIsLoading: true
    };

    componentDidMount() {
        this.props.onTryAutoSignup();
        this.removeLoadingLogo()
    }

    removeLoadingLogo = () => {

        setTimeout(() => {
            this.setState({appIsLoading: false});
            }, 2000);
    };
  
    render() {
        const { isAuthenticated } = this.props;
        const { appIsLoading } = this.state;

        let routes = (
            <Switch>
                <Route path="/" exact component={SearchEngine} />
                <Route path="/auth" component={Auth} />
                <Route path="/logout" component={Logout} />
                <Route path="/advertisements" component={Advertisements} />
            </Switch>
        );

        if (isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/" exact component={SearchEngine} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/new-advertisement" component={NewAdvertisement} />
                    <Route path="/advertisements" component={Advertisements} />
                </Switch>
            );
        }

        if (appIsLoading) {
            return (
                <LoadAppLogo />
            )
        }

        return (
            <div>
                {routes}
            </div>
        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
    }
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) as any );
