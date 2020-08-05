import React from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import DoneTodoListContainer from './containers/DoneTodoListContainer';
import { HashRouter, Link, Route } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

const Home = () => {
  return (
    <div>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}

function App() {
  return (
    <Layout theme="light" className="app">
      <HashRouter>
      <Header>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="home">
        <Link to="/" >Add Todo List</Link>
        </Menu.Item>
        <Menu.Item key="done">
        <Link to="/done" >Done Todo List</Link>
        </Menu.Item>
      </Menu>
      </Header>
      <Layout>
        <Content>
          <Route exact path="/done"><DoneTodoListContainer /></Route>
          <Route exact path="/"><Home /></Route>
        </Content>
      </Layout>
      </HashRouter>
    </Layout>

  );
}

export default App;
