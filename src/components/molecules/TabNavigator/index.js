import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors, fonts } from '../../../utils';

const TabNavigator = ({ state, descriptors, navigation, position }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_, i) => i);
                const opacity = Animated.interpolate(position, {
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });
                // const { cok } = state.params;
                // console.log(route.params)
                return (
                    <View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        
                        <View style={{ marginTop: 0, zIndex: 1 }}>
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityStates={isFocused ? ['selected'] : []}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                            >
                                {/* <View style={{ borderWidth:2, borderColor: isFocused ? '#066b06' : '#2e732e',backgroundColor: '#2e732e',  height: 30, width:90, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: colors.white, margin: 3, fontSize:15, fontFamily:fonts.primary[600] }}>
                                        {label}
                                    </Text>
                                </View> */}
                                <View style={{ height: 40, alignContent: 'center', alignItems:'center', marginTop: 10}}>
                                    <View>
                                        <Text style={{ fontSize: 17, color: 'black', fontFamily: isFocused ? fonts.primary[600] : fonts.primary[300] }}>{label}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        </View>
                        {
                            isFocused ? <View style={{height:2,backgroundColor:colors.primary, width:'100%'}} /> : <View style={{height:2,backgroundColor:colors.white, width:'100%'}} />
                        }
                    </View>
                );
            })}
        </View>
    );
}

export default TabNavigator

// const styles = StyleSheet.create({

// })
