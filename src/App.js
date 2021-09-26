import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/Topbar.js/Topbar';
import Home from './pages/home/Home';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';



function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <UserList />
            </Route>
            <Route path='/user/:userId'>
              <User />
            </Route>
            <Route path='/newUser'>
              <NewUser />
            </Route>
            <Route path='/products'>
              <ProductList />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
