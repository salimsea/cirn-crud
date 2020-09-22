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


const Welcome = () => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.container}>
        
      </View>
    </>
  )
}

export default Welcome


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  }
});
