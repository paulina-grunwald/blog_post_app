import { FETCH_POSTS } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload.data)
    default:
      return state
  }
}
