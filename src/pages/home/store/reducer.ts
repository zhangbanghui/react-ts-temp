import { UPDATE_HOME_STORE } from './constants'

import { HomeStoreAction } from './actionCreators'

const initState = {}

const reducer = (state = initState, action: HomeStoreAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
