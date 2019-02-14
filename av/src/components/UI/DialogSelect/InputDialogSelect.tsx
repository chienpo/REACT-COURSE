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

import { Form, Field } from 'react-final-form'

const styles: any = (theme: Theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: '0',
        width: '100%',
        padding: '0',
    },
    formControlLabel: {
        minWidth: 240,
        margin: '0',
    },
    formRadioGroup: {
        flexDirection: 'column'
    },
    textField: {
        marginLeft: 0,
        marginRight: 0,
    },
    form: {
        width: '100%',
        padding: '0'
    },
    label: {
        padding: '0'
    }
});


interface IList {
    [index: number]: { value: string; label: string };
    map(elem: any): any
}

interface IDialogSelectProps {
    title: any;
    options: IList;
    classes: any;
    submitHandler: any;
    name: string;
}

interface IDialogSelectState {
    open: boolean;
    value: string;
}

class DialogSelect extends React.Component<IDialogSelectProps, IDialogSelectState> {
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

    handleClose = (change: any) => {
        change(this.state.value);
        this.setState({ open: false });
    };

    handleCloseWithCancel = (change: any) => {
        this.setState({ open: false, value: '' });
        change('');
    };

    render() {
        const { classes, submitHandler } = this.props;

        return (
            <Form
                onSubmit={submitHandler}
                render={({ handleSubmit }) => (
                    <form
                        className={classes.form}
                        onSubmit={handleSubmit}
                        autoComplete='off'
                    >
                        <Field name={this.props.name} className={classes.field}>
                            {({ input, meta, ...customProps }) => {
                                const { onChange } = input;

                                return (
                                    <FormControl className={classes.formControl}>
                                        <InputLabel shrink required className={classes.label}>
                                            {this.props.title}
                                        </InputLabel>
                                        <TextField
                                            {...input}
                                            {...customProps}
                                            margin="normal"
                                            variant="filled"
                                            className={classes.textField}
                                            value={this.state.value}
                                            onClick={this.handleClickOpen}
                                            InputProps={{
                                                endAdornment: <ArrowDropDown>Kg</ArrowDropDown>,
                                            }}
                                        />
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                        <Dialog
                                            disableBackdropClick
                                            disableEscapeKeyDown
                                            open={this.state.open}
                                            onClose={this.handleClose}
                                        >
                                            {!this.props.options && this.state.open
                                                ? (
                                                    <CircularProgress />
                                                ) : (
                                                    <>
                                                        <DialogTitle>{this.props.title}</DialogTitle>
                                                        <DialogContent>
                                                            <div className={classes.container}>
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
                                                            </div>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={() => {
                                                                this.handleCloseWithCancel(onChange);
                                                                setTimeout(()=> handleSubmit());
                                                            }} color="primary">
                                                                Cancel
                                                            </Button>
                                                            <Button type='submit'
                                                                    onClick={
                                                                        () => {
                                                                            this.handleClose(onChange);
                                                                            setTimeout(()=> handleSubmit());
                                                                        }
                                                                    }
                                                                    color="primary">
                                                                Ok
                                                            </Button>
                                                        </DialogActions>
                                                    </>
                                                )}
                                        </Dialog>
                                    </FormControl>
                                )
                            }}
                        </Field>
                    </form>
                )}
            />
        );
    }
}

export default withStyles(styles)(DialogSelect);
