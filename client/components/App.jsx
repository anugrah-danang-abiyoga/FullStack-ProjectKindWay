import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import GoodList from './GoodList'

import {connect} from 'react-redux'

const App = ({auth}) => (
  <Router>
    <div className='app-container has-text-centered'>
      <h1 className="title is-1">Project Kind Way</h1>
      </div>
    <div className="ternery">
    <Route exact path="/" component={props => isAuthenticated
    ? <GoodList {...props} />
    : <Login {...props} /> } />

      <Route path="/" component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
    </div>
  </Router>
)

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(App)