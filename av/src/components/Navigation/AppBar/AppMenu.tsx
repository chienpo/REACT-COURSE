import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    }
};

function AppMenu(props: any) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    { props.children }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(AppMenu);
