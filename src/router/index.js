import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, History, Message, Inbox, User } from '../pages';
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
                name="Home"
                component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router;