import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Display(props) {

    return (
        <View style={[styles.Container]}>
            <Text style={styles.Text}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        backgroundColor: '#ccc',
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    Text: {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        paddingRight: 20
    }
})

export default Display