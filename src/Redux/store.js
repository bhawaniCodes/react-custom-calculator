import { createStore } from 'redux';
import { reduceFn } from './reducer';

const initState = {
    counter: 0
}

export const store = createStore(reduceFn, initState);