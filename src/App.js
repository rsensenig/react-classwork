import './App.css';

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

function App() {
  return (
    <div className="App">
      <h1>Enter a New User:</h1>
      <label htmlFor="user-name">New User:</label>
      <input 
        id="user-name"
        name="user-name"
        type="text" 
      />
      <br />
      <h1>List of Users:</h1>
      <UserItem />
    </div>
  );
}

function UserItem() {
  return (
    userList.map(user => (
      <ul key= {user.id}>
        <li>Name: {user.name}</li>
        <li>Location: {user.location}</li>
        <li>Followers: {user.followers}</li>
        <li>Following: {user.following}</li>
      </ul>
    ))
  )
}

export default App;
