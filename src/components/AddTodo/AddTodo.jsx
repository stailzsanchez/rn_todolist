import React, {useState} from 'react';
import {Alert, Dimensions, Keyboard, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {MAIN_COLOR} from '../../../themes/colors'


import styled from "styled-components/native";
import {useDispatch} from "react-redux";
import {addTodoWithApiDate} from "../../store/reducers/todo-reducer";


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


export const AddTodo = (props) => {

    const dispatch = useDispatch()

    const {isUniqueTodo} = props
    let [title, setTitle] = useState('')

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
            />
            <TouchableOpacity onPress={onAddItemClick}>
                <MaterialIcons name={'add-box'} size={41} style={{color: MAIN_COLOR}}/>
            </TouchableOpacity>
        </WrapAddTodo>
    );
};

