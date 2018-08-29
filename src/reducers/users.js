import { FETCH_USERS } from '../actions/types';
export default function(state = [], actions) {
  switch (actions.type) {
    case FETCH_USERS:
      return [...state, ...actions.payload.data];
    default:
      return state;
  }
}