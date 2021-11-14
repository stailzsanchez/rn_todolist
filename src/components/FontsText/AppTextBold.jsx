import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import styled from "styled-components/native";


const StyleAppTextBold = styled.Text`
    font-family: 'roboto-bold';
    
`

const AppTextBold = (props) => {

    return (
        <Text style={[styles.default, {...props.style}]}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }

})


export default AppTextBold;
