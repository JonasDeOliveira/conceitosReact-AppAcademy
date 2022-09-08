import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

function Titulo(props) {

    return (
        <View style={[styles.Container]}>
            <Text>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default Titulo