import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Button, Dimensions} from 'react-native';
import {Entypo, MaterialIcons} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import styled from "styled-components/native";
import {useDispatch} from "react-redux";
import {changeTodoStatusAC, changeTodoTitleAC, removeTodoAC} from "../../store/reducers/todo-reducer";
import useStable from "react-native-web/dist/modules/useStable";


const WIDTH_TODO = 0.70;

const TodoWrap = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin-bottom: 10px;

`

const StyleCheckbox = styled(Checkbox)`
  margin-right: 5px;
  width: 35px;
  height: 35px;
  background-color: #007AFF;
`

const StyleTodo = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    align-self: center;
    border: 1px solid #007AFF;
    border-radius: 5px;
    width: ${Dimensions.get('window').width * WIDTH_TODO}px;
    margin-right: 5px;

`
// text-decoration: ${props => props.isDoneStyle ? 'line-through' : 'none'};
// opacity: ${props => props.isDoneStyle ? '0.2' : '1'};

const StyleButton = styled.Button`
  background-color: red;
  color: red;
  border-radius: 10px;
`

const StyleTitle = styled.Text`
  line-height: 40px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: 'roboto-bold;

`

export const Todo = (props) => {

    const {
        todo: {id, title, isDone},
        setEditMode, setEditTodoId, refToInput
    } = props
    const dispatch = useDispatch()


    const styleStatusTodo = isDone
        ? {textDecoration: 'line-through', opacity: 0.2}
        : {textDecoration: 'none', opacity: 1}

    const onTodoStatusChange = () => {
        dispatch(changeTodoStatusAC(id))
    }

    //const OnTodoTitleChange = (title) => dispatch(changeTodoTitleAC(id, title))

    const onRemovePress = () => dispatch(removeTodoAC(id))

    const onLongPressHandler = () => {
        setEditMode(true)
        setEditTodoId(id)
        refToInput.ref
    }

    return (
        <TodoWrap>
            <StyleCheckbox
                value={isDone}
                onValueChange={onTodoStatusChange}
                color={'#007AFF'}
            />
            <StyleTodo
                // isDoneStyle={isDone}
                style={styleStatusTodo}
                activeOpacity={0.1}
                onDoublePress={onLongPressHandler}
                onPress={() => console.log('Press' + id)}
                onLongPress={onLongPressHandler}
            >
                <StyleTitle>{title}</StyleTitle>
            </StyleTodo>

            <TouchableOpacity onPress={onRemovePress}>
                <Entypo name={'circle-with-cross'} size={40} color={"#007AFF"}/>
            </TouchableOpacity>
        </TodoWrap>

    );
};


