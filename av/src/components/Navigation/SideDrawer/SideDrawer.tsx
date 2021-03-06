import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import AvatarIcon from '@material-ui/icons/PersonPin';


import ProfileAvatar from '../../Logos/ProfileAvatar'


const styles = {
    list: {
        width: 280,
    },
    fullList: {
        width: 'auto',
    },
    card: {
        background: '#1a60ba',
        color: 'white',
        borderRadius: '0',
        padding: '100px 0 5px'
    },
    authLink: {
        color: 'white',
        underline: 'none'
    },
    avatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%'
    },
    avatarContainer: {
        height: '33px',
        overflow: 'hidden',

    }
};

interface ISideDrawerState {
    left: boolean;
    [x: string]: boolean;
}

interface ISideDrawerProps {
    classes: any;
    isAuthenticated: boolean;
}

class SideDrawer extends React.Component<ISideDrawerProps, ISideDrawerState> {
    state = {
        left: false
    };

    toggleDrawer = (side: string, open: boolean) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes, isAuthenticated } = this.props;

        const sideList = (
            <div className={classes.list}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={isAuthenticated ? (
                                    <ProfileAvatar />
                                ) : (
                                    <div className={classes.avatarContainer}>
                                        <AvatarIcon className={classes.avatar} />
                                    </div>
                                )}
                        title={isAuthenticated
                            ? (
                                <Link className={classes.authLink} to="/logout">
                                    Выйти
                                </Link>
                            ) : (
                                <Link className={classes.authLink} to="/auth">
                                  Войти
                                </Link>
                            )
                        }
                    />
                </Card>
                <List>
                    <Link to="/">
                        <ListItem button>
                            <ListItemIcon><DirectionsCarIcon /></ListItemIcon>
                            <ListItemText>Поиск автомобилей</ListItemText>
                        </ListItem>
                    </Link>
                    {isAuthenticated && (
                        <ListItem button>
                            <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
                            <Link to="/new-advertisement">
                                <ListItemText>Добавить обьявление</ListItemText>
                            </Link>
                        </ListItem>
                    )}
                </List>
                <Divider />
                {isAuthenticated && (
                    <>
                        <List>
                            <Link to="/advertisements">
                                <ListItem button>
                                    <ListItemIcon><MessageIcon /></ListItemIcon>
                                    <ListItemText>Мои обьявления</ListItemText>
                                </ListItem>
                            </Link>
                            <ListItem button>
                                <ListItemIcon><TurnedInNotIcon /></ListItemIcon>
                                <ListItemText>Закладки</ListItemText>
                            </ListItem>
                        </List>
                        <Divider />
                    </>
                )}
                <List>
                    {['Сообщить о проблеме', 'Оценить приложение'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        const fullList = (
            <div className={classes.fullList}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Draftss'].map((text, index) => (
                        <ListItem button key={text}>
                            <FormatListNumberedIcon />
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    onClick={this.toggleDrawer('left', true)}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default connect(mapStateToProps, null)(withStyles(styles)(SideDrawer));
