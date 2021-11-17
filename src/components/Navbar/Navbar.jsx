import React from 'react'
import styled from "styled-components/native";
import {MAIN_COLOR} from '../../../themes/colors'

const StyleNavbar = styled.View`
  height: 70px;
  align-items: center;
  justify-content:flex-end;
  background-color: ${MAIN_COLOR};
  padding-bottom: 10px;
  margin-bottom: 10px;

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


