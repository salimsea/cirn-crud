import React, { useRef, Component, useState } from "react";
import { View, Button, ScrollView, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { IconFPulsa, IconMoreActive } from "../../../assets";
import { Gap } from "../../../components";
import { colors, fonts } from "../../../utils";
import { SwipeablePanel } from 'rn-swipeable-panel';

const PulsaBiaya = () => {
  const state = {
    value: 0,
  }
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    onlySmall: true,
    noBar: true,
    showCloseButton: true,
    closeOnTouchOutside:true,
    // noBackgroundOpacity: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    style: {
      backgroundColor: colors.white,
      height:Dimensions.get('window').height / 1,
    },
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [value, setValue] = useState(0);

  const openPanel = (param) => {
    setValue(param)
    console.log(Dimensions.get('window').height / 1);
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
      <View style={{ flex: 1 }}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 5}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
            <View style={{width: '50%', alignItems: 'center', marginBottom: 0}}>  
                <TouchableOpacity onPress={() => openPanel(5000)} style={styles.button}>
                  <Text style={styles.buttonTitle}>5.000</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', alignItems: 'center', marginBottom: 0}}>  
                <TouchableOpacity onPress={() => openPanel(2)} style={styles.button}>
                  <Text style={styles.buttonTitle}>15.000</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', alignItems: 'center', marginBottom: 0}}>  
                <TouchableOpacity onPress={() => openPanel(1)} style={styles.button}>
                  <Text style={styles.buttonTitle}>5.000</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', alignItems: 'center', marginBottom: 0}}>  
                <TouchableOpacity onPress={() => openPanel(2)} style={styles.button}>
                  <Text style={styles.buttonTitle}>15.000</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', alignItems: 'center', marginBottom: 0}}>  
                <TouchableOpacity onPress={() => openPanel(1)} style={styles.button}>
                  <Text style={styles.buttonTitle}>5.000</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', alignItems: 'center', marginBottom: 0}}>  
                <TouchableOpacity onPress={() => openPanel(2)} style={styles.button}>
                  <Text style={styles.buttonTitle}>15.000</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', alignItems: 'center', marginBottom: 0}}>  
                <TouchableOpacity onPress={() => openPanel(1)} style={styles.button}>
                  <Text style={styles.buttonTitle}>5.000</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '50%', alignItems: 'center', marginBottom: 0}}>  
                <TouchableOpacity onPress={() => openPanel(2)} style={styles.button}>
                  <Text style={styles.buttonTitle}>15.000</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <View style={{marginHorizontal: 20, paddingTop:20}}>
          <Text style={{ fontFamily: fonts.primary[600], fontSize: 18 }}>Informasi Pelanggan</Text>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>Nomor Pelanggan</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 14 }}>082112235774</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>Nominal Pulsa</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 14 }}>{value}</Text>
            </View>
          </View>
        </View>
        <Gap height={3} />
        <View style={{ height: 8, backgroundColor: '#ececec' }} />
        <Gap height={10} />
           
        <View style={{marginHorizontal: 20}}>
          <Text style={{ fontFamily: fonts.primary[600], fontSize: 18 }}>Detail Produk</Text>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>Layanan</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 14 }}>TELKOMSEL</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>Nominal</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 14 }}>{value}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:14}}>Harga</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 14 }}>{value}</Text>
            </View>
          </View>
        </View>
        
        
      </SwipeablePanel>
      </View>
    );
}
const styles = StyleSheet.create({
  button: {
    width: 180,
    backgroundColor: colors.white,
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 5,
    margin: 10
  },
  buttonTitle: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.primary[500]
  },
  gridButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  }
  
});

export default PulsaBiaya;