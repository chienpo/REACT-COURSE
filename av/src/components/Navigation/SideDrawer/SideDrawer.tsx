import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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

import { Link } from 'react-router-dom';

import ProfileAvatar from '../../ProfileAvatar/ProfileAvatar'

const styles = {
    list: {
        width: 280,
    },
    fullList: {
        width: 'auto',
    },
};

class SideDrawer extends React.Component<{classes: any, isAuth: any}> {
    state = {
        left: false
    };

    toggleDrawer = (side: string, open: boolean) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes, isAuth } = this.props;

        const sideList = (
            <div className={classes.list}>
                {!isAuth
                    ? <Link to="/auth"><ProfileAvatar />Войти</Link>
                    : <Link to="/logout"><ProfileAvatar />Выйти</Link>
                }

                {isAuth && (
                    <>
                        <Divider />
                        <List>
                            <ListItem button>
                                <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
                                <ListItemText>Кабинет пользователя</ListItemText>
                            </ListItem>
                        </List>
                    </>
                )}

                <Divider />

                <List>
                    <Link to="/">
                        <ListItem button>
                            <ListItemIcon><DirectionsCarIcon /></ListItemIcon>
                            <ListItemText>Поиск автомобилей</ListItemText>
                        </ListItem>
                    </Link>
                    {isAuth && (
                        <ListItem button>
                            <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
                            <ListItemText>Добавить обьявление</ListItemText>
                        </ListItem>
                    )}
                </List>
                <Divider />
                {isAuth && (
                    <>
                        <List>
                            {['Мои обьявления', 'Закладки', 'Сообщения'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <MessageIcon /> : <TurnedInNotIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
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

export default withStyles(styles)(SideDrawer);
