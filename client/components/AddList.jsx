import React from 'react'
import {connect} from 'react-redux'
import { addGoodDeed } from '../actions/gooddeed'

// import GoodList from './GoodList'

export class AddList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            deed: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addDeed = this.addDeed.bind(this)
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    addDeed(e){
        e.preventDefault()

        let deed = {
            id: this.state.id++,
            deed: this.state.deed
        }
        this.props.dispatch(addGoodDeed(deed))
        this.setState({
            deed: ''
        })
        console.log('hi', deed)
    }

    render() {
        return (
        <div className="columns is-centered">
				<div className="level columns">
					<form className="control column is-4">
					    <input onChange={this.handleChange} className="input is-normal has-text-centered" type="text" value={this.deed} name="deed" placeholder="Enter deed" />
					    <a className="button column is-4 is-normal is-dark is-outlined is-mobile" onClick={this.addDeed} type="submit" value="add deed">
						Add
					    </a>
                    </form>
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