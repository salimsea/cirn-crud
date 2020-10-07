import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Splash,
    Welcome,
    Home,
    History,
    Message,
    Inbox,
    User,
    Login,
    Pulsa,
    PLN,
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Inbox" component={Inbox} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Pulsa"
                component={Pulsa}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="PLN"
                component={PLN}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router;