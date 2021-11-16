import React from 'react'
import {View, StyleSheet, Text} from "react-native";
import styled from "styled-components/native";
import AppTextBold from "../FontsText/AppTextBold";


const StyleNavbar = styled.View`
  height: 70px;
  align-items: center;
  justify-content:flex-end;
  background-color: #3949ab;
  padding-bottom: 10px;

  z-index: 4;
`

const StyleText = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 700;
`
export const Navbar = (props) => {
    const {title} = props

    return (
        <StyleNavbar>
            <StyleText>{title}</StyleText>
        </StyleNavbar>
    )
}


