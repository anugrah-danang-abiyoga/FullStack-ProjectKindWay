import React from 'react'
import {connect} from 'react-redux'
import { addGoodDeed } from '../actions/gooddeed'

import GoodList from './GoodList'

export class AddList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            act: ''
        }
        
    }
    handleChange(e) {
        this.setState({[e.target.act]: e.target.value})
    }

    addDeed(e){
        e.preventDefault()

        let deed = {
            id: id.state.id++,
            act: this.state.act
        }
    }

    render() {
        return
        <div className="columns is-centered">
					{/* Input field for shopping item */}
				<div className="level columns">
					<div className="control column is-4">
						<input onChange={this.handleChange} className="input is-normal has-text-centered" type="text" value={this.state.name} name="name" placeholder="Enter item" />
						{/* <label className="label ">Item:</label> */}
					</div>
					<a className="button column is-4 is-normal is-dark is-outlined is-mobile" onClick={this.addItem} type="submit" value="add item">
						Add
					</a>
					<br/>
				</div>
			</div>
    }
}