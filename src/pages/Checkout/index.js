import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StatusBar, StyleSheet, ScrollView,Dimensions, Image } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import { IconBackYellow, IconCheck, PaymentBni, PaymentAbupay, PaymentMandiri, PaymentOvo, ILNullPhoto, PaymentGopay, PaymentBca } from '../../assets';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Gap } from '../../components';

const Checkout = ({ navigation, route }) => {
    const [checked, setChecked] = useState(0);
    var payments = [
        {
            name: 'SALDO ABUPAY 17.346',
            img: PaymentAbupay,
        },
        {
            name: 'OVO',
            img: PaymentOvo,
        },
        {
            name: 'GOPAY',
            img: PaymentGopay,
        },
        {
            name: 'MANDIRI',
            img: PaymentMandiri,
        },
        {
            name: 'BCA',
            img: PaymentBca,
        },
        {
            name: 'BNI',
            img: PaymentBni,
        },
    ];
    
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <View style={{ paddingTop: getStatusBarHeight()+15, height: getStatusBarHeight()+60, alignContent:'center' }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:15}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row'}}>
                        <IconBackYellow />
                        <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600],paddingLeft:10}}> Checkout</Text>
                    </TouchableOpacity>
                    <View>
                        {/* <IconRefresh /> */}
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <View style={{ width: '100%',  backgroundColor: colors.white, borderBottomColor: colors.dark2, borderBottomWidth: 0.5,paddingHorizontal:20, paddingVertical:10 }}>
                    <Text style={{ fontFamily: fonts.primary[500], fontSize: 16 }}>Pulsa Prabayar</Text>
                    <Gap height={4} />
                    <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                        <View>
                            <View style={{paddingVertical:3}}>
                                <Text>Jenis Layanan</Text>
                            </View>
                            <View style={{paddingVertical:3}}>
                                <Text>Nomor</Text>
                            </View>
                            <View style={{paddingVertical:3}}>
                                <Text>Harga</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{paddingVertical:3}}>
                                <Text style={{fontFamily:fonts.primary[400]}}>Telkomsel - Simpati 15.000</Text>
                            </View>
                            <View style={{paddingVertical:3}}>
                                <Text style={{fontFamily:fonts.primary[400]}}>{route.params.ok}</Text>
                            </View>
                            <View style={{paddingVertical:3}}>
                                <Text style={{fontFamily:fonts.primary[400]}}>Rp 15.000</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ flex:1, paddingHorizontal:20 }}>
                    <Gap height={20} />
                    <Text style={{ fontFamily: fonts.primary[500], fontSize: 20 }}>Konfirmasi Pembayaran Anda</Text>
                    <Gap height={15} />
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 10 }}>SAYA AKAN MEMBAYAR DENGAN</Text>
                    <Gap height={10} />
                    {/* <View style={styles.effect}>
                        <View style={{ width: '100%', height: 60, backgroundColor: colors.white, borderRadius: 5, padding:10, justifyContent:'center' }}>
                            <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems:'center' }}>
                                    <View style={{width: 40, height: 40, borderRadius: 100, backgroundColor: colors.white, marginRight:10}}>
                                        <Image source={PaymentBca} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 100}} />
                                    </View> 
                                    <Text>BANK BCA</Text>
                                </View>
                                <View>
                                    <IconCheck />
                                </View>
                            </View>
                        </View>
                    </View> */}
                    <ScrollView>
                    {payments.map((payments, key) => {
                    return (
                        <View key={key}>
                            {checked == key ? (
                                <View style={styles.effect1}>
                                    <View style={{ width: '100%', height: 60, backgroundColor: colors.white, borderRadius: 5, padding:10, justifyContent:'center' }}>
                                        
                                        <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems:'center' }}>
                                                <View style={{width: 40, height: 40, borderRadius: 100, backgroundColor: colors.white, marginRight:10}}>
                                                    <Image source={payments.img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 100}} />
                                                </View> 
                                                <Text>{payments.name}</Text>
                                            </View>
                                            <View>
                                                <IconCheck />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ) : (
                                <TouchableOpacity onPress={() => {setChecked(key);}} style={styles.effect}>
                                    <View style={{ width: '100%', height: 60, backgroundColor: colors.white, borderRadius: 5, padding:10, justifyContent:'center' }}>
                                        <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                            <View style={{width: 40, height: 40, borderRadius: 100, backgroundColor: colors.white, marginRight:10}}>
                                                <Image source={payments.img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 100}} />
                                            </View> 
                                            <View>
                                                <Text>{payments.name}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                        
                            )}
                        </View>
                    );
                    })}
                    </ScrollView>
                    
                    
                </ScrollView>
                <View style={styles.bottomCheckout}>
                    <View>
                        <Text style={{fontFamily:fonts.primary[400]}}>Total Pembayaran</Text>
                        <Text style={{fontFamily:fonts.primary[800], color:'#ff5722', fontSize:15}}>Rp. 15.000</Text>
                    </View>
                    <TouchableOpacity style={{ height: 40, backgroundColor: '#ff5722', borderRadius: 5, justifyContent:'center', alignItems:'center',paddingHorizontal:15 }}>
                        <Text style={{color:colors.white, fontFamily:fonts.primary[700], fontSize:14}}>Bayar Sekarang !</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    content: {
        backgroundColor : '#f9f9f9',
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.dark2,
        alignItems: 'center',
    },
    effect: {
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        borderColor:colors.dark2
    },
    effect1: {
        borderWidth: 2,
        marginBottom: 10,
        borderRadius: 5,
        borderColor:colors.primary
    },
    bottomCheckout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: colors.white,
        borderWidth: 0.6,
        borderColor: '#dcdcdc',
        alignItems:'center'
    },

})
