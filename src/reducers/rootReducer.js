import actionTypes from '../action-types/action-types'
import { incrementCounter } from "../actions/actions";

const initialState = {
    count:0,
    userId: 123123421,
    users: [{}],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
        //   return incrementCounter(state);
        return {count: state.count + 1}
      case actionTypes.DECREMENT:
        return { count: state.count - 1 };
    default:
        return state
    }
}

export default rootReducer