import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import profileLogo from '../../assets/images/logo-3.svg'

const styles = {
    bigAvatar: {
        margin: 0,
        width: 127,
        height: 42,
        borderRadius: 0
    }
};

const CompanyLogo: (classes: any) => JSX.Element =  (props) =>  {
    const { classes } = props;

    return (
        <Grid container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={profileLogo} className={classes.bigAvatar} />
        </Grid>
    );
};

export default withStyles(styles)(CompanyLogo);
