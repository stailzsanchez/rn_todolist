import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Button, Dimensions} from 'react-native';
import {Entypo, MaterialIcons} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import styled from "styled-components/native";
import {useDispatch} from "react-redux";
import {changeTodoStatusAC, changeTodoTitleAC, removeTodoAC} from "../../store/reducers/todo-reducer";


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

const StyleTodo = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: center;
    border: 1px solid #007AFF;
    border-radius: 5px;
    width: ${Dimensions.get('window').width * WIDTH_TODO}px;
    margin-right: 5px;
    text-decoration: ${props => (props.isDoneStyle ? 'line-through' : 'none')};
    opacity: ${props => (props.isDoneStyle ? '0.2' : '1')};
`

const StyleTitle = styled.Text`
  line-height: 40px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: 'roboto-bold;

`

export const Todo = React.memo(function (props) {

    const {id, title, isDone, date, time} = props
    const dispatch = useDispatch()

    const styleStatusTodo = isDone
        ? {textDecoration: 'line-through', opacity: 0.2}
        : {textDecoration: 'none', opacity: 1}

    const onTodoStatusChange = () => {
        dispatch(changeTodoStatusAC(id))
    }

    //const OnTodoTitleChange = (title) => dispatch(changeTodoTitleAC(id, title))

    const onRemovePress = () => dispatch(removeTodoAC(id))


    return (
        <TodoWrap>
            <StyleCheckbox
                value={isDone}
                onValueChange={onTodoStatusChange}
                color={'#007AFF'}
            />
            <TouchableOpacity>
                <StyleTodo
                    isDoneStyle={isDone}
                    style={styleStatusTodo}
                    activeOpacity={0.1}
                >
                    <StyleTitle>{title + ' ' + date + ' ' + time}</StyleTitle>
                </StyleTodo>
            </TouchableOpacity>


            <TouchableOpacity onPress={onRemovePress}>
                <Entypo name={'circle-with-cross'} size={40} color={"#007AFF"}/>
            </TouchableOpacity>
        </TodoWrap>
    );
})


