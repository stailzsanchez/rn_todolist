import {StatusBar} from 'expo-status-bar';
import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView, Alert} from 'react-native';
import styled from 'styled-components/native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import uuid from 'react-native-uuid';

import {Navbar} from "./src/components/Navbar/Navbar";
import {AddTodo} from "./src/components/AddTodo/AddTodo";
import {Todo} from "./src/components/Todo/Todo";
import useStable from "react-native-web/dist/modules/useStable";
import {AntDesign} from "@expo/vector-icons";
import {Provider, useDispatch, useSelector} from "react-redux";
import {addTodoAC, changeTodoTitleAC} from "./src/store/reducers/todo-reducer";
import {createStore} from "redux";
import {store} from "./src/store";


const StyledFlatList = styled.FlatList`
  padding: 10px;
  color: palevioletred;
`

const StyledText = styled.Text`
  color: palevioletred;
  flex: 1
`

const StyledTodos = styled.View`
  flex: 1;
  margin-bottom: 5px;
`

const StyleAddTodo = styled.TouchableOpacity`
   
`

const StyleWrapApp = styled.SafeAreaView`
  height: 100%;
`

const NoTodoText = styled.Text`
  margin: 20px auto;
`


export default function TodoList() {

    const dispatch = useDispatch()
    let todoList = useSelector(state => state.todos)

    //first render sort todos Active/Completed
    useEffect(() => {
        return () => {
            todoList = [
                ...todoList.filter(todo => !todo.isDone),
                ...todoList.filter(todo => todo.isDone)
            ]
        };
    }, []);


    const isUniqueTodo = (title) => todoList.some(todo => todo.title === title)

    return (
        <StyleWrapApp>
            <Navbar title='Todo App'/>
            {todoList.length === 0 && <NoTodoText>No todos</NoTodoText>}
            <StyledTodos>
                <StyledFlatList
                    data={todoList}
                    renderItem={({item}) =>
                        <Todo key={item.id} {...item}
                        />}
                    keyExtractor={item => item.id.toString()}
                />
            </StyledTodos>

            <AddTodo
                isUniqueTodo={isUniqueTodo}
            />
        </StyleWrapApp>
    );
}

