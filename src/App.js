import './App.css';
import { UserItem } from './components/UserItem';

function App() {
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
  const handleInputChange = (event) => {
    console.log(event.target.value);
  }
  
  return (
    <div className="App">
      <h1>Enter a New User:</h1>
      <label htmlFor="username">New User:</label>
      <input 
        id="username"
        name="username"
        type="text"
        onChange={handleInputChange} 
      />
      <br />
      <h1>List of Users:</h1>
      <UserItem userList={userList}/>
    </div>
  );
}

export default App;
