// src/constants/app.js
import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({
  UPDATE_OPEN_CHAT_ID: null,
  SEND_MESSAGE: null,
  GET_MESSAGES: null,
})
export function CSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
}
const Root = window.location.origin || `${window.location.protocol}//${window.location.hostname}`
const APIRoot = `${Root}/messages`
export const APIEndpoints = {
  Messages: APIRoot + '/index'
}
