import React, {useRef} from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native'
import {MAIN_COLOR} from './themes/colors'
import {Navbar} from "./src/components/Navbar/Navbar";
import {AddTodo} from "./src/components/AddTodo/AddTodo";
import {Todo} from "./src/components/Todo/Todo";
import {useSelector} from "react-redux";


export default function TodoList() {

    let todoList = useSelector(state => state.todos)

    const editTodoRef = useRef(null);

    const todosActive = [...todoList.filter(todo => !todo.isDone)]
    const todosCompleted = [...todoList.filter(todo => todo.isDone)]


    const isUniqueTodo = (title) => todoList.some(todo => todo.title === title)

    return (
        <StyleWrapApp>
            <Navbar title='Todo App'/>

            <StyledTodos>
                <ScrollView>
                    {todosActive.map(todo =>
                        <Todo key={todo.id} {...todo} ref={editTodoRef}/>)}
                    {todosActive.length === 0 && <NoTodoText> No active todos </NoTodoText>}
                    <TodoSplitSpace/>
                    {todosCompleted.map(todo =>
                        <Todo key={todo.id} {...todo} ref={editTodoRef}/>)}
                    {todosCompleted.length === 0 && <NoTodoText> No completed todos </NoTodoText>}
                </ScrollView>
            </StyledTodos>

            <AddTodo isUniqueTodo={isUniqueTodo} ref={editTodoRef}/>
        </StyleWrapApp>
    );
}

const StyledTodos = styled.View`
  flex: 1;
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
  background-color: ${MAIN_COLOR};
`
