import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

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
import Radio from "@material-ui/core/Radio/Radio";
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

interface INewAdvertisement {
    email: string;
}

interface IAuthProps {
    classes: any;
    input: any;
    meta: any;
    fieldProps: any;
    onSubmit: any,
    onAuth: any,
    loading: boolean,
    error: any,
}

class NewAdvertisement extends React.Component<{
    onSubmit: any,
    classes: any,
    onAuth: any,
    loading: boolean,
    error: any
}, INewAdvertisement> {
    state = {
        email: '',
    };

    // submitHandler = (event: React.FormEvent<{}>) => {
    //     event.preventDefault();
    //
    //     const elementTarget = event.currentTarget as HTMLFormElement;
    //
    //     const formData = new FormData(elementTarget);
    //     const brand = formData.get('brand') as string;
    //     const model = formData.get('model') as string;
    //     const year = formData.get('year') as string;
    //     const body = formData.get('body') as string;
    //     const price = formData.get('price') as string;
    //     const message = formData.get('message') as string;
    //     const engine = formData.get('engine') as string;
    //     const volume = formData.get('volume') as string;
    //     const dash = formData.get('dash') as string;
    //     const transmission = formData.get('transmission') as string;
    //     const city = formData.get('city') as string;
    //     const image = formData.get('image');
    //
    //     const orders = {
    //         brand,
    //         model,
    //         year,
    //         body,
    //         price,
    //         message,
    //         engine,
    //         volume,
    //         dash,
    //         transmission,
    //         city,
    //         image
    //     };
    //
    //     axios.post('https://avto-56119.firebaseio.com/advertisements.json', orders)
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error));
    // };

    submitHandler = (values: any) => {
        // axios.post('https://avto-56119.firebaseio.com/advertisements.json', values)
        //         .then(response => console.log(response))
        //         .catch(error => console.log(error));
        console.log(values)
    };

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
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <DialogSelect
                                    title='Марка автомобиля'
                                    options={carBrandList}
                                    name='brand'
                                />
                                <Button
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

                    {/*<Form onSubmit={this.submitHandler}>*/}
                        {/*{({ form, handleSubmit }) => (*/}
                            {/*<form onSubmit={handleSubmit}>*/}
                                {/*<DialogSelect*/}
                                    {/*title='Марка автомобиля'*/}
                                    {/*options={carBrandList}*/}
                                    {/*name='brand'*/}
                                {/*/>*/}
                                {/*<Button*/}
                                    {/*// disabled={pristine || invalid}*/}
                                    {/*variant="contained"*/}
                                    {/*color="primary"*/}
                                    {/*className={classes.button}*/}
                                    {/*type='submit'*/}
                                {/*>*/}
                                    {/*Опубликовать*/}
                                {/*</Button>*/}
                            {/*</form>*/}
                        {/*)}*/}
                    {/*</Form>*/}

                    {/*<form*/}
                        {/*noValidate*/}
                        {/*autoComplete="off"*/}
                        {/*onSubmit={this.submitHandler}*/}
                    {/*>*/}
                        {/*<DialogSelect*/}
                            {/*title='Марка автомобиля'*/}
                            {/*options={carBrandList}*/}
                            {/*name='brand'*/}
                        {/*/>*/}
                        {/*<Divider light />*/}

                        {/*<DialogSelect*/}
                            {/*title='Модель'*/}
                            {/*options={carModelMazdaList}*/}
                            {/*name='model'*/}
                        {/*/>*/}
                        {/*<Divider light />*/}

                        {/*<DialogSelect*/}
                            {/*title='Год выпуска'*/}
                            {/*options={carYearList}*/}
                            {/*name='year'*/}
                        {/*/>*/}
                        {/*<Divider light />*/}

                        {/*<DialogSelect*/}
                            {/*title='Тип кузова'*/}
                            {/*options={bodyTypeList}*/}
                            {/*name='body'*/}
                        {/*/>*/}
                        {/*<Divider light />*/}

                        {/*<FormControl className={classes.formControl}>*/}
                            {/*<InputLabel shrink required>*/}
                                {/*Цена*/}
                            {/*</InputLabel>*/}
                            {/*<TextField*/}
                                {/*className={classes.textField}*/}
                                {/*margin="normal"*/}
                                {/*variant="filled"*/}
                                {/*name='price'*/}
                            {/*/>*/}
                        {/*</FormControl>*/}
                        {/*<Divider light />*/}

                        {/*<FormControl className={classes.formControl}>*/}
                            {/*<InputLabel shrink required>*/}
                                {/*Текст обьявления*/}
                            {/*</InputLabel>*/}
                            {/*<TextField*/}
                                {/*multiline*/}
                                {/*rows="4"*/}
                                {/*className={classes.textField}*/}
                                {/*margin="normal"*/}
                                {/*variant="filled"*/}
                                {/*name='message'*/}
                            {/*/>*/}
                        {/*</FormControl>*/}
                        {/*<Divider light />*/}

                        {/*<DialogSelect*/}
                            {/*title='Двигатель'*/}
                            {/*options={engineTypeList}*/}
                            {/*name='engine'*/}
                        {/*/>*/}
                        {/*<Divider light />*/}

                        {/*<DialogSelect*/}
                            {/*title='Обьем двигателя'*/}
                            {/*options={engineVolumeList}*/}
                            {/*name='volume'*/}
                        {/*/>*/}
                        {/*<Divider light />*/}

                        {/*<FormControl className={classes.formControl}>*/}
                            {/*<InputLabel shrink required>*/}
                                {/*Пробег КМ*/}
                            {/*</InputLabel>*/}
                            {/*<TextField*/}
                                {/*className={classes.textField}*/}
                                {/*margin="normal"*/}
                                {/*variant="filled"*/}
                                {/*name='dash'*/}
                            {/*/>*/}
                        {/*</FormControl>*/}
                        {/*<Divider light />*/}

                        {/*<FormControl className={classes.formControl}>*/}
                            {/*<InputLabel shrink required>*/}
                                {/*Коробка передач*/}
                            {/*</InputLabel>*/}
                            {/*<RadioGroup*/}
                                {/*className={classes.formRadioGroup}*/}
                                {/*aria-label="position"*/}
                                {/*name="transmission"*/}
                                {/*row*/}
                            {/*>*/}
                                {/*<FormControlLabel*/}
                                    {/*value="automatic"*/}
                                    {/*control={<Radio color="primary" />}*/}
                                    {/*label="Автомат"*/}
                                    {/*labelPlacement="end"*/}
                                {/*/>*/}
                                {/*<FormControlLabel*/}
                                    {/*value="manual"*/}
                                    {/*control={<Radio color="primary" />}*/}
                                    {/*label="Механика"*/}
                                    {/*labelPlacement="end"*/}
                                {/*/>*/}
                            {/*</RadioGroup>*/}
                        {/*</FormControl>*/}
                        {/*<Divider light />*/}

                        {/*<DialogSelect*/}
                            {/*title='Город'*/}
                            {/*options={yourCityList}*/}
                            {/*name='city'*/}
                        {/*/>*/}
                        {/*<Divider light />*/}


                        {/*<Button variant="contained" component="label" color="default" className={classes.button}>*/}
                            {/*Фото из галереи*/}
                            {/*<input*/}
                                {/*type="file"*/}
                                {/*// style={{ display: "none" }}*/}
                                {/*name='image'*/}
                            {/*/>*/}
                            {/*<CloudUploadIcon className={classes.rightIcon} />*/}
                        {/*</Button>*/}
                        {/*<Divider light />*/}


                        {/*<Button*/}
                            {/*variant="contained"*/}
                            {/*color="primary"*/}
                            {/*className={classes.button}*/}
                            {/*type='submit'*/}
                        {/*>*/}
                            {/*Опубликовать*/}
                        {/*</Button>*/}
                    {/*</form>*/}
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
