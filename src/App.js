import React, {useState, useEffect} from 'react';
import './App.css';
import { UserItem } from './components/UserItem';
import { UserForm } from './components/UserForm';

const initialUsers = [
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

function App() {
  // create a new state named 'users', and initialize with an empty array
  const [users, setUsers] = useState([]);
  
  // Create a new state and its setter function. This state will keep the value of the user input via input field. The value will represent a username.
  // Initial value of the state is an empty string
  const [userName, setUserName] = useState('');

  // create a new state named 'isLoading', initialize to false
  const [isLoading, setIsLoading] = useState(false);

  // store an item called "UserName" to the local storage
  useEffect(() => {
    localStorage.setItem("Username:", userName)
  }, [userName])
  
  useEffect(() => {
    // use the setter method for 'isLoading' and set it to 'true'
    setIsLoading(true);
    
    // in the callback function of the useEffect, call a function called getUsersAsync
    getUsersAsync()
    // attach a then chain to the getUsersAsync function call
    // return a response
      .then(res => {
        // use the setter function for 'users' state to set the 'users' to the response data
        setUsers(res.data);
        // set isLoading back to false
        setIsLoading(false);
      })
    // leave the dependency array empty
  }, [])
  
  // define getUsersAsync
  const getUsersAsync = () => {
    // return a new promise
    return new Promise(resolve => {
      // create a setTimeout to resolve the data after 3 seconds
      setTimeout(() => resolve({data: initialUsers}), 3000)
    })
  }

  // handler function
  const handleUserNameChange = (event) => {
    console.log(event.target.value);
    // set the state that will hold the user name to the value entered into the field
    setUserName(event.target.value);
  }
  
  // handler function to display more information about each user
  const handleUserInformation = () => {
    console.log(userName);
  }

  return (
    <div className="App">
      <h1>Enter a New User:</h1>
      <UserForm 
        userName={userName}
        handleUserNameChange={handleUserNameChange}
        isFocused
      />
      <br />
      <h1>List of Users:</h1>
      {/* use conditional rendering to render either a p tag with text "Loading..." if isLoading is true, OR the UserItem component if it is false */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UserItem 
        initialUsers={initialUsers}
        handleUserInformation={handleUserInformation}
      />
      )}
    </div>
  );
}

export default App;
