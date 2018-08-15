import * as types from './types'

export const requestLogin = () => ({
  type: types.REQUEST_LOGIN
})

export const userLoginSuccess = user => ({
  type: types.USER_LOGIN_SUCCESS,
  payload: {
    user
  }
})

export const userLoginFail = error => ({
  type: types.USER_LOGIN_FAIL,
  payload: {
    error
  }
})
