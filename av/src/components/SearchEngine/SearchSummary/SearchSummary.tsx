import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import carPreview from '../../../assets/images/avatar.jpg'

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class SearchSummary extends React.Component<{classes: any}> {

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={16}>

                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={carPreview} />
                            </ButtonBase>
                        </Grid>


                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Standard licenseыыыы
                                    </Typography>
                                    <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                                    <Typography color="textSecondary">ID: 1030114</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                            </Grid>
                        </Grid>


                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(SearchSummary);
