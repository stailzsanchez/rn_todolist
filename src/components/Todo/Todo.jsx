import React from 'react';
import {Text, View, TouchableOpacity, Button, Dimensions} from 'react-native';
import {Entypo, MaterialIcons} from '@expo/vector-icons';

import styled from "styled-components/native";


const TodoWrap = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin-bottom: 10px;

`

const StyleTodo = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    align-self: center;
    border: 1px solid black;
    border-radius: 5px;
  width: ${Dimensions.get('window').width * 0.8}px;
    
    margin-right: 5px;
`

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
    const {todo, removeTodo} = props

    // const onRemoveTodoPress = () => {
    //     removeTodo(id)
    // }

    return (
        <TodoWrap>
            <StyleTodo
                activeOpacity={0.1}
                onPress={() => console.log('Press' + todo.id)}
                onLongPress={() => alert('Press' + todo.id)}
            >
                <StyleTitle>{todo.title}</StyleTitle>
            </StyleTodo>

            <TouchableOpacity onPress={() => removeTodo(todo.id)}>
                <Entypo name={'circle-with-cross'} size={40} color={"#007AFF"}/>
            </TouchableOpacity>
        </TodoWrap>

    );
};


