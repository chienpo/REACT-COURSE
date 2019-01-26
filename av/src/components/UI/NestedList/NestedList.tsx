import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';

const styles: any = (theme: any) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

interface IComponentState { open :  boolean }

class NestedList extends React.Component<{classes: any}, IComponentState> {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        const { classes } = this.props;

        return (
            <List
                component="nav"
                className={classes.root}
            >
                <ListItem button>
                    <ListItemText primary="Марка" />
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText primary="Модель" />
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText primary="Год выпуска" />
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText primary="Цена" />
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText primary="Коробка передач" />
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText primary="Тип кузова" />
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText primary="Двигатель" />
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText primary="Обьем двигателя, см3" />
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText primary="Привод" />
                </ListItem>
                <Divider />

                <ListItem button onClick={this.handleClick}>
                    <ListItemText primary="Состояние" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {this.state.open && <Divider />}
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component={'div' as 'ul'} disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />

                <ListItem button onClick={this.handleClick}>
                    <ListItemText primary="Местонахождение" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {this.state.open && <Divider />}
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component={'div' as 'ul'} disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />

                <ListItem button onClick={this.handleClick}>
                    <ListItemText primary="Дополнительно" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {this.state.open && <Divider />}
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component={'div' as 'ul'} disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />

                <ListItem button onClick={this.handleClick}>
                    <ListItemText primary="Опции" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {this.state.open && <Divider />}
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component={'div' as 'ul'} disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />
            </List>
        );
    }
}

export default withStyles(styles)(NestedList);
