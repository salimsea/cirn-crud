import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconHome, IconMessages, IconInbox, IconHomeActive, IconMessagesActive, IconInboxActive,IconUser, IconUserActive, IconHistoryActive, IconHistory } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Home'){
            return active ? <IconHomeActive /> : <IconHome />;
        }
        if(title === 'Message'){
            return active ? <IconMessagesActive /> : <IconMessages />;
        }
        if(title === 'Inbox'){
            return active ? <IconInboxActive /> : <IconInbox />;
        }
        if(title === 'User'){
            return active ? <IconUserActive /> : <IconUser />;
        }
        if(title === 'History'){
            return active ? <IconHistoryActive /> : <IconHistory />;
        }
        return <IconHome />;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => ({
        fontSize : 12,
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[800],
        marginTop: 5
    }),
})
