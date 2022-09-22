import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

function Filho(props) {

    return (
        <View style={[styles.Container]}>
            <Text>{props.a}</Text>
            <Text>{props.b}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default Filho