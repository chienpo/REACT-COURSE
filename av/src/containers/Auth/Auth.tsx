import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import * as actions from '../../store/actions/index'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '../../components/UI/Spinner/CircularProgress'

import AppMenu from '../../components/Navigation/AppBar/AppMenu';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const styles: any = (theme: any) => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
        left: '0'
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
    }
});

interface IAuthState {
    isSignIn: boolean;
    email: string;
    password: string;
    openSnackbar: boolean;
    right: boolean;
}

interface IAuthProps {
    classes: any;
    onAuth: boolean;
    loading: boolean;
    error: any;
    isAuthenticated: boolean;
}

class Auth extends React.Component<{classes: any, onAuth: any, loading: boolean, error: any, isAuthenticated: boolean}, IAuthState> {
    state = {
        isSignIn: true,
        email: '',
        password: '',
        openSnackbar: true,
        right: false
    };

    submitHandler = (event: React.FormEvent<{}>) => {
        event.preventDefault();

        const elementTarget = event.currentTarget as HTMLFormElement;

        const formData = new FormData(elementTarget);
        const userEmail = formData.get('email') as string;
        const userPassword = formData.get('password') as string;

        const formDataToServer = {
            email: userEmail,
            password: userPassword
        };


        this.props.onAuth(formDataToServer.email, formDataToServer.password, this.state.isSignIn);
    };

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignIn: !prevState.isSignIn};
        });
    };

    componentDidMount(): void {
        this.setState({right: true})
    }

    render() {
        const { classes, isAuthenticated } = this.props;
        const { isSignIn } = this.state;

        if (this.props.loading) {
            return <CircularProgress />
        }

        if (isAuthenticated) {
            return <Redirect to='/' />
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
                        <Link aria-label="Menu" className={classes.appBarLink} to="/">
                            <IconButton
                                type='button'
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <ArrowBack />
                            </IconButton>
                        </Link>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            av.by
                        </Typography>
                    </AppMenu>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12} sm={12}>
                            {isSignIn ? (
                                <Paper
                                    square
                                    className={classes.paper}>
                                    <h1>AV.BY</h1>
                                    <h2>Вход</h2>
                                </Paper>
                            ) : (
                                <Paper
                                    square
                                    className={classes.paper}>
                                    <h1>AV.BY</h1>
                                    <h2>Регистрация</h2>
                                </Paper>
                            )}
                            <Paper
                                square
                                className={classes.paper}
                            >
                                <form
                                    noValidate
                                    autoComplete="on"
                                    onSubmit={this.submitHandler}
                                >
                                    <TextField
                                        id="filled-required"
                                        label="Required"
                                        margin="normal"
                                        variant="filled"
                                        name="email"
                                    />
                                    <Divider light />
                                    <TextField
                                        id="filled-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                        variant="filled"
                                        name="password"
                                    />
                                    <Divider light />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        type='submit'
                                    >
                                        {isSignIn ? 'Войти на сайт' : 'Регистрация'}
                                    </Button>
                                    <Divider light />

                                    {!isSignIn && (
                                        <>
                                            <p>
                                                Я принимаю условия пользовательского соглашения
                                                и даю свое согласие на обработку персональных данных
                                            </p>
                                        </>
                                    )}
                                </form>
                                {isSignIn && (<Link to="/auth">Забыли пароль?</Link>)}
                            </Paper>
                            {isSignIn ? (
                                <Paper className={classes.paper}>
                                    <div>Первый раз на сайте?</div>
                                    <a onClick={this.switchAuthModeHandler}>
                                        Регистрация
                                    </a>
                                </Paper>
                            ) : (
                                <Paper className={classes.paper}>
                                    <div>Уже зарегистрированы?</div>
                                    <a onClick={this.switchAuthModeHandler}>
                                        Вход
                                    </a>
                                </Paper>
                            )}
                        </Grid>
                    </Grid>

                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={!!this.props.error && this.state.openSnackbar}
                        autoHideDuration={3000}
                        onClose={(event: any, reason: any) => {
                            if (reason === 'clickaway') {
                                return;
                            }
                            this.setState({ openSnackbar: false });
                        }}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.props.error && this.props.error.message}</span>}
                    />
                </div>
            </Drawer>
        )
    }
}

interface IAuthStateInProps {
    auth: {
        token: string;
        error: string;
        loading: boolean;
    };
}

const mapStateToProps = (state: IAuthStateInProps) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
      onAuth: (email: string, password: string, isSignIn: boolean) => dispatch(actions.auth(email, password, isSignIn))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Auth));
