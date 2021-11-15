import React, {useState} from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Provider from "react-redux/lib/components/Provider";
import {store} from "./src/store";
import TodoList from "./TodoList";


const loadApplication = async () => {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return <AppLoading
            startAsync={loadApplication}
            onError={err => console.log(err)}
            onFinish={() => setIsReady(true)}
        />
    }

    return (
        <Provider store={store}>
            <TodoList/>
        </Provider>
    )
}
