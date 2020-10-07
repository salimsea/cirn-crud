import React, { useState, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import { Gap } from '../../components';
import { IconFPulsa,IconFPaketData, IconScan, IconTopup, ILHeader, ILHospitalBG, ILNullPhoto, IconHistoryActive, IconHomeActive, IconInboxActive, IconUserActive, IconMessagesActive } from '../../assets';

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


const Home = ({navigation}) => {

  return (
    <>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.page}>

        <ImageBackground source={ILHeader} style={styles.background}>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <View style={styles.avatar}>
                  <View style={{width: 40, height: 40, borderRadius: 100, backgroundColor: 'pink'}}>
                    <Image source={ILNullPhoto} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 100}} />
                  </View> 
                </View> 
              </View>
              
              <View> 
                <Text style={styles.name}>Hai, Salim Segaf</Text>
                <Gap height={5} />
                <View style={{ flexDirection: 'row' }}>
                  <View style={{backgroundColor:"white", height:15, borderRadius:10, alignContent:'center',marginRight:5}}>
                    <Text style={styles.profession}>BASIC</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ alignItems: 'center',justifyContent:'center' }}>
              <IconScan />
              <Text style={{fontSize:10,color:colors.white,fontFamily:fonts.primary[600]}}>SCAN QR</Text>
            </View>

          </View>
        </ImageBackground>
        <View style={{flex:1,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:'white', marginTop: getStatusBarHeight()-105}}>
          <ScrollView>
            <View style={styles.content}>
              <View style={{ marginLeft: 15, marginRight: 15 }}>
                <Gap height={5} />
                {/* <Gap height={20} /> */}
                <View style={styles.container}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight: 20}}>
                      <IconHomeActive />
                    </View>
                    <View> 
                      <Text style={styles.name1}>Sisa Saldo</Text>
                      <Gap height={5} />
                      <Text style={{fontFamily:fonts.primary[600], fontSize:16, color:colors.primary}}>RP. 100.212.302</Text>
                    </View>
                  </View>
                  
                  <View style={{ height: 35, backgroundColor: colors.primary, borderRadius: 5, justifyContent:'center', alignItems:'center' }}>
                      <Text style={{color:colors.white, fontFamily:fonts.primary[800], fontSize:15, marginHorizontal:10}}>+ Isi Saldo</Text>
                  </View>
                </View>
                <Gap height={10} />

                <View style={{height:0.6,backgroundColor:colors.dark2}} />
                <Gap height={20} />

                <View style={{ width: '100%', height: 200, backgroundColor: '#b9b9b9', borderRadius: 20 }} />
                
                <Gap height={20} />
                <Text style={{color:colors.black, fontFamily:fonts.primary[700], fontSize: 20, maxWidth:300}}>Mau transaksi apa hari ini?</Text>
                <Gap height={20} />
                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0}}>
                  <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
                    <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                        <TouchableOpacity onPress={() => navigation.navigate('Pulsa')} style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#f6dbdb',borderColor:'#f6dbdb', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                          <IconUserActive />
                        </TouchableOpacity>
                        <Text style={{fontSize:11, fontFamily: fonts.primary[600], textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                    </View>
                    <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                        <View style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#f2e3c6',borderColor:'#f2e3c6', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                          <IconHistoryActive />
                        </View>
                        <Text style={{fontSize:11, fontFamily: fonts.primary[600], textAlign:'center', marginTop: 6}}>Token PLN</Text>
                    </View>
                    <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                        <View style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#E6F3FF',borderColor:'#E6F3FF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                          <IconHomeActive />
                        </View>
                        <Text style={{fontSize:11, fontFamily: fonts.primary[600], textAlign:'center', marginTop: 6}}>Voucher</Text>
                    </View>
                    <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                        <View style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#d3ece1',borderColor:'#d3ece1', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                          <IconInboxActive />
                        </View>
                        <Text style={{fontSize:11, fontFamily: fonts.primary[600], textAlign:'center', marginTop: 6}}>Sedekah</Text>
                    </View>
                    <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                        <View style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#eed2e8',borderColor:'#eed2e8', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                          <IconMessagesActive />
                        </View>
                        <Text style={{fontSize:11, fontFamily: fonts.primary[600], textAlign:'center', marginTop: 6}}>Withdraw</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Gap height={20} />
                
              <View style={{backgroundColor:'#FDC500'}}>
                <View style={{marginHorizontal:10, paddingBottom:20}}>
                  <Text style={{color:colors.black, fontFamily:fonts.primary[600], fontSize: 17, marginTop: 15, marginBottom: 20}}>Lengkapi profil kamu!</Text>
                  <View style={{flexDirection: 'row', marginBottom: 16, justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <Image source={ILNullPhoto} style={{width:100,height:100}} />
                    </View>
                    <View style={{marginLeft: 16, flex: 1}}>
                        <Text style={{fontSize: 15, fontWeight:'bold', color: '#4A4A4A'}}>Melindungi Keamanan Akun</Text>
                        <Text style={{fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '80%'}}>Karena data kamu adalah sebagai jaminan kami dalam keamanan  ber-ransaksi</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={{backgroundColor: colors.primary, paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>LENGKAPI SEKARANG</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <Gap height={20} />
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16,alignItems:'center'}}>
                  <Text style={{color:colors.black, fontFamily:fonts.primary[600], fontSize: 17}}>Promo Paket</Text>
                  <Text style={{color:colors.primary, fontFamily:fonts.primary[400], fontSize: 15}}>Lainnya.. </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', paddingLeft: 16}}>
                  <View style={{marginRight: 16}}>
                      <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                      <Image source={ILHospitalBG} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4}} />
                      </View>
                      <Text style={{fontSize: 13, fontWeight: 'bold', fontFamily:fonts.primary[400], color:colors.black, marginTop: 12, maxWidth:150}}>PULSA XL 10.000</Text>
                  </View>
                  <View style={{marginRight: 16}}>
                      <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                      <Image source={ILHospitalBG} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4}} />
                      </View>
                      <Text style={{fontSize: 13, fontWeight: 'bold', fontFamily:fonts.primary[400], color:colors.black, marginTop: 12, maxWidth:150}}>PULSA XL 10.000</Text>
                  </View>
                  <View style={{marginRight: 16}}>
                      <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                      <Image source={ILHospitalBG} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4}} />
                      </View>
                      <Text style={{fontSize: 13, fontWeight: 'bold', fontFamily:fonts.primary[400], color:colors.black, marginTop: 12, maxWidth:150}}>PULSA XL 10.000</Text>
                  </View>
                  <View style={{marginRight: 16}}>
                      <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                      <Image source={ILHospitalBG} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4}} />
                      </View>
                      <Text style={{fontSize: 13, fontWeight: 'bold', fontFamily:fonts.primary[400], color:colors.black, marginTop: 12, maxWidth:150}}>PULSA XL 10.000</Text>
                  </View>
                  <View style={{marginRight: 16}}>
                      <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
                      <Image source={ILHospitalBG} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4}} />
                      </View>
                      <Text style={{fontSize: 13, fontWeight: 'bold', fontFamily:fonts.primary[400], color:colors.black, marginTop: 12, maxWidth:150}}>PULSA XL 10.000</Text>
                  </View>
                </ScrollView>
            </View>
          </View>
            <Gap height={20} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;
// const APPBAR_HEIGHT = Platform.OS === 'ios' ? 960 : 960;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems:'center', 
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
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: 'white',
  },
  name1: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: colors.black,
  },
  profession: {
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: colors.black,
    marginRight:5,
    marginLeft:5
  },
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  background: {
      height: 180,
      paddingTop: getStatusBarHeight()+15,
  },
  
  content: {
      backgroundColor : colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      flex: 1,
      // marginTop: getStatusBarHeight()-105,
      paddingTop: 14,
  }
});

export default Home;
