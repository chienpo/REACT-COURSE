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

interface IAdvertisementProps {
    classes: any;
}

interface IAdvertisementState {
    right: boolean;
}

class FullAdvertisement extends React.Component<IAdvertisementProps, IAdvertisementState> {
    state = {
        right: false,
    };

    componentDidMount(): void {
        this.setState({right: true});
    }

    render() {
        const { classes } = this.props;

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
                            <h2>FullAdvertisement</h2>
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
