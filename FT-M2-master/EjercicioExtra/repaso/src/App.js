//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Users from './components/Users';
import { Route } from 'react-router-dom';
import UserDetail from './components/UserDetail';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <NavBar />
      </Route>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' render={() => <About info="Esta es la info"/>}/> {/* Puedo pasarle props Ej: anidando <About info='pop' /> */}

      <Route exact path='/users' render={() => <Users />} /> 
      {/* Así sería la forma de pasarle los datos si uso render, es decir paso los datos manualmente. */}
      {/* <Route path='/userDetail/:id' render={(match) => <UserDetail match = {match}/>} /> */}
      {/* Método component. Los datos pasan automáticamente */}
      <Route path='/userDetail/:id' component={UserDetail} />
      <Form></Form>
    </div>
  );
}

export default App;
