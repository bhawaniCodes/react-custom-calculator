import { ADD_COUNT, REDUCE_COUNT } from "./actionTypes";

export const addCount = (data) => {
    return {type: ADD_COUNT, payload: data}
}

export const reduceCount = (data) => {
    return {type: REDUCE_COUNT, payload: data}
}

