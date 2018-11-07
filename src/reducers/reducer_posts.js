import { FETCH_POSTS, FETCH_POST } from '../actions'
import _ from 'lodash'
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('fetched posts', action.payload.data)
      // return object that contains id as a key
      // and value is actual post itself
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data }
    default:
      return state
  }
}
