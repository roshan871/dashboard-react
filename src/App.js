import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/Topbar.js/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from './pages/userList/UserList';



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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
