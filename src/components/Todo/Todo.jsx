import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Button, Dimensions} from 'react-native';
import {Entypo, MaterialIcons} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import styled from "styled-components/native";
import {useDispatch} from "react-redux";
import {changeTodoStatusAC, changeTodoTitleAC, removeTodoAC} from "../../store/reducers/todo-reducer";


const WIDTH_TODO_TITLE = 0.71;

const TodoWrap = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin-bottom: 10px;
   

`

const StyleCheckbox = styled(Checkbox)`
  width: 35px;
  height: 35px;
  color: #107A1F;

`

const StyleTodo = styled.View`
   flex-direction: row;
   justify-content:center;
   align-items: center;
   margin:5px;

`

const StyleTitle = styled.Text`
   border: 1px solid #007AFF;
   border-radius: 5px;
   min-height: 40px;
   padding-left: 5px;
   padding-right: 5px;
   width: ${Dimensions.get('window').width * WIDTH_TODO_TITLE}px;
   text-decoration: ${props => (props.isDoneStyle ? 'line-through' : 'none')};
   opacity: ${props => (props.isDoneStyle ? '0.2' : '1')};
   margin-left: 5px;
   font-family: 'roboto-bold;
`

const StyleDate = styled.Text`
  font-size: 10px ;
  position: absolute;
  padding-left: 2px;
  padding-right: 2px;
  right: 14px;
  top: -7px;
  background-color: #fff;
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


    const onRemovePress = () => dispatch(removeTodoAC(id))


    return (
        <TodoWrap>

            <StyleCheckbox
                value={isDone}
                isDone={isDone}
                onValueChange={onTodoStatusChange}
            />
            <StyleTodo
                isDoneStyle={isDone}
                style={styleStatusTodo}
                activeOpacity={0.1}
            >

                <StyleTitle>{title}</StyleTitle>
                <StyleDate>{time + ', ' + date}</StyleDate>
            </StyleTodo>


            <TouchableOpacity onPress={onRemovePress}>
                <Entypo style={{color: "red"}} name={'circle-with-cross'} size={40} color={"#007AFF"}/>
            </TouchableOpacity>
        </TodoWrap>
    );
})


