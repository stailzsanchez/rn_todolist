// import {combineReducers, createStore} from "redux";
// import {todoReducer} from './reducers/todo-reducer';
// // import {loadState, saveState} from "../utils/local-storage";
//
// const rootReducer = combineReducers({
//     todoList: todoReducer
// })
//
// export const store = createStore(rootReducer)
//
//
// export type AppRootStateType = ReturnType<typeof store.getState>
//
// // @ts-ignore
// window.store = store;

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {todoReducer} from './reducers/todo-reducer'

const rootReducer = combineReducers({
    todos: todoReducer
})

export const store = createStore(rootReducer)
