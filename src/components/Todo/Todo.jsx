import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import styled from "styled-components/native";
import {useDispatch} from "react-redux";

import {changeTodoStatusAC, removeTodoAC} from "../../store/reducers/todo-reducer";
import {MAIN_COLOR} from '../../../themes/colors'


const WIDTH_TODO_TITLE = 0.75;

const TodoWrap = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
`

const StyleCheckbox = styled(Checkbox)`
  width: 25px;
  height: 25px;
  border: 1px solid red;
`

const StyleTodo = styled.View`
   flex-direction: column;
   margin:8px 5px 5px 5px;
`

const WrapTitle = styled.View`
   padding-top: 10px;
   min-height: 35px;
   border: 2px solid ${MAIN_COLOR};
   border-radius: 5px;
   justify-content:center;
`

const StyleTitle = styled.Text`
   padding-left: 5px;
   padding-right: 5px;
   width: ${Dimensions.get('window').width * WIDTH_TODO_TITLE}px;
   text-decoration: ${props => (props.isDoneStyle ? 'line-through' : 'none')};
   opacity: ${props => (props.isDoneStyle ? '0.2' : '1')};
   margin-left: 5px;
   font-family: 'roboto-bold;
`

const StyleDate = styled.Text`
  align-items: center;
    font-size: 10px ;
  position: absolute;
  padding-left: 2px;
  padding-right: 2px;
  right: 14px;
  top: -10px;
  border: 2px solid ${MAIN_COLOR};
  border-radius: 5px;
  text-align: center;
  align-self: center;
  background-color: #fff;
  font-family: 'roboto-bold;
`


export const Todo = React.memo(function (props) {

    const {id, title, isDone, addedDate} = props
    const dispatch = useDispatch()


    const onTodoStatusChange = () => dispatch(changeTodoStatusAC(id))

    const onRemovePress = () => dispatch(removeTodoAC(id))


    return (
        <TodoWrap>
            <StyleCheckbox
                value={isDone}
                isDoneStyle={isDone}
                onValueChange={onTodoStatusChange}
            />
            <StyleTodo>
                <WrapTitle isDoneStyle={isDone}>
                    <StyleTitle isDoneStyle={isDone}>{title}</StyleTitle>
                    <StyleDate isDoneStyle={isDone}>
                        {addedDate.toLocaleDateString() + ', ' + addedDate.toLocaleTimeString()}
                    </StyleDate>
                </WrapTitle>
            </StyleTodo>

            <TouchableOpacity onPress={onRemovePress}>
                <Entypo name={'circle-with-cross'} size={40} color={"#e0102a"}/>
            </TouchableOpacity>
        </TodoWrap>
    );
})


