import React, {useState, useEffect} from 'react';
import './App.css';
import { UserItem } from './User/UserItem';
// import { UserForm } from './components/UserForm';
import InputField from './shared/InputField';
import axios from 'axios';

function App() {
  // create a new state named 'users', and initialize with an empty array
  const [users, setUsers] = useState([]);
  
  // Create a new state and its setter function. This state will keep the value of the user input via input field. The value will represent a username.
  // Initial value of the state is your GitHub username
  const [userName, setUserName] = useState('rsensenig');

  // create a new state named 'isLoading', initialize to false
  const [isLoading, setIsLoading] = useState(false);

  // store an item called "UserName" to the local storage
  useEffect(() => {
    localStorage.setItem("Username:", userName)
  }, [userName])

  // handler function for username change
  const handleUserNameChange = (event) => {
    // set the state that will hold the user name to the value entered into the field
    setUserName(event.target.value);
  }
  
  // handler function to display more information about each user
  const handleUserDisplay = (user) => {
    console.log(`You selected ${user.name}`);
  }

  // handler function to make API call after form submission
  const handleCallUserApi = (event) => {
    // prevent page refresh
    event.preventDefault()

     // use the setter method for 'isLoading' and set it to 'true'
     setIsLoading(true);
    
     // start a fetch call
     axios.get(`https://api.github.com/users/${userName}`)
       // take the data and using the setter function of the 'users' state, update the 'users' state
       // set isLoading to false again
       .then(response => {
         setUsers([response.data])
         setIsLoading(false)
       }
       )
  }

  return (
    <div className="App">
      <h1>Users</h1>
      
      <form onSubmit={handleCallUserApi}>
        <InputField
          id="user-name"
          type="text"
          value={userName}
          onChangeFunction={handleUserNameChange}
          isFocused
        >
          User:
        </InputField>
        <button type="submit">Search</button>
      </form>

      {/* use conditional rendering to render either a p tag with text "Loading..." if isLoading is true, OR the UserItem component if it is false */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UserItem 
        users={users}
        handleUserDisplay={handleUserDisplay}
      />
      )}
    </div>
  );
}

export default App;
