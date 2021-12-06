import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import GameSelectionPage from './pages/GameSelectionPage';
import TicTacToePage from './pages/TicTacToePage';

import { AuthProvider } from './context/AuthContext';
import AuthButton from './components/AuthButton';

import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import PrivateRoute from './components/PrivateRoute';


import Post from './components/Post';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-5">
      <Link className="navbar-brand" to="/">Games2Go</Link>
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts">
            view all post
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link " exact to="/login">
            Login
          </NavLink>
          <AuthButton/>
          
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render(){
  return (
    <AuthProvider>
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/TicTacToe" component= {TicTacToePage}/>
                <Route path="/" component= {PostsListPage}/>

                <Route path="/posts" component={PostsListPage} />
                <PrivateRoute path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
              </Switch>

            
            </div>
          </div>
        </Router>
    </AuthProvider>
    );
  }
}

export default App;
