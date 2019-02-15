import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import profileLogo from '../../assets/images/avloading.jpg'

const styles = {
    bigAvatar: {
        height: '100vh',
        width: 'auto',
        borderRadius: 0,
        margin: '0 auto'
    }
};

const LoadAppLogo: (classes: any) => JSX.Element =  (props) =>  {
    const { classes } = props;

    return (
        <Avatar alt="Remy Sharp" src={profileLogo} className={classes.bigAvatar} />
    );
};

export default withStyles(styles)(LoadAppLogo);
