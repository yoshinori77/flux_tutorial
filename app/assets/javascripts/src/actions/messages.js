// actions/messages.js
import request from 'superagent'
import Dispatcher from '../dispatcher'
import {ActionTypes} from '../constants/app'

export default {
  changeOpenChat(newUserID) {
    Dispatcher.handleViewAction({
      type: ActionTypes.UPDATE_OPEN_CHAT_ID,
      userID: newUserID,
    })
  },
  sendMessage(userID, message) {
    Dispatcher.handleViewAction({
      type: ActionTypes.SEND_MESSAGE,
      userID: userID,
      message: message,
      timestamp: +new Date(),
    })
  },
  getMessages() {
    return new Promise((resolve, reject) => {
      request
      .get('/')
      .end((error, res) => {
        if (!error && res.status === 200) {
          const json = JSON.parse(res.text)
          Dispatcher.handleServerAction({
            type: ActionTypes.GET_MESSAGES,
            json,
          })
          console.log(json)
          resolve(json)
          console.log(json)
        } else {
          console.log(res)
          reject(res)
          console.log(res)
        }
      })
    })
  },
}
