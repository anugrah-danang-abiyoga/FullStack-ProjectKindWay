import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

import GoodList from './GoodList'
import AddList from './AddList'

function Nav (props) {
  return (
    <div className="Nav hero is-small is-info">
      <div className="hero-body">
        <Link to="/GoodList">Home</Link>
        {props.auth.isAuthenticated
          ? <div>
          <button onClick={() => props.dispatch(logoutUser())}>Logout</button>
          <AddList />
          {/* <GoodList /> */}
          </div> 
          : <div className="columns nav-menu">
            <Link className="nav-item" to="/login">Login</Link>&nbsp;
            <Link className="nav-item" to="/register">Register</Link>
          </div>
        }
      </div> 
    </div>
  )
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps)(Nav)