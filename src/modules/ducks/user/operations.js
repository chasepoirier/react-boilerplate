import * as actions from './actions'
import api from '../../api'

const loginRequest = actions.requestLogin()

const submitLoginRequest = credentials => dispatch => {
  dispatch(loginRequest).then(() => {
    api.user
      .login(credentials)
      .then(user => dispatch(actions.userLoginSuccess(user)))
      .catch(error => dispatch(actions.userLoginFail(error)))
  })
}

export { loginRequest, submitLoginRequest }
