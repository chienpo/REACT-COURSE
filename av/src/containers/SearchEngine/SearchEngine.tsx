import React from 'react'
import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '../../components/UI/Spinner/CircularProgress'

import AppMenu from '../../components/Navigation/AppBar/AppMenu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NestedList from "../../components/UI/NestedList/NestedList";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import * as actions from "../../store/actions";
import Advertisements from "../Advertisements/Advertisements";

const styles: any = (theme: any) => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
        left: '0',
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        marginTop: '20px'
    },
    appBarLink: {
        color: 'white',
        marginRight: '10px'
    },
    drawerPaper: {
        width: '100%',
    },
    buttonFullWidth: {
        width: '94%',
        padding: '10px 15px',
        background: '#3dca86',
        fontWeight: 'bold',
        color: 'white'
    }
});

interface ISearchEngineState {
    right: boolean;
    total: string;
}

interface ISearchEngineProps {
    advertisements: [IAdvertisement];
    classes: any, onAuth: any, loading: boolean, error: any
    onAddedAdverts: any;
    filterAdvertisementsByName: any;
    history: any;
    filter: any;
    isEmpty: any;
}

interface IAdvertisement {
    body: string;
    brand: string;
    city: string;
    dash: string;
    engine: string;
    image: string;
    message: string;
    model: string;
    price: string;
    transmission: string;
    volume: string;
    year: string;
}

class SearchEngine extends React.Component<ISearchEngineProps, ISearchEngineState> {
    state = {
        right: false,
        total: ''
    };

    submitHandler = (values: any) => {
        this.props.onAddedAdverts();

        const params = Object.entries(values).reduce((result, [field, value]) => {
                 return value
            }, {});

        let val = params;
        if (Object.entries(params).length === 0) {
            val = ''
        }


        this.props.filterAdvertisementsByName(val);
    };

    componentDidMount(): void {
        this.setState({
            right: true,
        })
    }

    onClickSearchResult = () => {
        this.props.history.push( '/advertisements' );
    };

    render() {
        const { classes, advertisements, loading } = this.props;

        return(
            <Drawer
                anchor="right"
                open={this.state.right}
                elevation={1}
                classes={{
                    paper: classes.drawerPaper
                }}
            >

                <div className={classes.root}>
                    <AppMenu>
                        <SideDrawer />
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Поиск автомобилей
                        </Typography>
                        <Button
                            type='reset'
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            СБРОС
                        </Button>
                    </AppMenu>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <NestedList
                            submitHandler={this.submitHandler}
                        />

                        <Button
                            onClick={this.onClickSearchResult}
                            variant="contained"
                            className={classes.buttonFullWidth}
                        >
                            Показать {advertisements && advertisements.length} авто
                            {loading && (<CircularProgress />)}
                        </Button>

                        <Route path="/advertisements" exact component={Advertisements} />
                    </Grid>
                </div>
            </Drawer>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        advertisements: state.advertisements.advertisements.filter((currentAdvert: any)=>currentAdvert.model.includes(state.filterCars)),
        loading: state.advertisements.loading,
        error: state.advertisements.error
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddedAdverts: () => dispatch(actions.getAdvertisements()),
        filterAdvertisementsByName: (name: string) => {
            dispatch({ type: 'FILTER_ADVERTISEMENTS_BY_NAME', payload: name })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchEngine));
