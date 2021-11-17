import uuid from 'react-native-uuid';
import {MainApi} from "../../../api/mainApi";


const initialState = [
    {id: uuid.v4(), isDone: false, title: 'Do the cleaning', addedDate: new Date()},
    {id: uuid.v4(), isDone: true, title: 'Walk the dog', addedDate: new Date()},
    {id: uuid.v4(), isDone: true, title: 'Buy products', addedDate: new Date()},
    {id: uuid.v4(), isDone: false, title: 'Write to a friend', addedDate: new Date()},
    {id: uuid.v4(), isDone: true, title: 'Drink vitamins', addedDate: new Date()},
    {id: uuid.v4(), isDone: false, title: 'Pick up mail', addedDate: new Date()},
    {id: uuid.v4(), isDone: true, title: 'Do the cleaning', addedDate: new Date()},
    {id: uuid.v4(), isDone: false, title: 'Read a book', addedDate: new Date()},
]


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD-TODO': {
            return [{
                id: action.id,
                title: action.title,
                status: false,
                addedDate: action.date,
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
            state[action.id] = {...todo}
            return [...state]
        }
        case 'CHANGE-TODO-STATUS': {
            const todo = state.find(todo => todo.id === action.id);
            if (todo) {
                todo.isDone = !todo.isDone;
            }
            state[action.id] = {...todo}

            return [...state]
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
    const dateApi = await MainApi.getDateApi()
    dispatch(addTodoAC(title, new Date(dateApi)))
}