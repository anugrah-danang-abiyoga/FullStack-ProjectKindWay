import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: '',
      confirm_password: '',
      user_city: '',
      user_country: '',
      user_region: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {user_name, password, confirm_password, user_city, user_country, user_region} = this.state
    if (password == confirm_password) this.props.dispatch(registerUserRequest({user_name, password, user_city, user_country, user_region}))
  }
  render() {
    return (
      <form className="Register container" onSubmit={this.submit}>
        <label>Username:
          <input className="input" type="text" name="user_name" onChange={this.updateDetails}/>
        </label><br/>
        <label>Password:
          <input className="input" type="password" name="password" onChange={this.updateDetails}/>
        </label><br/>
        <label>Confirm:
          <input className="input" type="password" name="confirm_password" onChange={this.updateDetails}/>
        </label><br/>
        <label>City:
          <input className="input" type="text" name="user_city" onChange={this.updateDetails}/>
        </label><br/>
        <label>Country:
          <input className="input" type="text" name="user_country" onChange={this.updateDetails}/>
        </label><br/>
        <label>Region:
          <input className="input" type="text" name="user_region" onChange={this.updateDetails}/>
        </label><br/>
          <input className="button is-success" type="submit" />
      </form>
    )
  }
}

export default connect()(Register)