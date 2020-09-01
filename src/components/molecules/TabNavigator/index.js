import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from '../../../utils';

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
                console.log(isFocused)
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
                        <View style={{ marginTop: 30, zIndex: 1 }} >
                            <TouchableOpacity
                                key={index}
                                accessibilityRole="button"
                                accessibilityStates={isFocused ? ['selected'] : []}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                            >
                                <View style={{ backgroundColor: colors.white, borderRadius: 10, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: colors.primary, margin: 10 }}>
                                        {label}
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

export default TabNavigator

// const styles = StyleSheet.create({

// })
