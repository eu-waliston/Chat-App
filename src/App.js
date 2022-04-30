import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) {
    return <LoginForm />
  }  

  return (
    <ChatEngine 
      height="100vh"
      projectID="c2cec35b-2a06-4ee9-a9a8-e08ce0444206"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={ (chatAppPrps) => <ChatFeed {...chatAppPrps}/> }
    />
  );
}

export default App;
