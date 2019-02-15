import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import profileLogo from '../../assets/images/avatar.jpg'

const styles = {
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 40,
        height: 40,
    },
};

const ProfileAvatar: (classes: any) => JSX.Element =  (props) =>  {
    const { classes } = props;

    return (
        <Grid container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={profileLogo} className={classes.bigAvatar} />
        </Grid>
    );
};

export default withStyles(styles)(ProfileAvatar);
