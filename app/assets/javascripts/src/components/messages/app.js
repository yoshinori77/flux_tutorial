import React from 'react'
import Header from './header'
import UserList from './userList'
import MessagesBox from './messagesBox'
import MessagesStore from '../../stores/messages'

class App extends React.Component {
  // getStateFromStore() {
  //   return {
  //     messages: MessagesStore.getMessages(),
  //   }
  // }
  render() {
    // const {json} = this.state
    return (
        <div className='app'>
          <Header />
          <UserList />
          <MessagesBox />
        </div>
      )
  }
}

export default App
