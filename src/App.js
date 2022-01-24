import React, { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar'
import Login from './Login';

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        {user ? (<>
          <Sidebar />
          <Chat />
        </>) : (
          <Login />
        )}
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };
