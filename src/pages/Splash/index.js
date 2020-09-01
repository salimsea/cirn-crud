import React, { useRef, Component } from "react";
import { View, Button, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

class Splash extends Component {
  // componentDidMount() {
  //   this.Scrollable.open();
  // }
  render() {

    return (
      <View>
        <TouchableOpacity onPress={() => this.Scrollable.open()} style={styles.button}>
          <Text style={styles.buttonTitle}>SCROLLABLE</Text>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.Scrollable = ref;
          }}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              bottom: 100,
            }
          }}
          height={600}
          closeOnDragDown={true}
          dragFromTopOnly={true}
          closeOnPressMask={false}
          closeOnPressBack={false}
          minClosingHeight={0}
        >
          <ScrollView>
            <View style={{ backgroundColor: 'red', height: 900 }}>
              <View style={[styles.gridButton]}>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                <Text>woi</Text>
                {/* <FAIcon name={grid.icon} style={styles.gridIcon} /> */}
              </View>
              <Text style={styles.gridLabel}>x</Text>
            </View>
          </ScrollView>
        </RBSheet>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textTitle: {
    fontSize: 20,
    marginTop: 120
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50
  },
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
  listContainer: {
    flex: 1,
    padding: 25
  },
  listTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666"
  },
  listButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  listIcon: {
    fontSize: 26,
    color: "#666",
    width: 60
  },
  listLabel: {
    fontSize: 16
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    marginBottom: 20
  },
  gridButtonContainer: {
    flexBasis: "25%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  gridButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  gridIcon: {
    fontSize: 30,
    color: "white"
  },
  gridLabel: {
    fontSize: 14,
    paddingTop: 10,
    color: "#333"
  },
  dateHeaderContainer: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dateHeaderButton: {
    height: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  dateHeaderButtonCancel: {
    fontSize: 18,
    color: "#666",
    fontWeight: "400"
  },
  dateHeaderButtonDone: {
    fontSize: 18,
    color: "#006BFF",
    fontWeight: "500"
  },
  inputContainer: {
    borderTopWidth: 1.5,
    borderTopColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  inputIcon: {
    fontSize: 24,
    color: "#666",
    marginHorizontal: 5
  },
  inputIconSend: {
    color: "#006BFF"
  },
  input: {
    flex: 1,
    height: 36,
    borderRadius: 36,
    paddingHorizontal: 10,
    backgroundColor: "#f1f1f1",
    marginHorizontal: 10
  },
  messageContainer: {
    flex: 1,
    padding: 25
  },
  messageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222"
  },
  message: {
    fontSize: 17,
    lineHeight: 24,
    marginVertical: 20
  },
  messageButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  messageButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#3385ff",
    marginLeft: 10
  },
  messageButtonText: {
    color: "#3385ff",
    fontSize: 16,
    fontWeight: "bold"
  },
  messageButtonRight: {
    backgroundColor: "#3385ff"
  },
  messageButtonTextRight: {
    color: "#fff"
  }
});

export default Splash;