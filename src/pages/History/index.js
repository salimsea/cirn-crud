import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';
import { TabNavigator } from '../../components';
import { Welcome, Splash } from '..';
import { colors } from '../../utils/colors';

const Tab = createMaterialTopTabNavigator();
const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
export default function History() {
    return (
        <>
            <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
            <Tab.Navigator tabBar={props => <TabNavigator {...props} />}>
                <Tab.Screen name="Welcome" component={Welcome} />
                <Tab.Screen name="Splash" component={Splash} />
            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({})
