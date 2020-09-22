import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabNavigator } from '../../components';
import { Welcome, Splash } from '..';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import PartialTopup from './PartialTopup';
import PartialTransaction from './PartialTransaction';

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
                <View style={{ paddingTop: 55, height: 100, alignContent:'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:15}}>
                        <View>
                            <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600]}}>Riwayat</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600]}}>X</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{height:3,backgroundColor:'white'}} />
                <Tab.Navigator tabBar={props => <TabNavigator {...props} />}>
                    <Tab.Screen name="Transaksi" component={PartialTransaction} />
                    <Tab.Screen name="Topup Saldo" component={PartialTopup} />
                </Tab.Navigator>
            </View>
            
            
        </>
    );
}

const styles = StyleSheet.create({})
export default History;
