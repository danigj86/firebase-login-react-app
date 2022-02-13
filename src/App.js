import logo from './logo.svg';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Auth } from './components/Auth';
import { useUserContext } from './context/userContext';

function App() {

  const { user, error, loading } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <div className="App"> {user ? <Dashboard/> : <Auth />}</div>  }
    </div>
  )
}

export default App;
