import uuid from 'react-native-uuid';
import {getDateApi} from "../../../api/mainApi";


const initialState = [
    // {id: 1, isDone: false, title: 'test13'},
    // {id: 2, isDone: true, title: 'test1'},
    // {id: 3, isDone: true, title: 'test2'},
    // {id: 4, isDone: false, title: 'test3'},
    // {id: 5, isDone: true, title: 'test4'},
    // {id: 6, isDone: false, title: 'test5'},
    // {id: 7, isDone: true, title: 'test6'},
    // {id: 8, isDone: false, title: 'test7'},
    // {id: 9, isDone: false, title: 'test8'},
    // {id: 10, isDone: true, title: 'test9'},
    // {id: 11, isDone: true, title: 'test10'},
    // {id: 12, isDone: true, title: 'test11'},
    // {id: 13, isDone: false, title: 'test12'},
    // {id: 14, isDone: true, title: 'test13'},
    // {id: 15, isDone: true, title: 'test14'},
    // {id: 16, isDone: true, title: 'tes11111t'},
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