import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const styles: any = (theme: any) => ({
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
});

interface IAuthState {
    isSignIn: boolean;
    email: string;
    password: string;
}

class Auth extends React.Component<{classes: any, onAuth: any}, IAuthState> {
    state = {
        isSignIn: true,
        email: '',
        password: ''
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

    render() {
        const { classes } = this.props;
        const { isSignIn } = this.state;

        return(
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={6} sm={6}>
                        {isSignIn ? (
                            <Paper className={classes.paper}>
                                <h1>AV.BY</h1>
                                <h2>Вход</h2>
                            </Paper>
                        ) : (
                            <Paper className={classes.paper}>
                                <h1>AV.BY</h1>
                                <h2>Регистрация</h2>
                            </Paper>
                        )}
                        <Paper className={classes.paper}>
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
                                <TextField
                                    id="filled-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="filled"
                                    name="password"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type='submit'
                                >
                                    {isSignIn ? 'Войти на сайт' : 'Регистрация'}
                                </Button>

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
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      onAuth: (email: string, password: string, isSignIn: boolean) => dispatch(actions.auth(email, password, isSignIn))
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Auth));
