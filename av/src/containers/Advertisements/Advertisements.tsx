import React from 'react'
import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { Form, Field } from 'react-final-form'

import { withStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from '@material-ui/core/Radio';



import Grid from '@material-ui/core/Grid';
import CircularProgress from '../../components/UI/Spinner/CircularProgress'

import AppMenu from '../../components/Navigation/AppBar/AppMenu';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import AdvertisementsList from "../../components/AdvertisementsList/AdvertisementsList";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import IconButton from '@material-ui/core/IconButton';
import DialogForm from "../../components/UI/DialogForm/DialogForm";

import * as actions from '../../store/actions/index'
import FullAdvertisement from "../FullAdvertisement/FullAdvertisement";

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {Divider} from "@material-ui/core";


const styles: any = (theme: any) => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
        left: '0'
    },
    grow: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        marginTop: '20px'
    },
    appBarLink: {
        color: 'white',
        marginRight: '10px'
    },
    drawerPaper: {
        width: '100%',
    },
    formRadioGroup: {
        flexDirection: 'column'
    },
});

interface IAdvertisementsProps {
    classes: any;
    loading: boolean;
    onAddedAdverts: any;
    advertisements: [
        IAdvertisement
    ];
    history: any;
    filterAdvertisementsByName: any;
}

interface IAdvertisementsState {
    right: boolean;
    showDialogWindow: boolean;
}

interface IAdvertisement {
    body: string;
    brand: string;
    city: string;
    dash: string;
    engine: string;
    image: string;
    message: string;
    model: string;
    price: string;
    transmission: string;
    volume: string;
    year: string;
}

class Advertisements extends React.Component<IAdvertisementsProps, IAdvertisementsState> {
    constructor(props: IAdvertisementsProps) {
        super(props);

        this.state = {
            right: false,
            showDialogWindow: false
        }
    }

    componentDidMount(): void {
        this.props.onAddedAdverts();
        this.setState({right: true});
    }


    openDialogWindow = () => {
        this.setState({ showDialogWindow: true })
    };

    onCloseDialogWindow = () => {
        this.setState({ showDialogWindow: false })
    };

    filterCars = (values: any) => {
        const sortedByNumberArray = this.props.advertisements.sort((obj1: any, obj2: any) => {
            return obj1.year - obj2.year;
        });

        if (values.byDirection === 'down') {
            sortedByNumberArray.reverse()
        }

        this.props.filterAdvertisementsByName('asdasd');

        // const filteredAdvertisements = this.props.advertisements.filter((pilot: any, index: any, arr: any) => {
        //     return pilot.transmission === 'manual'
        // }).concat((val: any) => val);


        this.setState({
            showDialogWindow: false
        });
    };

    render() {
        const { classes, loading, advertisements, history } = this.props;
        const { showDialogWindow } = this.state;

        if (loading) {
            return (
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <CircularProgress />
                </Grid>
            )
        }

        return(
            <Drawer
                anchor="right"
                open={this.state.right}
                elevation={1}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.root}>
                    <AppMenu>
                        <SideDrawer isAuth={true}/>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Обьявления
                        </Typography>
                        <Link aria-label="Menu" className={classes.appBarLink} to="/">
                            <IconButton
                                type='button'
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <SearchIcon />
                            </IconButton>
                        </Link>

                        {/*TODO: FILTERS IN COMPONENT*/}
                        <DialogForm
                            showDialogWindow={showDialogWindow}
                            openDialogWindow={this.openDialogWindow}
                            onCloseDialogWindow={this.onCloseDialogWindow}
                        >
                            <Form
                                onSubmit={this.filterCars}
                                render={({ handleSubmit }) => (
                                <form
                                    onSubmit={handleSubmit}
                                    autoComplete='off'
                                >
                                    <DialogTitle id="form-dialog-title">Сортировка</DialogTitle>
                                    <DialogContent>
                                        <Field name="byDirection" type="radio">
                                            {({ input, meta }) => (
                                                <FormControl className={classes.formControl}>
                                                    <RadioGroup
                                                        className={classes.formRadioGroup}
                                                        aria-label="position"
                                                        row
                                                        {...input}
                                                    >
                                                        <FormControlLabel
                                                            className={classes.formControlLabel}
                                                            value="up"
                                                            control={<Radio color="primary" />}
                                                            label="Возрастание"
                                                            labelPlacement="end"
                                                        />
                                                        <FormControlLabel
                                                            className={classes.formControlLabel}
                                                            value="down"
                                                            control={<Radio color="primary" />}
                                                            label="Убывание"
                                                            labelPlacement="end"
                                                        />
                                                    </RadioGroup>
                                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Divider />
                                        <Field name="byPriceAndYear" type="radio">
                                            {({ input, meta }) => (
                                                <FormControl className={classes.formControl}>
                                                    <RadioGroup
                                                        className={classes.formRadioGroup}
                                                        aria-label="position"
                                                        row
                                                        {...input}
                                                    >
                                                        <FormControlLabel
                                                            className={classes.formControlLabel}
                                                            value="byPrice"
                                                            control={<Radio color="primary" />}
                                                            label="По цене"
                                                            labelPlacement="end"
                                                        />
                                                        <FormControlLabel
                                                            className={classes.formControlLabel}
                                                            value="byYear"
                                                            control={<Radio color="primary" />}
                                                            label="По году выпуска"
                                                            labelPlacement="end"
                                                        />
                                                    </RadioGroup>
                                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                                </FormControl>
                                            )}
                                        </Field>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.onCloseDialogWindow} className={classes.grow} color="primary">
                                            СБРОС
                                        </Button>
                                        <Button onClick={this.onCloseDialogWindow} color="primary">
                                            ОТМЕНА
                                        </Button>
                                        <Button type='submit' color="primary">
                                            ОК
                                        </Button>
                                    </DialogActions>
                                </form>
                            )} />
                        </DialogForm>
                    </AppMenu>

                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12} sm={12}>
                            <AdvertisementsList
                                history={history}
                                advertisements={advertisements}
                            />
                        </Grid>
                    </Grid>
                </div>
                <Route path="/advertisements/:id" exact component={FullAdvertisement} />
            </Drawer>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        advertisements: state.advertisements.advertisements,
        loading: state.advertisements.loading,
        error: state.advertisements.error
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddedAdverts: () => dispatch(actions.getAdvertisements()),
        filterAdvertisementsByName: (name: string) => dispatch({ type: 'FILTER_ADVERTISEMENTS_BY_NAME', name: name })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Advertisements));
