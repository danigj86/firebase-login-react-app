import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Dashboard } from './components/dashboard';
import { Auth } from './components/auth';

function App() {


  const [user, setUser] = useState(false);

  return (
   <div className="App"> {user ? <Dashboard/> : <Auth />}</div> 
  )
}

export default App;
