import React, { useRef, Component } from "react";
import { View, Button, ScrollView, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { IconFPaketData, IconFPulsa, IconMoreActive, IconScan } from "../../../assets";
import { Gap } from "../../../components";
import { colors, fonts } from "../../../utils";

const HistoryTransaction = () => {

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
            <View style={{backgroundColor:'#ececec'}}>
              <View style={{justifyContent: 'space-between', flexDirection: 'row', marginHorizontal:25,marginVertical:15 }}>
                <View style={{width: '10%', alignItems: 'center', }}>  
                    <View style={{width: 58, height: 58, borderWidth: 1, backgroundColor: '#E6F3FF',borderColor:'#E6F3FF', borderRadius: 100, justifyContent: 'center' , alignItems: 'center'}}>
                      <IconFPulsa />
                    </View>
                </View>
                <View style={{width: '65%', justifyContent:'center'}}>
                  <Text>Pembelian pulsa berhasil. No Transaksi anda HJK43244HJ32 </Text>
                  <Gap height={5} />
                  <Text style={{fontFamily:fonts.primary[300], fontSize:12}}>29 Juli 2001</Text>
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
                <View style={{width: '65%', justifyContent:'center'}}>
                  <Text>Pembelian Token PLN telah berhasil. No Transaksi anda LKJDAS8778DD </Text>
                  <Gap height={5} />
                  <Text style={{fontFamily:fonts.primary[300], fontSize:12}}>29 Juli 2001</Text>
                </View>
                <View style={{width: '10%', alignItems: 'flex-end'}}>  
                  <IconMoreActive />
                </View>
              </View>
              <View style={{height:0.5,backgroundColor:colors.dark2}} />
            </View>
        </ScrollView>
      </View>
    );
}
const styles = StyleSheet.create({
  
});

export default HistoryTransaction;