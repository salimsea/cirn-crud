import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar, StyleSheet, ScrollView,Dimensions } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils';
import { IconHome, IconMore, IconRefresh } from '../../assets';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const Message = () => {
    console.log(getStatusBarHeight());
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <View style={{ paddingTop: getStatusBarHeight()+15, height: getStatusBarHeight()+60, alignContent:'center' }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',marginHorizontal:15}}>
                    <View>
                        <Text style={{fontSize:18,color:'white', fontFamily:fonts.primary[600]}}>Chat</Text>
                    </View>
                    <View>
                        <IconMore />
                    </View>
                </View>
            </View>
            <View style={{flex:1,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:'white', marginTop:0}}>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.avatar} /> 
                        <View>
                            <Text style={styles.name}>Yasin Hafid</Text>
                            <Text style={styles.desc}>Dimana lu lim ?</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            </View>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    content: {
        backgroundColor : colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        marginTop: 5,
        paddingTop: 10,
    },
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.dark2,
        alignItems: 'center',
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46/2,
        marginRight: 12,
        backgroundColor: colors.primary
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.black,
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
    }
})
