import logo from './logo.svg';
import './App.css';
// import './style.css';
// import './mobile.css';
// import './cool-gray.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  
  return (
    
    <>
    
    <div className="App">
        
          <Router>
            <Switch>
              <Route path="/" exact component={MainPage}></Route>
              <Route path="/login" exact component={LoginForm}></Route>
              <Route path="/signUp" exact component={SignUpForm}></Route>
            </Switch>
          </Router>
        
    </div>
    </>
  );
}

export default App;
