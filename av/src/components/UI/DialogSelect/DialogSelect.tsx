import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles: any = (theme: any) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    formControlLabel: {
        minWidth: 170,
    }
});

class DialogSelect extends React.Component<{classes: any}> {
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

        //TODO: for now before REDUX
        const emitNameOfCarsListFromServerAndFromProps = 'Марка автомобиля';
        const emitCarsListFromServerAndFromProps = [
            {name: 'acura', value: 'acura', label: 'Acura'},
            {name: 'alfa-romeo', value: 'alfa-romeo', label: 'Alfa Romeo'},
            {name: 'aro', value: 'aro', label: 'ARO'},
            {name: 'asia', value: 'asia', label: 'Asia'},
            {name: 'aston-martin', value: 'aston-martin', label: 'Aston Martin'},
            {name: 'audi', value: 'audi', label: 'Audi'},
            {name: 'bentley', value: 'bentley', label: 'Bentley'},
            {name: 'bmw', value: 'bmw', label: 'BMW'},
            {name: 'brilliance', value: 'brilliance', label: 'Brilliance'},
            {name: 'buick', value: 'buick', label: 'Buick'},
            {name: 'cadillac', value: 'cadillac', label: 'Cadillac'},
            {name: 'changan', value: 'changan', label: 'Changan'}
        ];

        return (
            <div>
                <Input
                    id="age-native-simple"
                    value={this.state.value}
                    onClick={this.handleClickOpen}
                />
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle>{emitNameOfCarsListFromServerAndFromProps}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>
                            <FormControl className={classes.formControl}>
                                <RadioGroup
                                    aria-label="position"
                                    name="position"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    row
                                >
                                    {emitCarsListFromServerAndFromProps.map(elem => (
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
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(DialogSelect);
