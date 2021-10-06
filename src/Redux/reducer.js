import { ADD_COUNT, REDUCE_COUNT } from "./actionTypes";

export const reduceFn = (state, { type, payload }) => {
    switch (type) {
        case ADD_COUNT: return { ...state, counter: state.counter + payload }
        case REDUCE_COUNT: return { ...state, counter: state.counter - payload }
        default: return {...state}
    }
    
}