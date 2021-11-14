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
// import {Chip} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {AntDesign} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';


import styled from "styled-components/native";


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

export const AddTodo = ({addItem, isUniqueTodo}) => {
    // const [value, setValue] = useState('')
    //
    // const onAddPress = () => {
    //     onSubmit(value)
    //     setValue
    // }

    let [title, setTitle] = useState("")
    let [error, setError] = useState("")


    const onAddItemClick = () => {
        if (isUniqueTodo(title)) {
            Alert.alert("Title already exists")
            return null
        }

        if (title.trim() !== "") {
            addItem(title);
            setTitle("");
            Keyboard.dismiss();
        } else {
            setError("Title is required");
            Alert.alert("Title is required")
        }

    }

    const onInputChange = () => {
        setError("")
    }

    const onInputKeyPress = (e) => {
        console.log(e.charCode)
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            onAddItemClick();
        }
    }

    return (
        <WrapAddTodo>


            <StyleTextInput

                onChangeText={setTitle}
                onKeyPress={onInputKeyPress}
                onSubmitEditing={onAddItemClick}
                value={title}
                placeholder='New todo'
                autoCorrect={false}
                autoCapitalize='none'
            />
            {/*<AntDesign.Button*/}
            {/*    style={styles.button}*/}
            {/*    onPress={onAddItemClick}*/}
            {/*    name={"pluscircleo"}*/}
            {/*/>*/}
            <TouchableOpacity onPress={onAddItemClick}>
                <MaterialIcons name={'add-box'} size={41} style={{color: "#007AFF",}}/>
            </TouchableOpacity>
            {/*<Chip*/}
            {/*    icon={{*/}
            {/*        name: "bluetooth",*/}
            {/*        type: "font-awesome",*/}
            {/*        size: 20,*/}
            {/*        color: 'white'*/}
            {/*    }}/>*/}

            {/*<StyleTextError>{error}</StyleTextError>*/}
        </WrapAddTodo>
    );
};


const styles = StyleSheet.create({
    button: {
        borderRadius: 20
    }
})