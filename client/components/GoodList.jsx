import React from 'react'
import {connect} from 'react-redux'
import {addGoodDeed, editGoodDeed, deleteGoodDeed} from '../actions/gooddeed'

class GoodList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            act: '',
            showInputField: false
        }
        this.act = this.act.bind(this)
        this.showInputField = this.showInputField.bind(this)
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
            act: this.state.act || this.props.gooddeed[deed.id].act
        }
        let act = updateDeed.act
    }
    deleteDeed(e, deed) {
        e.preventDefault()
        this.props.dispatch(deleteGoodDeed(deed.id))
    }
    render() {
        const {showInputField} = this.state
        const {deed} = this.props

        return (
            <div>
                <div>
                    {showInputField}
                    ?
                    <form key={deed.id}>
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
        )
    }
}

const mapStateToProps = (state) => {

    return {
        gooddeed: state.gooddeed
    }
}

export default connect(mapStateToProps)(GoodList)