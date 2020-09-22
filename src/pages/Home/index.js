import React, { useState, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors } from '../../utils/colors';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { fonts } from '../../utils';
import { Gap } from '../../components';

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


const Home = () => {

  return (
    <>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.page}>

        <View style={styles.background}>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <View style={styles.avatar} /> 
              </View>
              
              <View> 
                <Text style={styles.name}>Hai, Salim Segaf</Text>
                <Gap height={5} />
                <View style={{ flexDirection: 'row' }}>
                  <View style={{backgroundColor:"white", height:15, borderRadius:10, alignContent:'center',marginRight:5}}>
                    <Text style={styles.profession}>Rp. 120.000</Text>
                  </View>
                  <View style={{backgroundColor:"white", height:15, borderRadius:10, alignContent:'center'}}>
                    <Text style={styles.profession}>Poin. 89</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' ,width: 100, justifyContent:'space-between' }}>
              <View>
                <View style={{width:46, height:46, backgroundColor:'white'}} /> 
              </View>
              <View>
                <View style={{width:46, height:46, backgroundColor:'white'}} /> 
              </View>
            </View>
              
          </View>
        </View>
        
        <View style={styles.content}>
          <ScrollView>
            <View style={{ marginLeft: 15, marginRight: 15 }}>
              <Gap height={5} />
              <View style={{ width: '100%', height: 200, backgroundColor: '#b9b9b9', borderRadius: 20 }} />
              <Gap height={20} />
              {/* <View style={{ flexDirection: 'row',justifyContent:'space-between', backgroundColor:'white', alignContent:"center" }}>
                <Text style={{color:colors.black, fontFamily:fonts.primary[700], fontSize: 17}}>Kategori</Text>
                <Text style={{color:colors.primary, fontFamily:fonts.primary[700], fontSize: 15}}>Lainnya.. </Text>
              </View> */}
              <Text style={{color:colors.black, fontFamily:fonts.primary[600], fontSize: 20, maxWidth:300}}>Mau Transaksi Apa Hari ini?</Text>
              <Gap height={20} />
              <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'center', marginBottom: 18}}>  
                      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center' , alignItems: 'center'}}>
                        <Text>PULSA</Text>
                      </View>
                      <Text style={{fontSize:11, fontWeight: '900', textAlign:'center', marginTop: 6}}>Isi Pulsa</Text>
                  </View>
                </View>
              </View>
              <Gap height={20} />
            </View>
            
              <View style={{paddingBottom: 0, backgroundColor:colors.primary}}>
                  {/* <View style={{height: 15, width: 60, marginLeft: -4}}>
                  <Image source={require('../../../assets/logo/gojek.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                  </View> */}
                <View style={{margin:10}}>
                  <Text style={{color:colors.black, fontFamily:fonts.primary[600], fontSize: 17, marginTop: 15, marginBottom: 20}}>Lengkapi profil kamu!</Text>
                  <View style={{flexDirection: 'row', marginBottom: 16}}>
                    <View>
                        {/* <Image source={require('../../../assets/dummy/facebook-connect.png')} /> */}
                    </View>
                    <View style={{marginLeft: 16, flex: 1}}>
                        <Text style={{fontSize: 15, fontWeight:'bold', color: '#4A4A4A'}}>Connect With Facebooks</Text>
                        <Text style={{fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '80%'}}>Login faster without verification code</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
                  </TouchableOpacity>
                </View>
                  
              </View>
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
    marginHorizontal: 15
  },
  avatar: {
      width: 46,
      height: 46,
      borderRadius: 100,
      marginRight: 12,
      backgroundColor:"white"
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: 'white',
  },
  profession: {
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: colors.black,
    marginRight:5,
    marginLeft:5
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
      height: 180,
      paddingTop: 70,
  },
  
  content: {
      backgroundColor : colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      flex: 1,
      marginTop: -30,
      paddingTop: 14,
  }
});

export default Home;
