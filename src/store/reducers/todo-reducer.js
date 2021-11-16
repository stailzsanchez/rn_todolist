import uuid from 'react-native-uuid';
import {getDateApi} from "../../../api/mainApi";


const initialState = [
    {id: uuid.v4(), isDone: false, title: 'test13', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'test1', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'test2', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: false, title: 'test3', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'test4', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: false, title: 'test5', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'test6', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: false, title: 'test7', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: false, title: 'test8', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'test9', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'test10', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'test11', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: false, title: 'test12', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'test13', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'test14', date: '11/08/2021', time: '23:11:49'},
    {id: uuid.v4(), isDone: true, title: 'tes11111t', date: '11/08/2021', time: '23:11:49'},
]


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD-TODO': {
            const dateNow = action.date
            return [{
                id: action.id,
                title: action.title,
                status: false,
                date: dateNow.toLocaleDateString(), //date_full.format('DD-MM-YYYY'),
                time: dateNow.toLocaleTimeString(), //date_full.format('hh:mm:ss'),
            }, ...state]
        }
        case 'REMOVE-TODO': {
            return state.filter(todo => todo.id !== action.id)
        }
        case 'CHANGE-TODO-TITLE': {
            const todo = state.find(todo => todo.id === action.id);
            if (todo) {
                todo.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODO-STATUS': {
            const todo = state.find(todo => todo.id === action.id);
            if (todo) {
                todo.isDone = !todo.isDone;
            }
            state[action.id] = {...todo}

            return [
                // ...state
                ...state.filter(todo => !todo.isDone),
                ...state.filter(todo => todo.isDone)
            ]

        }

        default:
            return [...state];
    }
}

export const removeTodoAC = (id) =>
    ({type: 'REMOVE-TODO', id: id})

export const addTodoAC = (title, date) =>
    ({type: 'ADD-TODO', title: title, id: uuid.v4(), date: date})

export const changeTodoTitleAC = (id, title) =>
    ({type: 'CHANGE-TODO-TITLE', id: id, title: title})

export const changeTodoStatusAC = (id) =>
    ({type: 'CHANGE-TODO-STATUS', id: id})

export const addTodoWithApiDate = (title) => async (dispatch) => {
    try {
        const dateApi = await getDateApi()
        dispatch(addTodoAC(title, new Date(dateApi)))
    } catch (e) {
        console.log('getDateApi - ', e)
    }

}