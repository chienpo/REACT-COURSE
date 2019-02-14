import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppMenu from '../../components/Navigation/AppBar/AppMenu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import CircularProgress from '../../components/UI/Spinner/CircularProgress'
import ShareIcon from '@material-ui/icons/Share';

import FullCarAdvertisement from '../../components/FullCarAdvertisement/FullCarAdvertisement'

const styles: any = (theme: any) => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
        left: '0',
        marginTop: '60px',
        width: '100%'
    },
    grow: {
        flexGrow: 1,
        width: '100%'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        marginTop: '20px',
        width: '100%'
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
    advertisements: any;
    loading: any;
}

interface IFullAdvertisementState {
    right: boolean;
}

class FullAdvertisement extends React.Component<IFullAdvertisementProps, IFullAdvertisementState> {
    state = {
        right: false,
        loadedFullAdvertisement: []
    };

    componentDidMount(): void {
        this.setState({right: true});
    }

    render() {
        const { classes, advertisements } = this.props;

        const filteredAdvertisement = this.props.advertisements && this.props.advertisements.filter((pilot: any, index: any, arr: any) => {
            return `${index}` === this.props.match.params.id
        });


        if (!filteredAdvertisement) {
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
                        <Link aria-label="Menu" className={classes.appBarLink} to="/">
                            <IconButton
                                type='button'
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <ShareIcon />
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
                        <FullCarAdvertisement
                            fullAdvert={filteredAdvertisement}
                        />
                    </Grid>
                </div>
            </Drawer>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        advertisements: state.advertisements.advertisements
    }
};

export default connect(mapStateToProps, null)(withStyles(styles)(FullAdvertisement));





// if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
//     axios.get( 'https://avto-56119.firebaseio.com/advertisements.json' )
//         .then( res => {
//             const fetchedAdvertisements: any = [];
//
//             for (let key in res.data) {
//                 fetchedAdvertisements.push({
//                     ...res.data[key],
//                     id: key
//                 });
//             }
//
//             const currentPost = this.props.advertisements.splice((x: any) => x.id === this.props.match.params.id);
//
//     console.log(currentPost)
//             this.setState( { loadedFullAdvertisement: currentPost } );
//         } );
// }
