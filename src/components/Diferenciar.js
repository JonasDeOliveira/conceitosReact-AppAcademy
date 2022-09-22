import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native'

function Diferenciar(props) {

    if (Platform.OS == 'android') return <Text>Android</Text> 
    if (Platform.OS == 'ios') return <Text>iOS</Text>

}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default Diferenciar