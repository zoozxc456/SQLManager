import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        </Switch>
    </Router>
  );
}

export default App;
