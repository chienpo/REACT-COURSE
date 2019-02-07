import React, {ChangeEvent} from 'react';
import Button from '@material-ui/core/Button';
import { Theme, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import TextField from "@material-ui/core/TextField/TextField";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

const styles: any = (theme: Theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit
    },
    formControlLabel: {
        minWidth: 240
    },
    formRadioGroup: {
        flexDirection: 'column'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});


interface IList {
    [index: number]: { name: string; value: string; label: string };
    map(elem: any): any
}

interface IAuthProps {
    title: string;
    options: IList;
    classes: any;
    name: string;
}

interface IDialogSelectState {
    open: boolean;
    value: string;
}

class DialogSelect extends React.Component<IAuthProps, IDialogSelectState> {
    state = {
        open: false,
        value: '',
    };

    handleChange = (event: React.ChangeEvent<{}>) => {
        const element = event.currentTarget as HTMLInputElement;
        this.setState({ value: element.value });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel shrink required>
                    {this.props.title}
                </InputLabel>
                <TextField
                    margin="normal"
                    variant="filled"
                    className={classes.textField}
                    name={this.props.name}
                    value={this.state.value}
                    onClick={this.handleClickOpen}
                    InputProps={{
                        endAdornment: <ArrowDropDown>Kg</ArrowDropDown>,
                    }}
                />
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    {!this.props.options
                        ? (
                            <CircularProgress />
                        ) : (
                            <>
                                <DialogTitle>{this.props.title}</DialogTitle>
                                <DialogContent>
                                    <form className={classes.container}>
                                        <FormControl className={classes.formControl}>
                                            <RadioGroup
                                                className={classes.formRadioGroup}
                                                aria-label="position"
                                                name="position"
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                                row
                                            >
                                                {this.props.options.map((elem: any) => (
                                                    <FormControlLabel
                                                        className={classes.formControlLabel}
                                                        key={elem.value}
                                                        value={elem.value}
                                                        control={<Radio color="primary" />}
                                                        label={elem.label}
                                                        labelPlacement="end"
                                                    />
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleClose} color="primary">
                                        Ok
                                    </Button>
                                </DialogActions>
                            </>
                        )}
                </Dialog>
            </FormControl>
        );
    }
}

export default withStyles(styles)(DialogSelect);
