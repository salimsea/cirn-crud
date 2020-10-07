import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView,Dimensions } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import { IconHome, IconHomeActive, IconMessagesActive, IconMore, IconRefresh, IconScan, IconUserActive, ILNullPhoto } from '../../assets';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Gap } from '../../components';
const User = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <View style={{ paddingTop: getStatusBarHeight()+15, height: getStatusBarHeight()+60, alignContent:'center' }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:15}}>
                    <View>
                        <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600]}}>User</Text>
                    </View>
                    <View>
                        <IconMore />
                    </View>
                </View>
            </View>
            <View style={{flex:1,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:'white', marginTop:0}}>
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.container}>
                            <View style={styles.avatar}>
                                <View style={{width: 40, height: 40, borderRadius: 100, backgroundColor: 'pink'}}>
                                    <Image source={ILNullPhoto} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 100}} />
                                </View> 
                            </View> 
                            <View>
                                <Text style={styles.name}>Salim Segaf Alqosam</Text>
                                <Text style={styles.desc}>0821-1223-5774</Text>
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center',marginHorizontal:20, marginVertical:10}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{marginRight:15}}>
                                <IconHomeActive /> 
                                </View>
                                <Text style={{fontFamily:fonts.primary[700], fontSize:15}}>ABU PREMIUM</Text>
                            </View>
                            <View>
                                <Text style={{fontFamily:fonts.primary[300], fontSize:13}}>Lihat Detail ></Text>
                            </View>
                        </View>
                        <Gap height={5} />
                        <View style={{ height: 6, backgroundColor: '#ececec' }} />
                        <Gap height={5} />
                        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
                                <View>
                                    <Text>oi</Text>
                                </View>
                                <View>
                                    <Text>oi</Text>
                                </View>
                            </View> */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0}}>
                                <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
                                    <View style={{width: '50%', alignItems: 'center'}}>  
                                        <View style={{width: '80%', height: 60, borderWidth: 1,borderColor:'#b9b9b9', borderRadius: 10, justifyContent: 'center' , alignItems: 'center'}}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{marginRight:15}}>
                                                <IconHomeActive /> 
                                                </View>
                                                <Text style={{fontFamily:fonts.primary[700], fontSize:15}}>Scan QR</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{width: '50%', alignItems: 'center'}}>  
                                        <View style={{width: '80%', height: 60, borderWidth: 1,borderColor:'#b9b9b9', borderRadius: 10, justifyContent: 'center' , alignItems: 'center'}}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{marginRight:15}}>
                                                <IconHomeActive /> 
                                                </View>
                                                <Text style={{fontFamily:fonts.primary[700], fontSize:15}}>QR Code</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Gap height={5} />
                        <View style={{ height: 6, backgroundColor: '#ececec' }} />
                        <Gap height={5} />
                        <View style={{marginHorizontal:20, marginVertical:10}}>
                            <Text style={{ fontFamily: fonts.primary[700], fontSize: 20 }}>Akun</Text>
                            <Gap height={15} />
                            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', borderBottomWidth: 0.6,borderBottomColor: colors.dark2, paddingBottom:20}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{marginRight:15}}>
                                    <IconHomeActive /> 
                                    </View>
                                    <Text style={{fontFamily:fonts.primary[700], fontSize:15}}>Ubah Profil</Text>
                                </View>
                                <View>
                                    <Text style={{fontFamily:fonts.primary[300], fontSize:13}}> ></Text>
                                </View>
                            </View>

                            <Gap height={15} />
                            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', borderBottomWidth: 0.6,borderBottomColor: colors.dark2, paddingBottom:20}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{marginRight:15}}>
                                    <IconMessagesActive /> 
                                    </View>
                                    <Text style={{fontFamily:fonts.primary[700], fontSize:15}}>Kode Promo</Text>
                                </View>
                                <View>
                                    <Text style={{fontFamily:fonts.primary[300], fontSize:13}}> ></Text>
                                </View>
                            </View>

                            <Gap height={15} />
                            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{marginRight:15}}>
                                    <IconUserActive /> 
                                    </View>
                                    <Text style={{fontFamily:fonts.primary[700], fontSize:15}}>Affilate</Text>
                                </View>
                                <View>
                                    <Text style={{fontFamily:fonts.primary[300], fontSize:13}}> ></Text>
                                </View>
                            </View>
                        </View>
                        <Gap height={5} />
                        <View style={{ height: 6, backgroundColor: '#ececec' }} />
                        <Gap height={5} />
                        <View style={{marginHorizontal:20, marginVertical:10}}>
                            <Text style={{ fontFamily: fonts.primary[700], fontSize: 20 }}>Tentang</Text>
                            <Gap height={15} />
                            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', borderBottomWidth: 0.6,borderBottomColor: colors.dark2, paddingBottom:20}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{marginRight:15}}>
                                    <IconUserActive /> 
                                    </View>
                                    <Text style={{fontFamily:fonts.primary[700], fontSize:15}}>Panduan ABUPAY</Text>
                                </View>
                                <View>
                                    <Text style={{fontFamily:fonts.primary[300], fontSize:13}}> ></Text>
                                </View>
                            </View>

                            <Gap height={15} />
                            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', borderBottomWidth: 0.6,borderBottomColor: colors.dark2, paddingBottom:20}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{marginRight:15}}>
                                    <IconUserActive /> 
                                    </View>
                                    <Text style={{fontFamily:fonts.primary[700], fontSize:15}}>Syarat dan Ketentuan</Text>
                                </View>
                                <View>
                                    <Text style={{fontFamily:fonts.primary[300], fontSize:13}}> ></Text>
                                </View>
                            </View>

                            <Gap height={15} />
                            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{marginRight:15}}>
                                    <IconUserActive /> 
                                    </View>
                                    <Text style={{fontFamily:fonts.primary[700], fontSize:15}}>Bantuan</Text>
                                </View>
                                <View>
                                    <Text style={{fontFamily:fonts.primary[300], fontSize:13}}> ></Text>
                                </View>
                            </View>
                        </View>
                        <Gap height={5} />
                        <View style={{ height: 6, backgroundColor: '#ececec' }} />
                        <Gap height={5} />
                        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                            <View style={{ height: 50, backgroundColor: colors.primary, borderRadius: 20, justifyContent:'center', alignItems:'center' }}>
                                <Text style={{color:colors.white, fontFamily:fonts.primary[800], fontSize:18}}>Keluar Akun</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    content: {
        backgroundColor : colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        marginTop: 5,
        paddingTop: 10,
    },
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 0.6,
        borderBottomColor: colors.dark2,
        alignItems: 'center',
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 100,
        marginRight: 12,
        backgroundColor: colors.yellow1,
        justifyContent: 'center',
        alignItems:'center'
    },
    name: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.black,
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
    }
})
