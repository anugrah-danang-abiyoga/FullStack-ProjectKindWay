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
    }
}