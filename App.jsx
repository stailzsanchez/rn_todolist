import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native'
import {Navbar} from "./src/components/Navbar/Navbar";
import {AddTodo} from "./src/components/AddTodo/AddTodo";


const StyledContainer = styled.View`
  padding: 10px;
`

const StyledText = styled.Text`
  color: palevioletred;
`

export default function App() {
    return (
        <View>
            <Navbar title='Todo App'/>
            <StyledContainer>

                <AddTodo/>
            </StyledContainer>
        </View>

    );
}
