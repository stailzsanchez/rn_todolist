import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Keyboard,
    Dimensions,
    Pressable,
    TouchableOpacity
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';


import styled from "styled-components/native";
import {useDispatch} from "react-redux";
import {changeTodoTitleAC} from "../../store/reducers/todo-reducer";


const WrapAddTodo = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
`

const StyleButton = styled.Button`
  border-radius: 20px;
`

const StyleTextInput = styled.TextInput`
  border: 2px solid #2196F3;
  border-radius: 16px;
  width: ${Dimensions.get('window').width * 0.8}px;
  margin-right: 5px;
  padding-left: 8px;
  padding-right: 8px;
`


const StyleTextError = styled.Text`
    position: absolute;
    bottom: 0;
    left: 10px;
    color: red;
`

export const AddTodo = (props) => {
    const {addOrChangeTodo, isUniqueTodo, refToInput, editMode, id, title} = props
    let [tmpTitle, setTmpTitle] = useState(editMode ? title : '')

    const onAddItemClick = () => {
        if (isUniqueTodo(tmpTitle)) {
            Alert.alert("Title already exists")
            return null
        }
        if (tmpTitle.trim() === "") {
            Alert.alert("Title is required")
            return null
        }
        addOrChangeTodo(id, tmpTitle);
        setTmpTitle("");
        Keyboard.dismiss();
    }

    return (
        <WrapAddTodo>
            <StyleTextInput
                onChangeText={setTmpTitle}
                onSubmitEditing={onAddItemClick}
                value={tmpTitle}
                placeholder='New todo'
                autoCorrect={false}
                autoCapitalize='none'
                // ref={refToInput}
                ref={refToInput}
            />
            <TouchableOpacity onPress={onAddItemClick}>
                <MaterialIcons name={'add-box'} size={41} style={{color: "#007AFF",}}/>
            </TouchableOpacity>
        </WrapAddTodo>
    );
};

