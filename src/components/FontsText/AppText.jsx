import React from 'react';
import {Text, View} from 'react-native';

import styled from "styled-components/native";


const StyleAppText = styled.Text`
    font-family: 'roboto-regular';
    
`

const AppText = (props) => {

    return (
        <Text style={{...styles.default, ...props.style}}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }

})


export default AppText;
