import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken: string, userId: any) => {
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
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
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
              const expirationDate: any = new Date( new Date().getTime() + response.data.expiresIn * 1000 );

              localStorage.setItem('token', response.data.idToken);
              localStorage.setItem('expirationDate', expirationDate);
              localStorage.setItem('userId', response.data.localId);
              dispatch(authSuccess(response.data.idToken, response.data.userId));
              dispatch(checkAuthTimeout(response.data.expiresIn));
          })
          .catch(err => {
              dispatch(authFail(err.response.data.error));
          });
  };
};

export const authCheckState = () => {
    return (dispatch: any) => {
        const token = localStorage.getItem('token');

        if (!token) {
            dispatch(logout());
        } else {
            const storageExpirationDate: any = localStorage.getItem('expirationDate');
            const expirationDate = new Date(storageExpirationDate);

            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    }
};