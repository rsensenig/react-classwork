import React, {useState} from 'react';
import './App.css';
import { UserItem } from './components/UserItem';
import { UserForm } from './components/UserForm';

function App() {
  // Create a new state and its setter function. This state will keep the value of the user input via input field. The value will represent a username.
  // Initial value of the state is an empty string
  const [userName, setUserName] = useState('');
  
  const userList = [
    {
      id: 1,
      name: 'Rachel Sensenig',
      location: 'Somerville, MA',
      followers: 768,
      following: 59
    },
    {
      id: 2,
      name: 'Kit Fenrir',
      location: 'Denver, CO',
      followers: 5478,
      following: 148
    }
  ]
  
  // handler function
  const handleUserNameChange = (event) => {
    console.log(event.target.value);
    // set the state that will hold the user name to the value entered into the field
    setUserName(event.target.value);
  }
  
  return (
    <div className="App">
      <h1>Enter a New User:</h1>
      <UserForm 
        userName={userName}
        handleUserNameChange={handleUserNameChange}
      />
      <br />
      <h1>List of Users:</h1>
      <UserItem userList={userList}/>
    </div>
  );
}

export default App;
