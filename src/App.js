import React from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import DoneTodoList from './components/DoneTodoList';
import { HashRouter, Link, Route, Router, Switch } from 'react-router-dom';

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
                <div>
                    <ul>
                        <Link to="/done" >Done Todo List</Link>
                    </ul>
                    <ul>
                        <Link to="/" >Add Todo List</Link>
                    </ul>
                    <Route path="/done" component={DoneTodoList}></Route>
                    <Route path="/" component={Home}></Route>
                </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
