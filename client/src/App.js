import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';

import GameSelectionPage from './pages/GameSelectionPage';
import TicTacToePage from './pages/TicTacToePage';
import TetrisPage from './pages/TetrisPage';
import CheckerBoardPage from './pages/CheckerBoardPage';
import HangmanPage from './pages/HangmanPage';
import two48Page from './pages/two48Page';

import './App.css';
import { AuthProvider } from './context/AuthContext';
import AuthButton from './components/AuthButton';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';

import RegisterPage from './pages/RegisterPage';

import ChatBoxPage from './pages/ChatBoxPage';

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Games2Go</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/comments">
            Comments
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/comments" component={ChatBoxPage} />
                <Route path="/TicTacToe" component= {TicTacToePage}/>
                <Route path="/Checkers" component= {CheckerBoardPage}/>
                <Route path="/Hangman" component= {HangmanPage}/>
                <Route path="/Tetris" component={TetrisPage}/>
                <Route path="/chatbox" component={ChatBoxPage} />
                <Route path="/2048" component={two48Page}/>
                <Route path="/" component={GameSelectionPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}


export default App;
