import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

import styled from "styled-components/native";


const WrapAddTodo = styled.View`
  flex-direction: row;
  justify-content: center;
`

const StyleButton = styled.Button`

`

const StyleTextInput = styled.TextInput`
  border: 2px solid #2196F3;
  border-radius: 15px;
  min-width: 300px ;
  margin-right: 5px;
  padding-left: 8px;
`

export const AddTodo = () => {

    return (
        <WrapAddTodo>
            <StyleTextInput/>
            <StyleButton title='ADD'/>
        </WrapAddTodo>
    );
};


