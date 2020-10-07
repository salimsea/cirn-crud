import React, { useRef, Component } from "react";
import { View, Button, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { IconFPulsa, IconMoreActive } from "../../../assets";
import { Gap } from "../../../components";
import { colors, fonts } from "../../../utils";

const HistoryTopup = () => {
    return (
      // <View>
      //   <TouchableOpacity onPress={() => Scrollable.open()} style={styles.button}>
      //     <Text style={styles.buttonTitle}>SCROLLABLE</Text>
      //   </TouchableOpacity>
      //   <RBSheet
      //     ref={ref => {
      //       Scrollable = ref;
      //     }}
      //     customStyles={{
      //       container: {
      //         borderTopLeftRadius: 10,
      //         borderTopRightRadius: 10,
      //       }
      //     }}
      //     height={Dimensions.get('window').height/2}
      //     closeOnDragDown={true}
      //     dragFromTopOnly={true}
      //     closeOnPressMask={true}
      //     closeOnPressBack={true}
      //   >
      //     <ScrollView>
      //       <View style={{ backgroundColor: 'white', height: 900 }}>
      //         <View style={[styles.gridButton]}>
      //           <Text>woi</Text>
      //           <Text>woi</Text>
      //           <Text>woi</Text>
      //         </View>
      //       </View>
      //     </ScrollView>
      //   </RBSheet>
      // </View>
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
                <Text>Pengisian saldo sebesar IDR 210.000 telah berhasil. Saldo sekarang anda sebesar 211.213 </Text>
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
  button: {
    width: 150,
    backgroundColor: "#4EB151",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 3,
    margin: 10
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  },
  gridButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  }
  
});

export default HistoryTopup;