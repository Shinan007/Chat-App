import React,{ lazy } from 'react';
import Home from './pages/Home'
import Auth from './pages/Auth'
import Group from './pages/Groups'
import Privateroute from './components/auth/privateroute';

import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';

// const Login = lazy(()=>{import("./pages/Login")});
// const Home = lazy(()=>{import("./pages/Home")});
let user = true;
function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
        <Route element={<Privateroute user={user}/>}>
          <Route path='group' element={<Group/>}/>
        </Route>
        <Route path='/auth' element={<Privateroute user={!user} path='/'>
          <Auth/>
        </Privateroute>}/>
      </Routes>
    </Router>
  )
}

export default App