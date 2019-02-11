import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppMenu from '../../components/Navigation/AppBar/AppMenu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

import FullCarAdvertisement from '../../components/FullCarAdvertisement/FullCarAdvertisement'

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

interface IFullAdvertisementProps {
    classes: any;
    match: any;
}

interface IFullAdvertisementState {
    right: boolean;
    loadedFullAdvertisement: any;
}

class FullAdvertisement extends React.Component<IFullAdvertisementProps, IFullAdvertisementState> {
    state = {
        right: false,
        loadedFullAdvertisement: []
    };

    componentDidMount(): void {
        this.loadData();
        this.setState({right: true});
    }

    loadData() {
        if ( this.props.match.params.id ) {
            // if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( 'https://avto-56119.firebaseio.com/advertisements.json' )
                    .then( res => {
                        const fetchedAdvertisements: any = [];

                        for (let key in res.data) {
                            fetchedAdvertisements.push({
                                ...res.data[key],
                                id: key
                            });
                        }

                        const currentPost = fetchedAdvertisements.filter((x: any) => x.id === this.props.match.params.id);

                        this.setState( { loadedFullAdvertisement: currentPost } );
                    } );
            // }
        }
    }

    render() {
        const { classes } = this.props;
        const { loadedFullAdvertisement } = this.state;

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
                        <Link aria-label="Menu" className={classes.appBarLink} to="/advertisements">
                            <IconButton
                                type='button'
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <ArrowBackIcon />
                            </IconButton>
                        </Link>
                        <div className={classes.grow} />
                        <Link aria-label="Menu" className={classes.appBarLink} to="/">
                            <IconButton
                                type='button'
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <TurnedInNotIcon />
                            </IconButton>
                        </Link>
                    </AppMenu>

                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12} sm={12}>
                            <FullCarAdvertisement
                                fullAdvert={loadedFullAdvertisement}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FullAdvertisement));
