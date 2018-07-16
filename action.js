import API from './api'

// Split SET_PROFILE into 2 actions for request/response

export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export function requestProfile () {
  return { type: REQUEST_PROFILE }
}

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export function receiveProfile (profile) {
  return { type: RECEIVE_PROFILE, profile }
}

export function fetchProfile () {
  // NOTE: instead of returning an object, we return a function that can
  // dispatch actions and return a Promise for when it's all complete!
  return (dispatch, getState) => {
    dispatch(requestProfile())
    return API.requestProfile()
      .then((res) => dispatch(receiveProfile(res.profile)))
  }
}