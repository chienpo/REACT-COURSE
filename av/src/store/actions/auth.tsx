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
              console.log(response);
              dispatch(authSuccess(response.data));
          })
          .catch(err => {
              console.log(err);
              dispatch(authFail(err));
          });
  };
};