import React from 'react'
import {connect} from 'react-redux'
import { editGoodDeed, deleteGoodDeed } from '../actions/gooddeed'

class GoodList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            act: '',
            showInputField: false
        }
        // this.act = this.act.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.editDeed = this.editDeed.bind(this)
        this.deleteDeed = this.deleteDeed.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
    }
    toggleForm() {
        this.setState({showInputField: !this.state.showInputField})
    }
    handleChange(e) {
        this.setState({[e.target.deed]: e.target.value})
    }
    editDeed(e, deed) {
        e.preventDefault() 

        let updateDeed = {
            id: deed.id,
            act: this.state.act || this.props.gooddeed[deed.id].deed
        }
        let act = updateDeed.act
    }
    deleteDeed(e, deed) {
        e.preventDefault()
        this.props.dispatch(deleteGoodDeed(deed.deed_id))
    }
    render() {
        return (
            <div>
                {this.props.gooddeed.map(deed => {
                    return (
                        <form key={deed.id}>
                        <div>
                <div>
                    {showInputField}
                    ?
                    <form>
                        <div>
                            <input onChange={this.handleChange} type="text" name="act" placeholder={deed.act} />
                        </div>
                        <div> 
                            <button onClick={e => this.editDeed(e, deed)}>Save</button>
                            <button onClick={e => this.deleteDeed(e, deed)} type="submit">Delete</button>
                        </div>
                    </form>        
                </div>
            </div>
            </form>
            )
        })}
    </div>
    )      
}
}

const mapStateToProps = (state) => {

    return {
        gooddeed: state.gooddeed
    }
}

export default connect(mapStateToProps)(GoodList)