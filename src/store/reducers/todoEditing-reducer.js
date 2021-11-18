const initialState = {
    isEditMode: false,
    editTodoId: null
}


export const todoEditingReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'CHANGE-EDIT-MODE': {
            return {...action.payload}
        }

        default:
            return {...state};
    }
}

export const changeEditMode = (isEditMode, id) =>
    ({type: 'REMOVE-TODO', payload: {isEditMode, id}})
