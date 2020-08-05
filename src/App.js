import React from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import DoneTodoList from './components/DoneTodoList';
import { HashRouter, Link, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
            <div className="nav">
              <ul>
                <li><Link to="/done" >Done Todo List</Link></li>
                <li><Link to="/" >Add Todo List</Link></li>
              </ul>
              <Route exact path="/done" component={DoneTodoList}></Route>
              <Route exact path="/" component={Home}></Route>
            </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
