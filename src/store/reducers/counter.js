import { actionTypes } from '../actions/counter'

export default function(state = 10, {type, playload}) {
    switch (type) {
        case actionTypes.increase:
            return state + 1
        case actionTypes.decrease:
            return state - 1
        default:
            return state
    }
}