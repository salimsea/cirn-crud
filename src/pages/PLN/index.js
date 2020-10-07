import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView,Dimensions } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import { IconHome, IconHomeActive, IconMessagesActive, IconMore, IconRefresh, IconScan, IconUserActive, ILNullPhoto } from '../../assets';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Gap } from '../../components';

const PLN = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <View style={{ paddingTop: getStatusBarHeight()+15, height: getStatusBarHeight()+60, alignContent:'center' }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:15}}>
                    <View>
                        <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600]}}>Isi PLN</Text>
                    </View>
                    <View>
                        <IconMore />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PLN

const styles = StyleSheet.create({})
