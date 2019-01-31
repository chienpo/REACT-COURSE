import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function FilterAppBar(props: any) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    { props.children }
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Поиск автомобилей
                    </Typography>
                    <Button color="inherit">Сброс</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(FilterAppBar);