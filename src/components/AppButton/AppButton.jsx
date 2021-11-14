import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styled from "styled-components/native";


const StyleAppButton = styled.TouchableOpacity`
    flex: 1;
    
`

const AppButton = ({children}) => {

    return (
        <StyleAppButton>
            <Text>
                {children}
            </Text>
        </StyleAppButton>
    );
};


export default AppButton;
