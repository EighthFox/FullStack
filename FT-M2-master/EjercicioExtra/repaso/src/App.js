//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <NavBar />
      </Route>
      <Route exact path='/' component={Home} />
      <About />
    </div>
  );
}

export default App;
