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
    button: {
        width: '94%',
        padding: '0',
        background: '#3dca86',
        margin: '20px 0',
        fontWeight: 'bold',
        lineHeight: '1',
        height: 55,
        display: 'flex',
        alignItems: 'center',
        fontSize: 18,
        textTransform: 'inherit',
        paddingTop: 5,
        color: 'white'
    },
});

interface ISearchEngineState {
    right: boolean;
    total: string;
}

interface ISearchEngineProps {
    advertisements: [IAdvertisement];
    classes: any, onAuth: any, loading: boolean, error: any
    onAddedAdverts: any;
    filterAdvertisementsByCarModel: any;
    filterAdvertisementsByCarYear: any;
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

        values.model && this.props.filterAdvertisementsByCarModel(values.model);
        values.year && this.props.filterAdvertisementsByCarYear(values.year);
    };

    componentDidMount(): void {
        this.props.onAddedAdverts();
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
                            disabled={advertisements && advertisements.length < 1}
                            onClick={this.onClickSearchResult}
                            variant="contained"
                            className={classes.button}
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
        advertisements: state.advertisements.advertisements.filter(
            (currentAdvert: any)=>currentAdvert.model.includes(state.filterCarsByModel.model) && currentAdvert.year.includes(state.filterCarsByYear.year),
        ),
        loading: state.advertisements.loading,
        error: state.advertisements.error
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddedAdverts: () => dispatch(actions.getAdvertisements()),
        filterAdvertisementsByCarModel: (name: string) => {
            dispatch({ type: 'FILTER_ADVERTISEMENTS_BY_MODEL', payload: name })
        },
        filterAdvertisementsByCarYear: (name: string) => {
            dispatch({ type: 'FILTER_ADVERTISEMENTS_BY_YEAR', payload: name })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchEngine));
