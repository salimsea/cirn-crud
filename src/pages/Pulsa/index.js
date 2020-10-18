import React, {useEffect} from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, BackHandler,Dimensions } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import { IconBackYellow, IconHome, IconHomeActive, IconMessagesActive, IconMore, IconRefresh, IconScan, IconUserActive, ILNullPhoto } from '../../assets';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Gap, Input } from '../../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabNavigator } from '../../components';
import { PulsaBiaya, HistoryTransaction } from '../Partial';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { IconFPulsa, IconMoreActive } from "../../assets";
import { setForm } from '../../redux'
import { useSelector, useDispatch } from 'react-redux'
import Tips from 'react-native-root-tips';

const Tab = createMaterialTopTabNavigator();


const Pulsa = ({ navigation }) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);
    const handleBackButtonClick = () => {
        navigation.goBack();
        return true;
    }
    
    const {
        form,
        isNumber
    } = useSelector((state) => state.PulsaReducer);
    const dispatch = useDispatch();
    const onInputChange = (value, inputType) => {
        dispatch(setForm(inputType, value))
            
        if (/^\d+$/.test(value.toString())) { 
            dispatch(setForm('nomor', value))
        } else {
            dispatch(setForm('nomor', 0))
            Tips.show('harus numerik', {
                duration: 2000,
                position: Tips.positions.BOTTOM,
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0
            });
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.white}}>
            <View style={{ paddingTop: getStatusBarHeight()+15, height: getStatusBarHeight()+130, alignContent:'center',borderBottomLeftRadius:50, borderBottomRightRadius:50,backgroundColor:colors.primary }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:15}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row'}}>
                        <IconBackYellow />
                        <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600],paddingLeft:10}}> Pulsa Prabayar</Text>
                    </TouchableOpacity>
                    <View>
                        <IconMore />
                    </View>
                </View>
            </View>
            <View style={styles.effect}>
                <View style={{ width: '100%', height: 80, backgroundColor: colors.white, borderRadius: 5, padding:10, justifyContent:'center' }}>
                    <Input 
                        keyboardType='numeric'
                        placeholder="Masukan Nomor Handphone"
                        value={form.nomor}
                        onChangeText={(value) => onInputChange(value, 'nomor')}
                        maxLength={13}
                    />
                </View>
                
            </View>

            <View style={{ flex: 1, borderTopLeftRadius: 0, borderTopRightRadius: 0, backgroundColor: colors.white,  alignContent: 'center' }}>
                <Tab.Navigator tabBar={props => <TabNavigator {...props} />}>
                    <Tab.Screen name="Pulsa" component={PulsaBiaya} />
                    <Tab.Screen name="Riwayat" component={HistoryTransaction}/>
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
