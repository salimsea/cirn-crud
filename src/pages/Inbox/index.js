import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar, StyleSheet, ScrollView,Dimensions } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import { IconFPaketData, IconHome, IconMore, IconMoreActive, IconRefresh } from '../../assets';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Gap } from '../../components';
const Inbox = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <View style={{ paddingTop: getStatusBarHeight()+15, height: getStatusBarHeight()+60, alignContent:'center' }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:15}}>
                    <View>
                        <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600]}}>Inbox</Text>
                    </View>
                    <View>
                        <IconRefresh />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView>
                    <View style={{backgroundColor:'#ececec'}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginHorizontal:25,marginVertical:15 }}>
                            <View style={{width: '10%', alignItems: 'center', }}>  
                                <View style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#E6F3FF',borderColor:'#E6F3FF', borderRadius: 100, justifyContent: 'center' , alignItems: 'center'}}>
                                    <IconFPaketData />
                                </View>
                            </View>
                            <View style={{ width: '65%', justifyContent: 'center' }}>
                                <Text style={{fontFamily:fonts.primary[700], fontSize:17}}>ABUPAY EMANG PAY PAY</Text>
                                <Gap height={1} />
                                <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>Gunakan terus ABUPAY untuk dapetin uang jajan sehari-hari, tunggu apalagi? gass keun mamang </Text>
                                <Gap height={5} />
                                <Text style={{fontFamily:fonts.primary[300], fontSize:12}}>Rabu, 29 September 2020</Text>
                            </View>
                            <View style={{width: '10%', alignItems: 'flex-end'}}>  
                                <IconMoreActive />
                            </View>
                        </View>
                        <View style={{height:0.5,backgroundColor:colors.dark2}} />
                    </View>
                    <View style={{backgroundColor:'#ececec'}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginHorizontal:25,marginVertical:15 }}>
                            <View style={{width: '10%', alignItems: 'center', }}>  
                                <View style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#E6F3FF',borderColor:'#E6F3FF', borderRadius: 100, justifyContent: 'center' , alignItems: 'center'}}>
                                    <IconFPaketData />
                                </View>
                            </View>
                            <View style={{ width: '65%', justifyContent: 'center' }}>
                                <Text style={{fontFamily:fonts.primary[700], fontSize:17}}>ABUPAY EMANG PAY PAY</Text>
                                <Gap height={1} />
                                <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>Gunakan terus ABUPAY untuk dapetin uang jajan sehari-hari, tunggu apalagi? gass keun mamang </Text>
                                <Gap height={5} />
                                <Text style={{fontFamily:fonts.primary[300], fontSize:12}}>Rabu, 29 September 2020</Text>
                            </View>
                            <View style={{width: '10%', alignItems: 'flex-end'}}>  
                                <IconMoreActive />
                            </View>
                        </View>
                        <View style={{height:0.5,backgroundColor:colors.dark2}} />
                    </View>
                    <View style={{backgroundColor:'#ececec'}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginHorizontal:25,marginVertical:15 }}>
                            <View style={{width: '10%', alignItems: 'center', }}>  
                                <View style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#E6F3FF',borderColor:'#E6F3FF', borderRadius: 100, justifyContent: 'center' , alignItems: 'center'}}>
                                    <IconFPaketData />
                                </View>
                            </View>
                            <View style={{ width: '65%', justifyContent: 'center' }}>
                                <Text style={{fontFamily:fonts.primary[700], fontSize:17}}>ABUPAY EMANG PAY PAY</Text>
                                <Gap height={1} />
                                <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>Gunakan terus ABUPAY untuk dapetin uang jajan sehari-hari, tunggu apalagi? gass keun mamang </Text>
                                <Gap height={5} />
                                <Text style={{fontFamily:fonts.primary[300], fontSize:12}}>Rabu, 29 September 2020</Text>
                            </View>
                            <View style={{width: '10%', alignItems: 'flex-end'}}>  
                                <IconMoreActive />
                            </View>
                        </View>
                        <View style={{height:0.5,backgroundColor:colors.dark2}} />
                    </View>
                    <View style={{backgroundColor:'#ececec'}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginHorizontal:25,marginVertical:15 }}>
                            <View style={{width: '10%', alignItems: 'center', }}>  
                                <View style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#E6F3FF',borderColor:'#E6F3FF', borderRadius: 100, justifyContent: 'center' , alignItems: 'center'}}>
                                    <IconFPaketData />
                                </View>
                            </View>
                            <View style={{ width: '65%', justifyContent: 'center' }}>
                                <Text style={{fontFamily:fonts.primary[700], fontSize:17}}>ABUPAY EMANG PAY PAY</Text>
                                <Gap height={1} />
                                <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>Gunakan terus ABUPAY untuk dapetin uang jajan sehari-hari, tunggu apalagi? gass keun mamang </Text>
                                <Gap height={5} />
                                <Text style={{fontFamily:fonts.primary[300], fontSize:12}}>Rabu, 29 September 2020</Text>
                            </View>
                            <View style={{width: '10%', alignItems: 'flex-end'}}>  
                                <IconMoreActive />
                            </View>
                        </View>
                        <View style={{height:0.5,backgroundColor:colors.dark2}} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Inbox

const styles = StyleSheet.create({
    content: {
        backgroundColor : colors.white,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        flex: 1,
        // marginTop: 5,
        // paddingTop: 10,
    },
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.dark2,
        alignItems: 'center',
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46/2,
        marginRight: 12,
        backgroundColor: colors.primary
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.black,
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
    }
})
