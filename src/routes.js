import React from 'react'
import {Switch, Route} from 'react-router-dom'
// import Home from './components/Home'
import Cities from './components/Cities'
import About from './components/About'
import Register from './components/Register'
import Favorites from './components/Favorites'
import Admin from './components/Admin'
// import Owner from './components/Owner'
import Account from './components/Account/Account'
import Login from './components/Login'
import City from './components/City'
import CreateBusiness from './components/Account/CreateBusiness'

export default(
    <Switch>
        {/* <Route component={Home} exact path='/' /> */}
        <Route component={Cities} exact path='/' /> 
        <Route component={City} path='/city/:city' />
        <Route component={About} path='/about' />
        <Route component={Register} path='/register' />
        <Route component={Favorites} path='/favorites' />
        <Route component={Admin} path='/admin' />
        {/* <Route component={Owner} path='/owner' /> */}
        <Route component={Account} exact path='/account' />
        <Route component={CreateBusiness} path ='/account/createBusiness' />
        <Route component={Login} path='/login' />
    </Switch>
)

//Switch gives any of the routes access to these three props (history, location and match)