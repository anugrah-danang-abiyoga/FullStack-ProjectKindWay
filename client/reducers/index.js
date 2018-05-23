import {combineReducers} from 'redux'

import auth from './auth'
import gooddeed from './gooddeed'

export default combineReducers({
  auth,
  gooddeed
})