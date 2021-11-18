import React, {useState} from 'react';
import {Alert, Dimensions, Keyboard, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {MAIN_COLOR} from '../../../themes/colors'


import styled from "styled-components/native";
import {useDispatch, useSelector} from "react-redux";
import {addTodoWithApiDate} from "../../store/reducers/todo-reducer";


export const AddTodo = React.forwardRef((props, ref) => {
        const {isUniqueTodo} = props
        let [title, setTitle] = useState(ref.value === null ? title : ref.value)

        const dispatch = useDispatch()
        //const {isTodoEdit, _id} = useSelector(state => state.todoEditing)

        const onAddItemClick = () => {
            if (isUniqueTodo(title)) {
                Alert.alert("Title already exists")
                return null
            }
            if (title.trim() === "") {
                Alert.alert("Title is required")
                return null
            }
            dispatch(addTodoWithApiDate(title))
            setTitle("");
            ref.value = null
            Keyboard.dismiss();
        }

        return (
            <WrapAddTodo>
                <StyleTextInput
                    onChangeText={setTitle}
                    onSubmitEditing={onAddItemClick}
                    value={title}
                    placeholder='Click to enter'
                    autoCorrect={false}
                    autoCapitalize='none'
                    ref={ref}
                />
                <TouchableOpacity onPress={onAddItemClick}>
                    <MaterialIcons name={'add-box'} size={41} style={{color: MAIN_COLOR}}/>
                </TouchableOpacity>
            </WrapAddTodo>
        );
    }
);

const WrapAddTodo = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
`


const StyleTextInput = styled.TextInput`
  border: 2px solid ${MAIN_COLOR};
  border-radius: 16px;
  width: ${Dimensions.get('window').width * 0.8}px;
  margin-right: 5px;
  padding-left: 8px;
  padding-right: 8px;
`
