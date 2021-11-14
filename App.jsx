import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import styled from 'styled-components/native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import {Navbar} from "./src/components/Navbar/Navbar";
import {AddTodo} from "./src/components/AddTodo/AddTodo";
import {Todo} from "./src/components/Todo/Todo";
import useStable from "react-native-web/dist/modules/useStable";
import {AntDesign} from "@expo/vector-icons";


const loadApplication = async () => {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

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


export default function App() {
    const [isReady, setIsReady] = useState(false);
    const [todos, setTodos] = useState([
        {id: 1, title: 'test13'},
        {id: 2, title: 'test'},
        {id: 3, title: 'test'},
        {id: 4, title: 'test'},
        {id: 5, title: 'test'},
        {id: 6, title: 'test'},
        {id: 7, title: 'test'},
        {id: 8, title: 'test'},
        {id: 9, title: 'test'},
        {id: 10, title: 'test'},
        {id: 11, title: 'test'},
        {id: 12, title: 'test'},
        {id: 13, title: 'test'},
        {id: 14, title: 'test'},
        {id: 15, title: 'test'},
        {id: 16, title: 'tes11111t'},
    ]);

    if (!isReady) {
        return <AppLoading
            startAsync={loadApplication}
            onError={err => console.log(err)}
            onFinish={() => setIsReady(true)}
        />
    }

    const addTodo = (title) => {
        setTodos((prev) => [{
            id: Date.now().toString(),
            title
        }, ...prev])
        // console.dir(todos)
    }

    // const renderItem = ({item}) => <Todo title={item.title}/>

    const isUniqueTodo = (title) =>
        todos.some(todo => todo.title === title)

    const removeTodo = id => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <StyleWrapApp>
            <Navbar title='Todo App'/>

            <StyledTodos>
                <StyledFlatList
                    data={todos}
                    renderItem={({item}) => <Todo key={item.id} todo={item} removeTodo={removeTodo}/>}
                    keyExtractor={item => item.id.toString()}
                />
            </StyledTodos>

            <AddTodo addItem={addTodo} isUniqueTodo={isUniqueTodo}/>
            {/*<StyleAddTodo onPress={() => addTodo("add")}>*/}
            {/*    <AntDesign.View*/}

            {/*        name={"pluscircleo"}*/}
            {/*    />*/}
            {/*</StyleAddTodo>*/}


        </StyleWrapApp>

    );
}
