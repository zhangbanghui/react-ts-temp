import { combineReducers } from 'redux'

import homeReducer from '@pages/home/store/reducer'

const reducer = combineReducers({
  home: homeReducer,
})

export default reducer
