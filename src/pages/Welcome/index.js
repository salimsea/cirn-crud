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

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const SLIDING_UP_PANEL_HEIGHT = Platform.select({
  // The issue doesn't affect iOS
  ios: Dimensions.get('window').height,
  android: Dimensions.get('window').height
})

const Welcome = () => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.container}>
        <SlidingUpPanel ref={c => (_panel = c)}
          draggableRange={{ top: SLIDING_UP_PANEL_HEIGHT / 1.20, bottom: 120 }}
          backdropOpacity={0.1}
        >
          {dragHandler => (
            <View style={styles.content}>
              <View style={styles.dragHandler} {...dragHandler}>
                <TouchableOpacity onPress={() => _panel.show()}>
                  <View style={{ width: 45, height: 5, backgroundColor: '#ccc', borderRadius: 10 }} />
                </TouchableOpacity>
              </View>
              <ScrollView>
                <View style={{ marginLeft: 15, marginRight: 15 }}>
                  <View style={{ height: 120, backgroundColor: '#4f91c3', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                  <View style={{ height: 900 }} />
                </View>
              </ScrollView>
            </View>
          )}
        </SlidingUpPanel>
      </View>
    </>
  )
}

export default Welcome

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;
// const APPBAR_HEIGHT = Platform.OS === 'ios' ? 960 : 960;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    zIndex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  dragHandler: {
    alignSelf: 'stretch',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
