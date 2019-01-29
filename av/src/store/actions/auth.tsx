import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData: any) => {
    const idToken = authData.idToken;
    const userId = authData.userId;

    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken,
        userId
    };
};

export const authFail = (error: any) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
      type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime: any) => {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email: string, password: string, isSignIn: boolean) => {
  return (dispatch: any) => {
      dispatch(authStart());
      const authData = {
          email: email,
          password: password,
          returnSecureToken: true
      };

      let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAzqH7QLa-YYvRzPBwtjtHGmabLXWdtF6g';

      if (!isSignIn) {
          url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAzqH7QLa-YYvRzPBwtjtHGmabLXWdtF6g';
      }

      axios.post(url, authData)
          .then(response => {
              dispatch(authSuccess(response.data));
              dispatch(checkAuthTimeout(response.data.expiresIn));
          })
          .catch(err => {
              dispatch(authFail(err.response.data.error));
          });
  };
};