import logo from './logo.svg';
import './App.css';

const influencerList = [
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
      <h1>List of Influencers:</h1>
      <InfluencerInfoItem />
    </div>
  );
}

function InfluencerInfoItem() {
  return (
    influencerList.map(influencer => (
      <ul key= {influencer.id}>
        <li>Name: {influencer.name}</li>
        <li>Location: {influencer.location}</li>
        <li>Followers: {influencer.followers}</li>
        <li>Following: {influencer.following}</li>
      </ul>
    ))
  )
}

export default App;
