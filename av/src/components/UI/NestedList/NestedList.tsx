import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import {
    carModelMazdaList,
    carYearList
} from "../DialogSelect/select-lists";
import InputDialogSelect from "../DialogSelect/InputDialogSelect";
import {ListItemText} from "@material-ui/core";
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';

const styles: any = (theme: any) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        marginTop: '90px',
    },
    nested: {
        paddingLeft: 16,
    },
    expandedRow: {
        padding: '3px 0'
    }
});

interface IComponentState { open :  boolean }
interface IComponentProps { classes: any, submitHandler: any }

class NestedList extends React.Component<IComponentProps, IComponentState> {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        const { classes } = this.props;

        return (
            <>
                <List
                    className={classes.root}
                >
                    <ListItem button>
                        <InputDialogSelect
                            submitHandler={this.props.submitHandler}
                            title='Модель'
                            options={carModelMazdaList}
                            name='model'
                        />
                        <Divider light />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={this.handleClick}>
                        <ListItemText primary="Год" className={classes.expandedRow} />
                        {this.state.open ? <ArrowDown /> : <ArrowRight />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <Divider />
                        <List disablePadding>
                            <ListItem className={classes.nested}>
                                <InputDialogSelect
                                    submitHandler={this.props.submitHandler}
                                    title='Год'
                                    options={carYearList}
                                    name='year'
                                />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider />
                </List>
            </>
        );
    }
}

export default withStyles(styles)(NestedList);
