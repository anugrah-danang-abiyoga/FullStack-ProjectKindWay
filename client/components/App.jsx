import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import GoodList from './GoodList'

import {connect} from 'react-redux'

const App = () => (
  <Router>
    <div className='app-container has-text-centered'>
      <h1 className="title is-1">Project Kind Way</h1>
      <Route path="/" component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
    </div>
  </Router>
)


// const mapStateToProps = ({auth}) => {
//   return {
//     auth
//   }
// }

// export default connect(mapStateToProps)(App)
export default App