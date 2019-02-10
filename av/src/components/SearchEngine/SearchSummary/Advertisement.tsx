import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ProfileAvatar from "../../Navigation/SideDrawer/SideDrawer";
import {Link} from "react-router-dom";

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: 1024,
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

interface IEntries {
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

class Advertisement extends React.Component<{classes: any, advertisements: any}> {

    render() {
        const { classes, advertisements } = this.props;

        return(
            <>
                {Object.entries<IEntries>(advertisements).map(([iterator, adv]) => (
                    <Link to="/advertisement">
                        <Paper key={iterator} className={classes.paper}>
                            <Grid container spacing={16}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img
                                            className={classes.img}
                                            alt="complex"
                                            src={`${adv.image}`}
                                        />
                                    </ButtonBase>
                                </Grid>

                                <Grid item xs={12} sm container>
                                    <Grid item xs={2}>
                                        <Typography variant="subtitle1">{adv.year}</Typography>
                                        <Typography style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '20px'  }}>{adv.price} р.</Typography>
                                        <Typography color="textSecondary">{adv.price}</Typography>
                                        <Typography color="textSecondary">{adv.city}</Typography>
                                    </Grid>
                                    <Grid item xs={10} container direction="column" spacing={16}>
                                        <Grid item xs>
                                            <Typography
                                                gutterBottom variant="subtitle1"
                                                style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1a60ba', fontSize: '20px' }}
                                            >
                                                {adv.brand} {adv.model}
                                            </Typography>
                                            <Typography
                                                gutterBottom variant="subtitle1"
                                            >
                                                {adv.transmission}, {adv.volume} л., {adv.engine}, {adv.body}, {adv.dash} км
                                            </Typography>
                                            <Typography color="textSecondary">
                                                {adv.message}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography  style={{ cursor: 'pointer', textAlign: 'right' }}>{adv.year}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Link>
                ))}
            </>
        )
    }
}

export default withStyles(styles)(Advertisement);
