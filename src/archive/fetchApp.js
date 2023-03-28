// import React, {useState, useEffect} from 'react';
// import './App.css';
// import { UserItem } from './components/UserItem';
// import { UserForm } from './components/UserForm';

// function App() {
//   // create a new state named 'users', and initialize with an empty array
//   const [users, setUsers] = useState([]);
  
//   // Create a new state and its setter function. This state will keep the value of the user input via input field. The value will represent a username.
//   // Initial value of the state is your GitHub username
//   const [userName, setUserName] = useState('rsensenig');

//   // create a new state named 'isLoading', initialize to false
//   const [isLoading, setIsLoading] = useState(false);

//   // store an item called "UserName" to the local storage
//   useEffect(() => {
//     localStorage.setItem("Username:", userName)
//   }, [userName])
  
//   useEffect(() => {
//     // use the setter method for 'isLoading' and set it to 'true'
//     setIsLoading(true);
    
//     // start a fetch call
//     fetch(`https://api.github.com/users/${userName}`)
//       // take a response and convert it into a json file
//       .then(res => res.json())
//       // take the data and using the setter function of the 'users' state, update the 'users' state
//       // set isLoading to false again
//       .then(res => {
//         setUsers([res])
//         setIsLoading(false)
//       }
//       )
//     // we will make this call only if there is a change in the user name entered
//   }, [userName])

//   // handler function
//   const handleUserNameChange = (event) => {
//     console.log(event.target.value);
//     // set the state that will hold the user name to the value entered into the field
//     setUserName(event.target.value);
//   }
  
//   // handler function to display more information about each user
//   const handleUserInformation = () => {
//     console.log(userName);
//   }

//   return (
//     <div className="App">
//       <h1>Enter a New User:</h1>
//       <UserForm 
//         userName={userName}
//         handleUserNameChange={handleUserNameChange}
//         isFocused
//       />
//       <br />
//       <h1>List of Users:</h1>
//       {/* use conditional rendering to render either a p tag with text "Loading..." if isLoading is true, OR the UserItem component if it is false */}
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <UserItem 
//         users={users}
//         handleUserInformation={handleUserInformation}
//       />
//       )}
//     </div>
//   );
// }

// export default App;