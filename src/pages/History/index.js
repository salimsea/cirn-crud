import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabNavigator } from '../../components';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import { IconMore, IconRefresh } from '../../assets';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { HistoryTopup, HistoryTransaction } from '../Partial';

const Tab = createMaterialTopTabNavigator();
const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
const History = () => {
    return (
        <>
            <MyStatusBar backgroundColor={colors.black} barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: colors.primary }}>
                <View style={{ paddingTop: getStatusBarHeight()+15, height: getStatusBarHeight()+60, alignContent:'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:15}}>
                        <View>
                            <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600]}}>History</Text>
                        </View>
                        <View>
                            <IconRefresh />
                        </View>
                    </View>
                </View>
                
                <View style={{height:3,backgroundColor:'white'}} />
                <Tab.Navigator tabBar={props => <TabNavigator {...props} />}>
                    <Tab.Screen name="Transaksi" component={HistoryTopup} />
                    <Tab.Screen name="Topup Saldo" component={HistoryTransaction} />
                </Tab.Navigator>
            </View>
            
            
        </>
    );
}

const styles = StyleSheet.create({})
export default History;
