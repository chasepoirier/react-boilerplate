import * as types from './types'

const initialState = {
  user: null,
  loading: false,
  login: {
    errors: null
  }
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.REQUEST_LOGIN: {
      return { ...state, loading: true }
    }
    case types.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        login: { ...state.login, errors: null }
      }
    }
    case types.USER_LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        login: { ...state.login, errors: action.payload.errors }
      }
    }
    default: {
      return state
    }
  }
}

export default user
