import React, { useRef, Component } from "react";
import { View, Button, ScrollView, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const PartialTransaction = () => {

    return (
      <View>
        <TouchableOpacity onPress={() => Scrollable.open()} style={styles.button}>
          <Text style={styles.buttonTitle}>SCROLLABLE</Text>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            Scrollable = ref;
          }}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
          height={Dimensions.get('window').height/2}
          closeOnDragDown={true}
          dragFromTopOnly={true}
          closeOnPressMask={true}
          closeOnPressBack={true}
        >
          <ScrollView>
            <View style={{ backgroundColor: 'white', height: 900 }}>
              <View style={[styles.gridButton]}>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
              </View>
            </View>
          </ScrollView>
        </RBSheet>
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

export default PartialTransaction;