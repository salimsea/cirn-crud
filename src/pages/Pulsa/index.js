import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView,Dimensions } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import { IconBackYellow, IconHome, IconHomeActive, IconMessagesActive, IconMore, IconRefresh, IconScan, IconUserActive, ILNullPhoto } from '../../assets';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Gap, Input } from '../../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabNavigator } from '../../components';
import { PulsaBiaya, HistoryTransaction } from '../Partial';

const Tab = createMaterialTopTabNavigator();
const Pulsa = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white}}>
            <View style={{ paddingTop: getStatusBarHeight()+15, height: getStatusBarHeight()+130, alignContent:'center',borderBottomLeftRadius:50, borderBottomRightRadius:50,backgroundColor:colors.primary }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:15}}>
                    <View style={{flexDirection:'row'}}>
                        <IconBackYellow />
                        <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600],paddingLeft:10}}> Pulsa Prabayar</Text>
                    </View>
                    <View>
                        <IconMore />
                    </View>
                </View>
            </View>
            <View style={styles.effect}>
                <View style={{ width: '100%', height: 80, backgroundColor: colors.white, borderRadius: 5, padding:10, justifyContent:'center' }}>
                <Input 
                    placeholder="Masukan Nomor Handphone"
                />
                </View>
            </View>

            <View style={{ flex: 1, borderTopLeftRadius: 0, borderTopRightRadius: 0, backgroundColor: colors.white,  alignContent: 'center' }}>
                <Tab.Navigator tabBar={props => <TabNavigator {...props} />}>
                    <Tab.Screen name="Pulsa" component={PulsaBiaya} />
                    <Tab.Screen name="Riwayat" component={HistoryTransaction} />
                </Tab.Navigator>
            </View>
            </View>
    )
}

export default Pulsa

const styles = StyleSheet.create({
    effect: {
        margin: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,

        elevation: 4,
        borderRadius: 10,
        marginTop: -70,
        // borderColor: 'red',
        // borderWidth:2
    }
})
