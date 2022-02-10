import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Auth } from './components/Auth';

function App() {


  const [user, setUser] = useState(false);

  return (
   <div className="App"> {user ? <Dashboard/> : <Auth />}</div> 
  )
}

export default App;
