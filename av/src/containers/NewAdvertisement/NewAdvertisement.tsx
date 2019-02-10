import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';

import CircularProgress from '../../components/UI/Spinner/CircularProgress'
import DialogSelect from "../../components/UI/DialogSelect/DialogSelect";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {
    carBrandList,
    carModelMazdaList,
    bodyTypeList,
    engineTypeList,
    engineVolumeList,
    carYearList,
    yourCityList
} from "../../components/UI/DialogSelect/select-lists";
import TextField from "@material-ui/core/TextField/TextField";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import FormControl from "@material-ui/core/FormControl/FormControl";

import AppMenu from '../../components/Navigation/AppBar/AppMenu';
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Typography from '@material-ui/core/Typography';

//FINAL-FORM
import { Form, Field } from 'react-final-form'


const styles: any = (theme: any) => ({
    formControl: {
        margin: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grow: {
        flexGrow: 1,
    }
});

interface INewAdvertisementState {
    file: any;
}

interface INewAdvertisementProps {
    classes: any,
    loading: boolean;
}

class NewAdvertisement extends React.Component<INewAdvertisementProps, INewAdvertisementState> {
    state = {
        file: null
    };

    inputRef = React.createRef();

    submitHandler = async (values: any) => {
        const advertisement = {
            brand: values.brand,
            model: values.model,
            year: values.year,
            body: values.body,
            price: values.price,
            message: values.message,
            engine: values.engine,
            volume: values.volume,
            dash: values.dash,
            transmission: values.transmission,
            city: values.city,
            image: this.state.file
        };


        try {
            await axios.post('https://avto-56119.firebaseio.com/advertisements.json', advertisement);

        } catch (error) {
            console.log(error)
        }
    };

    getBase64(file: any) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState({ file: reader.result });
        };
    }

    render() {
        const { classes } = this.props;

        if (this.props.loading) {
            return <CircularProgress />
        }

        return(
            <div className={classes.root}>
                <AppMenu>
                    <SideDrawer isAuth={true}/>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Новое обьявление
                    </Typography>
                </AppMenu>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >

                    <h1>Новое обьявеие</h1>

                    <Form
                        onSubmit={this.submitHandler}
                        render={({ handleSubmit, form, submitting, pristine, invalid }) => (
                            <form
                                onSubmit={handleSubmit}
                                autoComplete='off'
                            >
                                <DialogSelect
                                    title='Марка автомобиля'
                                    options={carBrandList}
                                    name='brand'
                                />
                                <Divider light />

                                <DialogSelect
                                    title='Модель'
                                    options={carModelMazdaList}
                                    name='model'
                                />
                                <Divider light />

                                <DialogSelect
                                    title='Год выпуска'
                                    options={carYearList}
                                    name='year'
                                />
                                <Divider light />

                                <DialogSelect
                                    title='Тип кузова'
                                    options={bodyTypeList}
                                    name='body'
                                />
                                <Divider light />

                                <Field name="price" >
                                    {({ input, meta }) => (
                                        <FormControl className={classes.formControl}>
                                            <InputLabel shrink required>
                                                Цена
                                            </InputLabel>
                                            <TextField
                                                className={classes.textField}
                                                margin="normal"
                                                variant="filled"
                                                {...input}
                                            />
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                        </FormControl>
                                    )}
                                </Field>
                                <Divider light />

                                <Field name="message" >
                                    {({ input, meta }) => (
                                        <FormControl className={classes.formControl}>
                                            <InputLabel shrink required>
                                                Текст обьявления
                                            </InputLabel>
                                            <TextField
                                                multiline
                                                rows="4"
                                                className={classes.textField}
                                                margin="normal"
                                                variant="filled"
                                                {...input}
                                            />
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                        </FormControl>
                                    )}
                                </Field>
                                <Divider light />

                                <DialogSelect
                                    title='Двигатель'
                                    options={engineTypeList}
                                    name='engine'
                                />
                                <Divider light />

                                <DialogSelect
                                    title='Обьем двигателя'
                                    options={engineVolumeList}
                                    name='volume'
                                />
                                <Divider light />

                                <Field name="dash" >
                                    {({ input, meta }) => (
                                        <FormControl className={classes.formControl}>
                                            <InputLabel shrink required>
                                                Пробег КМ
                                            </InputLabel>
                                            <TextField
                                                className={classes.textField}
                                                margin="normal"
                                                variant="filled"
                                                {...input}
                                            />
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                        </FormControl>
                                    )}
                                </Field>
                                <Divider light />

                                <Field name="transmission" type="radio">
                                    {({ input, meta }) => (
                                        <FormControl className={classes.formControl}>
                                            <InputLabel shrink required>
                                                Коробка передач
                                            </InputLabel>
                                            <RadioGroup
                                                className={classes.formRadioGroup}
                                                aria-label="position"
                                                row
                                                {...input}
                                            >
                                                <FormControlLabel
                                                    value="automatic"
                                                    control={<Radio color="primary" />}
                                                    label="Автомат"
                                                    labelPlacement="end"
                                                />
                                                <FormControlLabel
                                                    value="manual"
                                                    control={<Radio color="primary" />}
                                                    label="Механика"
                                                    labelPlacement="end"
                                                />
                                            </RadioGroup>
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                        </FormControl>
                                    )}
                                </Field>
                                <Divider light />

                                <DialogSelect
                                    title='Город'
                                    options={yourCityList}
                                    name='city'
                                />
                                <Divider light />

                                <Field name="image" type="file" ref={this.inputRef}>
                                    {({ input, meta }) => (
                                        <Button variant="contained" component="label" color="default" className={classes.button}>
                                            Фото из галереи
                                            <input
                                                {...input}
                                                type="file"
                                                onChange={
                                                    e => {
                                                        const { onChange } = input;

                                                        input.onChange(e);
                                                        if (onChange) {
                                                            onChange(e)
                                                        }
                                                        const [file] = e.target.files;

                                                        this.getBase64(file)
                                                    }
                                                }
                                            />
                                            <CloudUploadIcon className={classes.rightIcon} />
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                        </Button>
                                    )}
                                </Field>
                                <Divider light />

                                <Button
                                    disabled={pristine || invalid}
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type='submit'
                                >
                                    Опубликовать
                                </Button>
                            </form>
                        )}
                    />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {

    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewAdvertisement));
