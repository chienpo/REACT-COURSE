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
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '../../components/UI/Spinner/CircularProgress'

import AppMenu from '../../components/Navigation/AppBar/AppMenu';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import CompanyLogo from '../../components/Logos/CompanyLogo';

const styles: any = (theme: any) => ({
    textField: {
        marginLeft: 0,
        marginRight: 0,
        width: '100%',
        marginTop: 0
    },
    textFieldLabel: {
        textAlign: 'left',
        marginBottom: 10,
        fontSize: '14px'
    },
    root: {
        flexGrow: 1,
        left: '0',
        marginTop: '200px'
    },
    paper: {
        padding: 0,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        maxWidth: '320px',
        margin: '0 auto'
    },
    appBarLink: {
        color: 'white',
        marginRight: '10px'
    },
    drawerPaper: {
        width: '100%',
    },
    button: {
        width: '100%',
        padding: '0',
        background: '#3dca86',
        margin: '20px 0',
        fontWeight: 'bold',
        lineHeight: '1',
        height: 55,
        display: 'flex',
        alignItems: 'center',
        fontSize: 18,
        textTransform: 'inherit',
        paddingTop: 5
    },
    linkColored: {
        color: 'blue',
        marginTop: '5px',
        cursor: 'pointer',
        display: 'block'
    },
    title: {
        color: 'black',
        margin: '50px 0 20px'
    },
    paragraph: {
        marginTop: '0'
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
        bottom: '2px'
    },
});

interface IAuthState {
    isSignIn: boolean;
    email: string;
    password: string;
    open: boolean;
    right: boolean;
}

interface IAuthProps {
    classes: any;
    onAuth: any;
    loading: boolean;
    error: any;
    isAuthenticated: boolean;
}

class Auth extends React.Component<IAuthProps, IAuthState> {
    state = {
        isSignIn: true,
        email: '',
        password: '',
        open: false,
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
        const { classes, isAuthenticated, loading } = this.props;
        const { isSignIn } = this.state;

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
                    <Grid item xs={12} sm={12}>
                        <Paper
                            square
                            className={classes.paper}>
                            <CompanyLogo />
                            <h2 className={classes.title}>
                                {isSignIn ? 'Вход' : 'Регистрация'}
                            </h2>
                        </Paper>
                        <Paper
                            square
                            className={classes.paper}
                        >
                            <form
                                noValidate
                                autoComplete="on"
                                onSubmit={this.submitHandler}
                            >
                                <p className={classes.textFieldLabel}>Логин или электронная почта</p>
                                <TextField
                                    className={classes.textField}
                                    id="filled-required"
                                    margin="normal"
                                    variant="outlined"
                                    name="email"
                                />
                                <p className={classes.textFieldLabel}>Пароль</p>
                                <TextField
                                    className={classes.textField}
                                    id="filled-password-input"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    name="password"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type='submit'
                                >
                                    {loading && <CircularProgress />}
                                    {isSignIn ? 'Войти на сайт' : 'Регистрация'}
                                </Button>
                            </form>
                        </Paper>
                        <Paper square className={classes.paper}>
                            {!isSignIn && (
                                <p className={classes.paragraph}>
                                    Я принимаю условия пользовательского соглашения
                                    и даю свое согласие на обработку персональных данных
                                </p>
                            )}
                            <div>
                                {isSignIn ? 'Первый раз на сайте?' : 'Уже зарегистрированы?'}
                            </div>
                            <a className={classes.linkColored} onClick={this.switchAuthModeHandler}>
                                {isSignIn ? 'Регистрация' : 'Вход'}
                            </a>
                        </Paper>
                    </Grid>

                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={Boolean(this.props.error)}
                        autoHideDuration={1000}
                        onClose={(event: any, reason: string) => {
                            if (reason === 'clickaway') {
                                return
                            }
                            setTimeout(() => {
                                this.setState({ open: false })
                            }, 3000);
                        }}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={(
                            <span className={classes.message}>
                                {this.props.error && this.props.error.message}
                            </span>
                        )}
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
