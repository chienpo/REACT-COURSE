import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '../../components/UI/Spinner/CircularProgress'

import AppMenu from '../../components/Navigation/AppBar/AppMenu';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import DialogSelect from "../../components/UI/DialogSelect/DialogSelect";
import NestedList from "../../components/UI/NestedList/NestedList";
import {carBrandList} from "../../components/UI/DialogSelect/select-lists";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import SearchIcon from "../Advertisements/Advertisements";

const styles: any = (theme: any) => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
        left: '0'
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
    }
});

interface IAuthState {
    isSignIn: boolean;
    email: string;
    password: string;
    openSnackbar: boolean;
    right: boolean;
}

class SearchEngine extends React.Component<{classes: any, onAuth: any, loading: boolean, error: any}, IAuthState> {
    state = {
        isSignIn: true,
        email: '',
        password: '',
        openSnackbar: true,
        right: false
    };

    submitSearch = () => {
        alert('submit')
    };

    componentDidMount(): void {
        this.setState({right: true})
    }

    componentWillUnmount(): void {
        this.setState({right: false})
    }

    render() {
        const { classes } = this.props;
        const { isSignIn } = this.state;

        if (this.props.loading) {
            return <CircularProgress />
        }

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
                    <form
                        noValidate
                        autoComplete="off"
                        onSubmit={this.submitSearch}
                    >
                        <AppMenu>
                            <SideDrawer isAuth={true}/>
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
                            <DialogSelect
                                name='model'
                                title='asd'
                                options={carBrandList}
                            />
                            <NestedList />
                        </Grid>
                    </form>
                </div>
            </Drawer>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchEngine));
