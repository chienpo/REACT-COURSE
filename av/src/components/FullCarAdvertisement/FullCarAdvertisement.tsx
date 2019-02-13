import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

interface Interface {
    fullAdvert: any;
    classes: any;
}

const styles = (theme: any) => ({
    par: {
        paddingLeft: 10,
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    nested: {
        paddingLeft: 10,
    },
    button: {
        margin: theme.spacing.unit,
    },
    buttonFullWidth: {
        margin: theme.spacing.unit,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10
    }
});

const FullCarAdvertisement = (props: Interface) => {
    const { classes } = props;

    const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    return (
        <div>
            {props.fullAdvert.map((advert: any, index: any) => (
                <div key={index}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={advert.image}
                            title={advert.brand}
                        />
                        <CardHeader
                            title={`${advert.brand} ${advert.model}`}
                            subheader={currentDate}
                        />
                        <CardContent>
                            <Button variant="contained" color="secondary" className={classes.button}>
                                {advert.price} руб.
                            </Button>
                            {console.log(typeof(advert.price))}
                            <Button disabled className={classes.button}>
                                ~ {Math.floor(parseFloat(advert.price ) * 1000 / 2.18 )}
                            </Button>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="Share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                        <CardContent>

                            <List component={'div' as 'ul'} disablePadding>
                                <ListItem className={classes.nested}>
                                    <ListItemText>Год выпуска:</ListItemText>
                                    <ListItemText>{advert.year}</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem className={classes.nested}>
                                    <ListItemText>Пробег:</ListItemText>
                                    <ListItemText>{advert.dash}</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem className={classes.nested}>
                                    <ListItemText>
                                        Двигатель:
                                    </ListItemText>
                                    <ListItemText>
                                        {advert.engine}
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem className={classes.nested}>
                                    <ListItemText>
                                        Объем двигателя:
                                    </ListItemText>
                                    <ListItemText>
                                        {advert.volume} см3
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem className={classes.nested}>
                                    <ListItemText>
                                        Тип кузова:
                                    </ListItemText>
                                    <ListItemText>
                                        {advert.body}
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem className={classes.nested}>
                                    <ListItemText>
                                        Коробка передач:
                                    </ListItemText>
                                    <ListItemText>
                                        {advert.transmission}
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                            </List>

                            <Button variant="outlined" color="secondary" className={classes.buttonFullWidth}>
                                ПРЕДЛОЖИТЬ ОБМЕН
                            </Button>
                            <Divider />

                            <Typography paragraph className={classes.par}>Комментарий продавца:</Typography>
                            <Typography paragraph className={classes.par}>
                                {advert.message}
                            </Typography>
                            <Divider />
                        </CardContent>
                        <CardContent>
                            <Typography paragraph className={classes.par}>{advert.city}</Typography>
                            <Button variant="contained" color="primary" className={classes.buttonFullWidth}>
                                <MessageIcon />
                                НАПИСАТЬ СООБЩЕНИЕ
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )
};

export default withStyles(styles)(FullCarAdvertisement)
