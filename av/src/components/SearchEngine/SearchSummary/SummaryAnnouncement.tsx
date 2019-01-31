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

class SummaryAnnouncement extends React.Component<{classes: any}> {

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
                            <Grid item xs={2}>
                                <Typography variant="subtitle1">2011</Typography>
                                <Typography style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '20px'  }}>42 862 р.</Typography>
                                <Typography color="textSecondary">19 850</Typography>
                                <Typography color="textSecondary">Могилев</Typography>
                            </Grid>
                            <Grid item xs={10} container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography
                                        gutterBottom variant="subtitle1"
                                        style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1a60ba', fontSize: '20px' }}
                                    >
                                        Infiniti FX II 37
                                    </Typography>
                                    <Typography
                                        gutterBottom variant="subtitle1"
                                    >
                                        автомат, 3.7 л., бензин, внедорожник 5 дв., 153457 км
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Отличное состояние. По тех. части без вопросов. Кузов ровный без жуков. Зимняя резина.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography  style={{ cursor: 'pointer', textAlign: 'right' }}>29 ноя</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(SummaryAnnouncement);
