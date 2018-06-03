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
        this.handleChange = this.handleChange.bind(this)
        this.addDeed = this.addDeed.bind(this)
    }
    handleChange(e) {
        this.setState({[e.target.act]: e.target.value})
    }

    addDeed(e){
        e.preventDefault()

        let deed = {
            id: this.state.id++,
            act: this.state.act
        }
        this.props.dispatch(addGoodDeed(deed))
        this.setState({
            act: ''
        })
    }

    render() {
        return (
        <div className="columns is-centered">
					<div> 
                        <GoodList />
                    </div>
				<div className="level columns">
					<div className="control column is-4">
						<input onChange={this.handleChange} className="input is-normal has-text-centered" type="text" value={this.state.act} name="act" placeholder="Enter act" />
					</div>
					<a className="button column is-4 is-normal is-dark is-outlined is-mobile" onClick={this.addDeed} type="submit" value="add item">
						Add
					</a>
					<br/>
				</div>
			</div>
        )
    }

}


const mapStateToProps = (state) => {

    return {
        gooddeed: state.gooddeed
    }
}

export default connect(mapStateToProps)(AddList)