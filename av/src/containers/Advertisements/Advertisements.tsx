import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '../../components/UI/Spinner/CircularProgress'

import AppMenu from '../../components/Navigation/AppBar/AppMenu';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Advertisement from "../../components/SearchEngine/SearchSummary/Advertisement";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import IconButton from '@material-ui/core/IconButton';
import DialogForm from "../../components/UI/DialogForm/DialogForm";
import axios from "axios";

import * as actions from '../../store/actions/index'


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

interface IAdvertisementsProps {
    classes: any;
}

interface IAdvertisementsState {
    right: boolean;
    advertisements: {
        [key: string]: IAdvertisement
    };
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

class Advertisements extends React.Component<IAdvertisementsProps, IAdvertisementsState> {
    state = {
        right: false,
        advertisements: {}
    };

    componentDidMount () {
        Promise.all([
            this.loadAdvertisements()
        ]).then(([advertisements]) => {
            this.setState({
                advertisements,
                right: true
            })
        }).catch((e) => {
            console.log(e)
        })
    }

    loadAdvertisements = async () => {
       const response =  await axios.get('https://avto-56119.firebaseio.com/advertisements.json');

       return response.data
    };

    render() {
        const { classes } = this.props;
        const { advertisements } = this.state;

        if (!advertisements) {
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
                    <AppMenu>
                        <SideDrawer isAuth={true}/>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Обьявления
                        </Typography>
                        <Link aria-label="Menu" className={classes.appBarLink} to="/">
                            <IconButton
                                type='button'
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <SearchIcon />
                            </IconButton>
                        </Link>
                        <DialogForm />
                    </AppMenu>

                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12} sm={12}>
                            <Advertisement
                                advertisements={advertisements}
                            />
                        </Grid>
                    </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Advertisements));
