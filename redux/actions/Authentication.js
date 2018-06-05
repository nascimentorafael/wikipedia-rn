import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  RESET_STATE,
} from '../constants/action-types';
import AuthenticationApi from '../../api/AuthenticationApi';

const AUTHENTICATION_ERROR = {
  INVALID_EMAIL: 'auth/invalid-email',
};

const actionCreator = (type, payload = null) => ({
  type,
  payload
});

export const isUserAuthenticated = (state) => state.user.isAuthenticated;

export const resetState = () => (dispatch) => dispatch(actionCreator(RESET_STATE));

export const loginUser = (email, password) => (dispatch) => {
  dispatch(actionCreator(LOGIN_USER_START, { email, password}));

  return AuthenticationApi.loginUser(email, password)
  .then((user) => dispatch(
    actionCreator(
      LOGIN_USER_SUCCESS,
      user
    )
  )).catch((error) => dispatch(
    actionCreator(
      LOGIN_USER_FAIL,
      error
    )
  ));
};

export const registerUser = (email, password) => (dispatch) => {
  dispatch(actionCreator(REGISTER_USER_START, { email, password }));

  return new Promise ((resolve, reject) => {
    AuthenticationApi.registerUser(email, password)
    .then((user) => {
      dispatch(actionCreator(
        REGISTER_USER_SUCCESS,
        user
      ));
      resolve(user);
    }).catch((error) => {
      dispatch(actionCreator(
        REGISTER_USER_FAIL,
        error
      ));
      reject(error);
    });
  });
};
