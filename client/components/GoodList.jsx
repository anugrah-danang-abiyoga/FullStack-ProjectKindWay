import React from 'react'
import {connect} from 'react-redux'
import { addGoodDeed, editGoodDeed, deleteGoodDeed } from '..actions/gooddeed'

class GoodList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deed: '',
            showInputField: false
        }
    }
    toggleForm() {
        this.setState({showInputField: !this.state.showInputField})
    }
    handleChange(e) {
        this.setState({[e.target.deed]: e.target.value})
    }
    editDeed(e, edit) {
        e.preventDefault() 
    }
}