import React, { useRef, Component, useState, useEffect } from "react";
import { View, Button, ScrollView, StyleSheet, TouchableOpacity, Text, Dimensions, ToastAndroid } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { IconCheck, IconFPulsa, IconMoreActive } from "../../../assets";
import { Gap } from "../../../components";
import { colors, fonts } from "../../../utils";
import { SwipeablePanel } from 'rn-swipeable-panel';
import { setForm } from '../../../redux'
import { useSelector, useDispatch } from 'react-redux'
import Tips from 'react-native-root-tips';

const PulsaBiaya = ({navigation}) => {
  const {
      form,
      isNumber
  } = useSelector((state) => state.PulsaReducer);
  const dispatch = useDispatch();

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    onlySmall: true,
    noBar: true,
    showCloseButton: true,
    closeOnTouchOutside:true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    style: {
      backgroundColor: colors.white,
    },
  });
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [value, setValue] = useState(0);

  const openPanel = (param, key) => {
    setValue(param)
    setIsPanelActive(true);
    setChecked(key)
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const Checkout = () => {
    if (form.nomor === 0) {
      closePanel()
      Tips.show('nomor harus diisi', {
        duration: 2000,
        position: Tips.positions.BOTTOM,
        shadow: false,
        animation: true,
        hideOnPress: true,
        delay: 0
      });
    } else if (form.nomor.length >= 11 && form.nomor.length <= 13) {
      navigation.navigate("Checkout", { ok: form.nomor });
    } else {
      Tips.show('nomor tidak valid', {
        duration: 2000,
        position: Tips.positions.BOTTOM,
        shadow: false,
        animation: true,
        hideOnPress: true,
        delay: 0
      });
    }
  }

  const [checked, setChecked] = useState(0);
  var pulsa = [
    {
      name: '5000',
      labelHarga: 'Rp 5.100',
      labelPulsa: '5.000',
    },
    {
      name: '10000',
      labelHarga: 'Rp 10.100',
      labelPulsa: '10.000',
    },
    {
      name: '15000',
      labelHarga: 'Rp 15.100',
      labelPulsa: '15.000',
    },
    {
      name: '20000',
      labelHarga: 'Rp 20.100',
      labelPulsa: '20.000',
    },
    {
      name: '5000',
      labelHarga: 'Rp 5.100',
      labelPulsa: '5.000',
    },
    {
      name: '10000',
      labelHarga: 'Rp 10.100',
      labelPulsa: '10.000',
    },
    {
      name: '15000',
      labelHarga: 'Rp 15.100',
      labelPulsa: '15.000',
    },
    {
      name: '20000',
      labelHarga: 'Rp 20.100',
      labelPulsa: '20.000',
    },
    {
      name: '5000',
      labelHarga: 'Rp 5.100',
      labelPulsa: '5.000',
    },
    {
      name: '10000',
      labelHarga: 'Rp 10.100',
      labelPulsa: '10.000',
    },
    {
      name: '15000',
      labelHarga: 'Rp 15.100',
      labelPulsa: '15.000',
    },
    {
      name: '20000',
      labelHarga: 'Rp 20.100',
      labelPulsa: '20.000',
    },
];
  const [operator, setOperator] = useState(0);
  const kodeNomorTsel = [
    "0811","0812","0813","0821","0822","0852","0853","0823","0851"
  ];
  const kodeNomorIsat = [
    "0814","0815","0816","0855","0856","0857","0858"
  ];
  const kodeNomorXl = [
    "0817","0818","0819","0859","0877","0878"
  ];
  const kodeNomorAxis = [
    "0838","0831","0832","0833"
  ];
  const kodeNomorTri = [
    "0895","0896","0897","0898","0899"
  ];
  const kodeNomorSf = [
    "0881","0882","0883","0884","0885","0886","0887","0888","0889"
  ];

  useEffect(() => {
    if (form.nomor.length <= 4) {
      let nomor = form.nomor;
      cekNomor(nomor)
      closePanel();
    }

    if (form.nomor.length < 0)
      closePanel();
  });

  const cekNomor = (nomor) => {
    let text = `tidak ada`;
    nomor = nomor.slice(0, 4);
    var i = 0;
    while (i < kodeNomorTsel.length){
      if (nomor === kodeNomorTsel[i]) {
        text = `tsel`;
      }
      i++
    }
    i = 0;
    while (i < kodeNomorIsat.length){
      if (nomor === kodeNomorIsat[i]) {
        text = `isat`;
      }
      i++
    }
    i = 0;
    while (i < kodeNomorXl.length){
      if (nomor === kodeNomorXl[i]) {
        text = `xl`;
      }
      i++
    }
    i = 0;
    while (i < kodeNomorAxis.length){
      if (nomor === kodeNomorAxis[i]) {
        text = `axis`;
      }
      i++
    }
    i = 0;
    while (i < kodeNomorTri.length){
      if (nomor === kodeNomorTri[i]) {
        text = `tri`;
      }
      i++
    }
    i = 0;
    while (i < kodeNomorSf.length){
      if (nomor === kodeNomorSf[i]) {
        text = `smartfreen`;
      }
      i++
    }
    setOperator(text)
    closePanel()
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 5 }}>
          {
            operator == 'tidak ada' ?
            <Text>{operator}s</Text>
            :
              form.nomor.length >= 5 ?
              <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
                {
                  pulsa.map((pulsa, key) => {
                    return (
                      <View key={key} style={{alignItems:'center'}}>
                        {checked == key ? (
                          <View style={{ width: '50%', alignItems: 'center', marginBottom: 0}}>
                            <View style={{ width: Dimensions.get('window').width / 2.3, backgroundColor: colors.white, borderRadius: 15, marginHorizontal: 9, marginVertical: 10, borderColor:colors.primary, borderWidth:0 }}>
                              <View style={{padding: 10, flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={{fontFamily:fonts.primary[700], color:'#ff5722', fontSize: 15}}>Pulsa {pulsa.labelPulsa}</Text>
                                <IconCheck />
                              </View>
                              <View style={{alignItems:'center', backgroundColor:colors.primary, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding:5}}>
                                <Text style={styles.buttonTitle}>{pulsa.labelHarga}</Text>
                              </View>
                            </View>
                          </View>
                        ) : (
                            <TouchableOpacity
                              onPress={() => {
                                openPanel(pulsa.name, key)
                              }}
                              style={{ width: '50%', alignItems: 'center', marginBottom: 0 }}>
                              <View style={{ width: Dimensions.get('window').width / 2.3, backgroundColor: colors.white, borderRadius: 5, marginHorizontal: 9, marginVertical: 10 }}>
                                <View style={{padding: 10}}>
                                  <Text style={{fontFamily:fonts.primary[700], color:'#ff5722', fontSize: 15}}>Pulsa {pulsa.labelPulsa}</Text>
                                </View>
                                <View style={{alignItems:'center', backgroundColor:colors.primary, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding:5}}>
                                  <Text style={styles.buttonTitle}>{pulsa.labelHarga}</Text>
                                </View>
                              </View>
                            </TouchableOpacity>
                          )}
                      </View>
                    );
                  })
                }
              </View>
          : 
          <Text>{operator}s</Text>
          }
        </View>
      </ScrollView>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <View style={{marginHorizontal: 20, paddingTop:20}}>
          <Text style={{ fontFamily: fonts.primary[600], fontSize: 15 }}>Informasi Pelanggan</Text>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:13}}>Nomor Pelanggan</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 13 }}>{form.nomor}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:13}}>Nominal Pulsa</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 13 }}>{value}</Text>
            </View>
          </View>
        </View>
        <Gap height={3} />
        <View style={{ height: 8, backgroundColor: '#ececec' }} />
        <Gap height={10} />
          
        <View style={{marginHorizontal: 20}}>
          <Text style={{ fontFamily: fonts.primary[600], fontSize: 15 }}>Detail Produk</Text>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:13}}>Layanan</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 13 }}>TELKOMSEL</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:13}}>Nominal</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 13 }}>{value}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems: 'center', paddingBottom:5}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{fontFamily:fonts.primary[400], fontSize:13}}>Harga</Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.primary[300], fontSize: 13 }}>{value}</Text>
            </View>
          </View>
          
          <Gap height={Dimensions.get('window').height/49} />
          <TouchableOpacity onPress={() => Checkout()} style={{ height: 40, backgroundColor: colors.primary, borderRadius: 10, justifyContent:'center', alignItems:'center' }}>
              <Text style={{color:colors.white, fontFamily:fonts.primary[800], fontSize:16}}>Lanjutkan Pembayaran</Text>
          </TouchableOpacity>
        </View>
        
        
      </SwipeablePanel>
    </View>
      
    );
}
const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width/2.3,
    backgroundColor: colors.white,
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  buttonActive: {
    width: Dimensions.get('window').width/2.3,
    backgroundColor: colors.white,
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 8,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: colors.primary
  },
  buttonTitle: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.primary[500]
  },
  gridButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  
   radio: {
        flexDirection: 'row',
  },
  img: {
      height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  btn: {
      paddingHorizontal:20,
      flexDirection: 'row',
    alignItems: 'center',
  },
  btnccek: {
      paddingHorizontal:20,
      flexDirection: 'row',
      alignItems: 'center',
    backgroundColor:'red'
  },
  
});

export default PulsaBiaya;