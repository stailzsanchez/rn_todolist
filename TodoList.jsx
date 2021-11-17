import {StatusBar} from 'expo-status-bar';
import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, Alert} from 'react-native';
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


const StyledScrollView = styled.ScrollView`

`

const StyledText = styled.Text`
  color: palevioletred;
  flex: 1
`

const StyledTodos = styled.View`
  flex: 1;

`

const StyleAddTodo = styled.TouchableOpacity`
   
`

const StyleWrapApp = styled.SafeAreaView`
  flex: 1;
`

const NoTodoText = styled.Text`
  margin: 20px auto;
`
const TodoSplitSpace = styled.Text`
  margin: 20px 0;
  padding: 0;
  height: 10px;
  background-color: #3949ab;
`

export default function TodoList() {

    const dispatch = useDispatch()
    let todoList = useSelector(state => state.todos)

    const todosActive = [...todoList.filter(todo => !todo.isDone)]
    const todosCompleted = [...todoList.filter(todo => todo.isDone)]

    const isUniqueTodo = (title) => todoList.some(todo => todo.title === title)

    return (
        <StyleWrapApp>
            <Navbar title='Todo App'/>

            <StyledTodos>
                {/*<StyledFlatList*/}
                {/*    data={todoList}*/}
                {/*    renderItem={({item}) =>*/}
                {/*        <Todo key={item.id} {...item}*/}
                {/*        />}*/}
                {/*    keyExtractor={item => item.id.toString()}*/}
                {/*/>*/}
                <StyledScrollView>
                    {todosActive.map(todo => <Todo key={todo.id} {...todo}/>)}
                    {todosActive.length === 0 && <NoTodoText> No active todos </NoTodoText>}
                    <TodoSplitSpace/>
                    {todosCompleted.map(todo => <Todo key={todo.id} {...todo}/>)}
                    {todosCompleted.length === 0 && <NoTodoText> No completed todos </NoTodoText>}
                </StyledScrollView>
            </StyledTodos>

            <AddTodo
                isUniqueTodo={isUniqueTodo}
            />
        </StyleWrapApp>
    );
}

